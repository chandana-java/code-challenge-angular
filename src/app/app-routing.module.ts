import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AccountComponent } from './account/account.component'
import { AccountTransactionComponent } from './account-transaction/account-transaction.component'

const routes: Routes = [
{ path:'accounts', component: AccountComponent},
{ path:'', component: AccountComponent},
{path: 'accountTransactions/:id' , component: AccountTransactionComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
