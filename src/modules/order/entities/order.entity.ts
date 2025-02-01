import { ShoppingRequest } from 'src/modules/shopping-request/entities/shopping-request.entity';
import { User } from 'src/modules/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
} from 'typeorm';

@Entity()
export class Order {
  @PrimaryGeneratedColumn()
  orderID: number;

  @ManyToOne(() => ShoppingRequest, (request) => request.requestID)
  request: ShoppingRequest;

  @ManyToOne(() => User, (user) => user.userID)
  shopper: User;

  @Column({
    type: 'enum',
    enum: ['PENDING', 'PURCHASED', 'DELIVERED'],
    default: 'PENDING',
  })
  status: string;

  @Column({ type: 'decimal', nullable: true })
  finalCost: number;

  @Column({ nullable: true })
  receiptImage: string;

  @Column({ nullable: true })
  deliveryProof: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
