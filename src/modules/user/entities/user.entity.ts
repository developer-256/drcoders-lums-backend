//prettier-ignore
import { Entity,PrimaryGeneratedColumn,Column,ManyToOne,OneToMany,CreateDateColumn,UpdateDateColumn,} from 'typeorm';

@Entity()
export class User {
  @PrimaryGeneratedColumn()
  userID: number;

  @Column()
  name: string;

  @Column({ unique: true })
  email: string;

  @Column({ nullable: true, default: null })
  password: string;

  @Column({ type: 'enum', enum: ['BUYER', 'SHOPPER', 'ADMIN'] })
  role: string;

  @Column({ nullable: true, default: null })
  phone: string;

  @Column({ nullable: true, default: null })
  address: string;

  @Column({ type: 'decimal', default: 0 })
  walletBalance: number;

  @Column({ type: 'decimal', default: 0 })
  rating: number;

  @CreateDateColumn()
  createdAt: Date;

  @UpdateDateColumn()
  updatedAt: Date;
}
