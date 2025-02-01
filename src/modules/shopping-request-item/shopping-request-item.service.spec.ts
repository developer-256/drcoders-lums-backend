import { Test, TestingModule } from '@nestjs/testing';
import { ShoppingRequestItemService } from './shopping-request-item.service';

describe('ShoppingRequestItemService', () => {
  let service: ShoppingRequestItemService;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      providers: [ShoppingRequestItemService],
    }).compile();

    service = module.get<ShoppingRequestItemService>(ShoppingRequestItemService);
  });

  it('should be defined', () => {
    expect(service).toBeDefined();
  });
});
