import { Module } from '@nestjs/common';
import { ShoppingRequestItemService } from './shopping-request-item.service';
import { ShoppingRequestItemController } from './shopping-request-item.controller';

@Module({
  controllers: [ShoppingRequestItemController],
  providers: [ShoppingRequestItemService],
})
export class ShoppingRequestItemModule {}
