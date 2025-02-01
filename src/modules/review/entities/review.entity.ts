import { Order } from 'src/modules/order/entities/order.entity';
import { User } from 'src/modules/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Review {
  @PrimaryGeneratedColumn()
  reviewID: number;

  @ManyToOne(() => Order, (order) => order.orderID)
  order: Order;

  @ManyToOne(() => User, (user) => user.userID)
  buyer: User;

  @ManyToOne(() => User, (user) => user.userID)
  shopper: User;

  @Column({ type: 'decimal' })
  rating: number;

  @Column()
  comment: string;

  @CreateDateColumn()
  createdAt: Date;
}
