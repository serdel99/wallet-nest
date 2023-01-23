import { Controller, Post } from '@nestjs/common';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionService: TransactionsService) {}

  @Post()
  create(): string {
    return this.transactionService.save('test');
  }
}
