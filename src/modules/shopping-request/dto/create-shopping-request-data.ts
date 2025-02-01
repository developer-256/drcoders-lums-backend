import { ShoppingRequestItem } from 'src/modules/shopping-request-item/entities/shopping-request-item.entity';
import { User } from 'src/modules/user/entities/user.entity';

export class CreateShoppingRequestData {
  buyerId: number;
  status: string;

  totalBudget: number;

  deliveryAddress: string;

  items: ShoppingRequestItem[];
}
