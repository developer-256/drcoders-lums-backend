import { ShoppingRequest } from 'src/modules/shopping-request/entities/shopping-request.entity';
import { Entity, PrimaryGeneratedColumn, ManyToOne, Column } from 'typeorm';

@Entity()
export class ShoppingRequestItem {
  @PrimaryGeneratedColumn()
  itemID: number;

  @ManyToOne(() => ShoppingRequest, (request) => request.requestID)
  request: ShoppingRequest;

  @Column()
  itemName: string;

  @Column()
  quantity: number;

  @Column()
  preferredStore: string;

  @Column({ type: 'decimal' })
  priceEstimate: number;
}
