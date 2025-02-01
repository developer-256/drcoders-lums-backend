import { PartialType } from '@nestjs/mapped-types';
import { CreateShoppingRequestDto } from './create-shopping-request.dto';

export class UpdateShoppingRequestDto extends PartialType(
  CreateShoppingRequestDto,
) {}
