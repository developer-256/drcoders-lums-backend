import { Module } from '@nestjs/common';
import { ShoppingRequestService } from './shopping-request.service';
import { ShoppingRequestController } from './shopping-request.controller';

@Module({
  controllers: [ShoppingRequestController],
  providers: [ShoppingRequestService],
})
export class ShoppingRequestModule {}
