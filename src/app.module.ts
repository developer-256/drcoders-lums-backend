import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './modules/auth/auth.module';
import { JwtStrategy } from './modules/auth/jwt-strategy.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ConfigModule } from '@nestjs/config';
import { UserModule } from './modules/user/user.module';
import { ShoppingRequestModule } from './modules/shopping-request/shopping-request.module';
import { ShoppingRequestItemModule } from './modules/shopping-request-item/shopping-request-item.module';
import { OrderModule } from './modules/order/order.module';
import { TransactionModule } from './modules/transaction/transaction.module';
import { ReviewModule } from './modules/review/review.module';
import { ChatModule } from './modules/chat/chat.module';

@Module({
  imports: [
    ConfigModule.forRoot({
      isGlobal: true,
    }),
    TypeOrmModule.forRoot({
      type: 'postgres',
      url: process.env.DB_URL,
      ssl: true,
      entities: ['src/**/*entity*.ts'],
      autoLoadEntities: true,
      synchronize: true,
      extra: {
        ssl: {
          rejectUnauthorized: false,
        },
      },
    }),
    AuthModule,
    UserModule,
    ShoppingRequestModule,
    ShoppingRequestItemModule,
    OrderModule,
    TransactionModule,
    ReviewModule,
    ChatModule,
  ],
  controllers: [AppController],
  providers: [AppService, JwtStrategy],
})
export class AppModule {}
