import { Module } from '@nestjs/common';
import { ShoppingRequestItemService } from './shopping-request-item.service';
import { ShoppingRequestItemController } from './shopping-request-item.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ShoppingRequest } from '../shopping-request/entities/shopping-request.entity';
import { ShoppingRequestItem } from './entities/shopping-request-item.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ShoppingRequestItem])],
  controllers: [ShoppingRequestItemController],
  providers: [ShoppingRequestItemService],
  exports: [ShoppingRequestItemService],
})
export class ShoppingRequestItemModule {}
