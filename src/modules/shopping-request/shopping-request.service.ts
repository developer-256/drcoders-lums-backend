import { Injectable } from '@nestjs/common';
import { CreateShoppingRequestDto } from './dto/create-shopping-request.dto';
import { UpdateShoppingRequestDto } from './dto/update-shopping-request.dto';

@Injectable()
export class ShoppingRequestService {
  create(createShoppingRequestDto: CreateShoppingRequestDto) {
    return 'This action adds a new shoppingRequest';
  }

  findAll() {
    return `This action returns all shoppingRequest`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shoppingRequest`;
  }

  update(id: number, updateShoppingRequestDto: UpdateShoppingRequestDto) {
    return `This action updates a #${id} shoppingRequest`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingRequest`;
  }
}
