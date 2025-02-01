import { Injectable } from '@nestjs/common';
import { CreateShoppingRequestDto } from './dto/create-shopping-request.dto';
import { UpdateShoppingRequestDto } from './dto/update-shopping-request.dto';
import { CreateShoppingRequestData } from './dto/create-shopping-request-data';
import { InjectRepository } from '@nestjs/typeorm';
import { ShoppingRequest } from './entities/shopping-request.entity';
import { Repository } from 'typeorm';
import { ShoppingRequestItemService } from '../shopping-request-item/shopping-request-item.service';
import { CreateShoppingRequestItemDto } from '../shopping-request-item/dto/create-shopping-request-item.dto';

@Injectable()
export class ShoppingRequestService {
  constructor(
    @InjectRepository(ShoppingRequest)
    private readonly shoppingRequestRepo: Repository<ShoppingRequest>,
    private readonly shopingItemService: ShoppingRequestItemService,
  ) {}

  async create(
    shoppingRequestData: CreateShoppingRequestData,
    buyerId: number,
  ) {
    const creaetrequestDto: CreateShoppingRequestDto = {
      buyerId: buyerId,
      status: shoppingRequestData.status,
      totalBudget: shoppingRequestData.totalBudget,
      deliveryAddress: shoppingRequestData.deliveryAddress,
    };

    const request = await this.shoppingRequestRepo.create(creaetrequestDto);

    const savedRequest = await this.shoppingRequestRepo.save(request);

    for (const item of shoppingRequestData.items) {
      const createItemDto: CreateShoppingRequestItemDto = {
        request_id: savedRequest.requestID,
        ...item,
      };

      await this.shopingItemService.create(createItemDto);
    }

    return {
      result: 'success',
      message: 'Request Created Successfully',
    };
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
