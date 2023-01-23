import { Injectable } from '@nestjs/common';

@Injectable()
export class TransactionsService {
  save(data: any) {
    console.log(data);
    return data;
  }
}
