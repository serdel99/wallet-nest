import { Transaction } from './transaction.interface';

export interface TransactionRepository {
  save(Transaction): Transaction;
}
