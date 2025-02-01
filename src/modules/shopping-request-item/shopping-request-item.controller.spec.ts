import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingRequestItemController } from './shopping-request-item.controller';
import { ShoppingRequestItemService } from './shopping-request-item.service';

describe('ShoppingRequestItemController', () => {
  let controller: ShoppingRequestItemController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ShoppingRequestItemController],
      providers: [ShoppingRequestItemService],
    }).compile();

    controller = module.get<ShoppingRequestItemController>(
      ShoppingRequestItemController,
    );
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
