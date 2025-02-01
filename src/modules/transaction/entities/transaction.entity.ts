import { Order } from 'src/modules/order/entities/order.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Transaction {
  @PrimaryGeneratedColumn()
  transactionID: number;

  @ManyToOne(() => Order, (order) => order.orderID)
  order: Order;

  @Column({ type: 'decimal' })
  amount: number;

  @Column({ type: 'enum', enum: ['DEPOSIT', 'PAYMENT_RELEASE', 'REFUND'] })
  transactionType: string;

  @Column({ type: 'enum', enum: ['PENDING', 'SUCCESS', 'FAILED'] })
  status: string;

  @CreateDateColumn()
  createdAt: Date;
}
