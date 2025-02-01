import { PartialType } from '@nestjs/mapped-types';
import { CreateShoppingRequestItemDto } from './create-shopping-request-item.dto';

export class UpdateShoppingRequestItemDto extends PartialType(CreateShoppingRequestItemDto) {}
