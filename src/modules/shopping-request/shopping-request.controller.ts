import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
  UseGuards,
  Req,
} from '@nestjs/common';
import { ShoppingRequestService } from './shopping-request.service';
import { CreateShoppingRequestDto } from './dto/create-shopping-request.dto';
import { UpdateShoppingRequestDto } from './dto/update-shopping-request.dto';
import { CreateShoppingRequestData } from './dto/create-shopping-request-data';
import { JwtAuthGuard } from '../auth/jwt-auth.guard';

@Controller('shopping-request')
export class ShoppingRequestController {
  constructor(
    private readonly shoppingRequestService: ShoppingRequestService,
  ) {}

  @Post()
  // @UseGuards(JwtAuthGuard)
  create(
    @Req() req,
    @Body() createShoppingRequestdata: CreateShoppingRequestData,
  ) {
    return this.shoppingRequestService.create(createShoppingRequestdata, 3);
  }

  @Get()
  findAll() {
    return this.shoppingRequestService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.shoppingRequestService.findOne(+id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateShoppingRequestDto: UpdateShoppingRequestDto,
  ) {
    return this.shoppingRequestService.update(+id, updateShoppingRequestDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.shoppingRequestService.remove(+id);
  }
}
