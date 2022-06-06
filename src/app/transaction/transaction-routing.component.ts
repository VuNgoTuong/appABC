import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { TransactionallComponent } from './transaction-all/transaction-all.component';
import { TransactionExpressComponent } from './transaction-express/transaction-express.component';
import { TransactionIncomeComponent } from './transaction-income/transaction-income.component';
import { TransactionComponent } from './transaction.component';

const routes: Routes = [
  { path: 'transaction', component: TransactionComponent, children:[
    { path: '', redirectTo: 'all', pathMatch: 'full' },
    { path: 'all', component: TransactionallComponent },
    { path: 'income', component: TransactionIncomeComponent },
    { path: 'express', component: TransactionExpressComponent },
  ]},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TransactionRoutingModule { }
