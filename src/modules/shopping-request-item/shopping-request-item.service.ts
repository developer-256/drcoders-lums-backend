import { Injectable } from '@nestjs/common';
import { CreateShoppingRequestItemDto } from './dto/create-shopping-request-item.dto';
import { UpdateShoppingRequestItemDto } from './dto/update-shopping-request-item.dto';

@Injectable()
export class ShoppingRequestItemService {
  create(createShoppingRequestItemDto: CreateShoppingRequestItemDto) {
    return 'This action adds a new shoppingRequestItem';
  }

  findAll() {
    return `This action returns all shoppingRequestItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shoppingRequestItem`;
  }

  update(id: number, updateShoppingRequestItemDto: UpdateShoppingRequestItemDto) {
    return `This action updates a #${id} shoppingRequestItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingRequestItem`;
  }
}
