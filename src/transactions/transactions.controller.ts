import { Body, Controller, Post } from '@nestjs/common';
import { CreateTransactionDto } from './dto/create-transaction.dto';
import { Transaction } from './interfaces/transaction.interface';
import { TransactionsService } from './transactions.service';

@Controller('transactions')
export class TransactionsController {
  constructor(private transactionService: TransactionsService) {}

  @Post()
  create(@Body() body: CreateTransactionDto): Transaction {
    const transaction = body as Transaction;
    return this.transactionService.save(transaction);
  }
}
