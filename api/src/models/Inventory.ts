import {
  BelongsTo,
  Column,
  CreatedAt,
  DeletedAt,
  ForeignKey,
  HasMany,
  Model,
  PrimaryKey, Table,
  UpdatedAt
} from 'sequelize-typescript'
import { Reservation } from './Reservation';

import { Restaurant } from './Restaurant';

@Table({ tableName: 'inventory' })
export class Inventory extends Model<Inventory> {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number

  @ForeignKey(() => Restaurant)
  @Column
  restaurant_id: number;

  @BelongsTo(() => Restaurant)
  resturant: Restaurant;

  @HasMany(() => Reservation)
  reservations: Reservation[]

  @Column
  party_size: number;

  @Column
  inventory_size: number;

  @Column
  start_time: Date

  @Column
  end_time: Date

  @DeletedAt
  deleted_at: string

  @CreatedAt
  created_at: string

  @UpdatedAt
  updated_at: string
}
