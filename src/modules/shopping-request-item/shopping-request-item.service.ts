import { Injectable } from '@nestjs/common';
import { CreateShoppingRequestItemDto } from './dto/create-shopping-request-item.dto';
import { UpdateShoppingRequestItemDto } from './dto/update-shopping-request-item.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { ShoppingRequestItem } from './entities/shopping-request-item.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ShoppingRequestItemService {
  constructor(
    @InjectRepository(ShoppingRequestItem)
    private readonly shoppingItemRepo: Repository<ShoppingRequestItem>,
  ) {}
  async create(createShoppingRequestItemDto: CreateShoppingRequestItemDto) {
    const item = await this.shoppingItemRepo.create(
      createShoppingRequestItemDto,
    );
    return await this.shoppingItemRepo.save(item);
  }

  findAll() {
    return `This action returns all shoppingRequestItem`;
  }

  findOne(id: number) {
    return `This action returns a #${id} shoppingRequestItem`;
  }

  update(
    id: number,
    updateShoppingRequestItemDto: UpdateShoppingRequestItemDto,
  ) {
    return `This action updates a #${id} shoppingRequestItem`;
  }

  remove(id: number) {
    return `This action removes a #${id} shoppingRequestItem`;
  }
}
