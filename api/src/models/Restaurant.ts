import {
  Column,
  CreatedAt,
  DeletedAt,
  HasMany,
  Model,
  PrimaryKey, Table,
  UpdatedAt
} from 'sequelize-typescript'
import { Inventory } from './Inventory';

@Table({ tableName: 'restaurants' })
export class Restaurant extends Model<Restaurant> {
  @PrimaryKey
  @Column({ autoIncrement: true })
  id: number

  @Column
  name: string

  @Column
  address: string

  @HasMany(() => Inventory)
  inventory: Inventory[]

  @DeletedAt
  deleted_at: string

  @CreatedAt
  created_at: string

  @UpdatedAt
  updated_at: string
}
