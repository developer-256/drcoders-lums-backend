import { ShoppingRequest } from 'src/modules/shopping-request/entities/shopping-request.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  JoinColumn,
} from 'typeorm';

@Entity()
export class ShoppingRequestItem {
  @PrimaryGeneratedColumn()
  itemID: number;

  @Column()
  request_id: number;

  @Column()
  itemName: string;

  @Column()
  quantity: number;

  @Column()
  preferredStore: string;

  @Column({ type: 'decimal' })
  priceEstimate: number;

  @ManyToOne(() => ShoppingRequest, (request) => request.requestID)
  @JoinColumn({ name: 'request_id' })
  request: ShoppingRequest;
}
