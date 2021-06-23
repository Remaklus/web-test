import { Controller, Get, Post } from '@overnightjs/core'
import { Request, Response } from 'express'

import { Inventory } from '../models/index'

@Controller('inventory')
export class InventoryController {
  @Get('')
  private async get(req: Request, res: Response) {
    const inventory = await Inventory.findAll();
    console.log('All Inventory:', JSON.stringify(inventory, null, 2))
    return res.send(inventory)
  }

  @Post('')
  private async post(req: Request, res: Response) {
    const { 
      restaurant_id, 
      party_size,
      inventory_size,
      start_time,
      end_time 
    } = req.body

    const inventory = await Inventory.create({
      restaurant_id,
      party_size,
      inventory_size,
      start_time,
      end_time,
      created_at: new Date(),
      updated_at: new Date()
    })

    console.log('Created Inventory:', inventory.dataValues)
    return res.send({inventoryId: inventory.dataValues.id})
  }
}
