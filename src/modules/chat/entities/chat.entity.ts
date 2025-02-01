import { User } from 'src/modules/user/entities/user.entity';
import {
  Entity,
  PrimaryGeneratedColumn,
  ManyToOne,
  Column,
  CreateDateColumn,
} from 'typeorm';

@Entity()
export class Chat {
  @PrimaryGeneratedColumn()
  chatID: number;

  @ManyToOne(() => User, (user) => user.userID)
  buyer: User;

  @ManyToOne(() => User, (user) => user.userID)
  shopper: User;

  @Column()
  message: string;

  @CreateDateColumn()
  sentAt: Date;
}
