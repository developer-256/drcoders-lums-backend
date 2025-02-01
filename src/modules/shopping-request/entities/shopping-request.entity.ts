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
export class ShoppingRequest {
  @PrimaryGeneratedColumn()
  requestID: number;

  @ManyToOne(() => User, (user) => user.userID)
  buyer: User;

  @Column({
    type: 'enum',
    enum: ['OPEN', 'IN_PROGRESS', 'DELIVERED', 'CANCELLED'],
    default: 'OPEN',
  })
  status: string;

  @Column({ type: 'decimal' })
  totalBudget: number;

  @Column()
  deliveryAddress: string;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
