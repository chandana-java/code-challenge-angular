import{Injectable}from'@angular/core';
import {HttpClient }from '@angular/common/http';

export class Account{
constructor(
    public accountNumber:string,
    public name:string,
  ) {}
}

export class AccountTransaction{
constructor(
    public accountNumber:string,
    public accountName:string,
    public currency:string,
    public balanceDate:string,
    public balance:string,
    public type:string,

  ) {}
}

@Injectable({
  providedIn: 'root'
})
export class HttpClientService {

  constructor(private httpClient:HttpClient) {}

  getAccounts(){
    return this.httpClient.get<Account[]>('http://localhost:8080/accounts');
  }

  getAccountTransactions(id:string){
    return this.httpClient.get<AccountTransaction[]>('http://localhost:8080/accountTransactions/'+id)
  }
}
