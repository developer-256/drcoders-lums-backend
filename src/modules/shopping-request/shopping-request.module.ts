import { Module } from '@nestjs/common';
import { ShoppingRequestService } from './shopping-request.service';
import { ShoppingRequestController } from './shopping-request.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingRequest } from './entities/shopping-request.entity';
import { ShoppingRequestItemModule } from '../shopping-request-item/shopping-request-item.module';

@Module({
  imports: [
    TypeOrmModule.forFeature([ShoppingRequest]),
    ShoppingRequestItemModule,
  ],
  controllers: [ShoppingRequestController],
  providers: [ShoppingRequestService],
  exports: [ShoppingRequestService],
})
export class ShoppingRequestModule {}
