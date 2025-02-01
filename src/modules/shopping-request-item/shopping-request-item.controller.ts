import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ShoppingRequestItemService } from './shopping-request-item.service';
import { CreateShoppingRequestItemDto } from './dto/create-shopping-request-item.dto';
import { UpdateShoppingRequestItemDto } from './dto/update-shopping-request-item.dto';

@Controller('shopping-request-item')
export class ShoppingRequestItemController {
  constructor(private readonly shoppingRequestItemService: ShoppingRequestItemService) {}

  @Post()
  create(@Body() createShoppingRequestItemDto: CreateShoppingRequestItemDto) {
    return this.shoppingRequestItemService.create(createShoppingRequestItemDto);
  }

  @Get()
  findAll() {
    return this.shoppingRequestItemService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingRequestItemService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateShoppingRequestItemDto: UpdateShoppingRequestItemDto) {
    return this.shoppingRequestItemService.update(+id, updateShoppingRequestItemDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingRequestItemService.remove(+id);
  }
}
