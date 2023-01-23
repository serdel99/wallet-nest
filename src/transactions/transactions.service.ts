import { Injectable } from '@nestjs/common';
import { Transaction } from './interfaces/transaction.interface';

@Injectable()
export class TransactionsService {
  save(createTransaction: Transaction) {
    return createTransaction;
  }
}
