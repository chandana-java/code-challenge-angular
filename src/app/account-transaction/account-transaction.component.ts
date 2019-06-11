import{Component, OnInit}from '@angular/core';
import {HttpClientService, Account}from '../service/http-client.service';
import {ActivatedRoute}from '@angular/router';

@Component({
selector: 'app-account-transaction',
templateUrl: './account-transaction.component.html',
styleUrls: ['./account-transaction.component.scss']
})
export class AccountTransactionComponent implements OnInit {

    accountTransactions:string[];
    constructor(private httpClientService: HttpClientService, private route: ActivatedRoute) { }

    ngOnInit() {
      this.route.paramMap.subscribe(params => {
        this.httpClientService.getAccountTransactions(params.get('id')).subscribe(
        response =>this.handleSuccessfulResponse(response),
      )});
   }

    handleSuccessfulResponse(response){
      this.accountTransactions = response;
    }
}


