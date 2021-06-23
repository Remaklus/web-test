import { Controller, Get, Post } from "@overnightjs/core";
import { Request, Response } from 'express'
const { Sequelize, Op } = require("sequelize");
import { Inventory, Reservation } from "../models/index";

@Controller('reservation')
export class ReservationController {
  @Get('')
  private async get(req: Request, res: Response) {
    const reservations = await Reservation.findAll();
    return res.send(reservations)
  }

  @Post('')
  private async post(req: Request, res: Response) {
    const {
      name, email, party_size, time, restaurant_id
    } = req.body;
   
    const inventory = await Inventory.findOne({
      where: { 
        restaurant_id: restaurant_id, 
        party_size: party_size, 
        start_time: { [Op.lte]: time},
        end_time:   { [Op.gte]: time},

      },
    })

    const existingReservations = await Reservation.findAll({
      where: {
        inventory_id: inventory.id,
        time: time
      }
    })
    
    if(existingReservations.length >= inventory.inventory_size) {
      return res.send({error: "No reservations are available."})
    } else {
      const reservation = await Reservation.create({
        name,
        email,
        party_size,
        time,
        restaurant_id,
        inventory_id: inventory.id
      })
      return res.send(reservation);
    }
  }
}