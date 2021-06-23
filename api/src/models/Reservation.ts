import {
  BelongsTo,
  Column,
  CreatedAt,
  DeletedAt,
  Model,
  PrimaryKey, Table,
  UpdatedAt,
  ForeignKey
} from 'sequelize-typescript';
import { Inventory } from './Inventory';

import { Restaurant } from './Restaurant';

@Table({ tableName: 'reservations' })
export class Reservation extends Model<Reservation> {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number

  @Column
  name: string

  @Column
  email: string

  @Column
  party_size: number

  @Column
  time: Date

  @ForeignKey(() => Restaurant)
  @Column
  restaurant_id: number;

  @BelongsTo(() => Restaurant)
  resturant: Restaurant;

  @ForeignKey(() => Inventory)
  @Column
  inventory_id: number;  
  
  @BelongsTo(() => Inventory)
  inventory: Inventory;

  @DeletedAt
  deleted_at: string

  @CreatedAt
  created_at: string

  @UpdatedAt
  updated_at: string
}
