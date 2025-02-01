import { User } from 'src/modules/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
  UpdateDateColumn,
  JoinColumn,
} from 'typeorm';

@Entity()
export class ShoppingRequest {
  @PrimaryGeneratedColumn()
  requestID: number;

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

  @ManyToOne(() => User, (user) => user.userID)
  buyer: User;
}
