import { Controller, Get, Post } from '@overnightjs/core'
import { Request, Response } from 'express'

import { Restaurant } from '../models/index'

@Controller('restaurant')
export class RestaurantController {
  @Get('')
  private async get(req: Request, res: Response) {
    const restaurants = await Restaurant.findAll();
    return res.send(restaurants)
  }

  @Post('')
  private async post(req: Request, res: Response) {
    const { name, address } = req.body;
    const restuarant = await Restaurant.create({
      name: name,
      address: address,
      created_at: new Date(),
      updated_at: new Date()
    })
    return res.send({restaurantId: restuarant.dataValues.id});
  }
}
