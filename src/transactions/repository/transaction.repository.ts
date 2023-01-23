import { Transaction } from '../interfaces/transaction.interface';
import { TransactionRepository } from '../interfaces/transactionRepository.interface';

export class TransactionRepos implements TransactionRepository {
  save(transaction: Transaction): Transaction {
    return transaction;
  }
}
