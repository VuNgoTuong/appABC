import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { TransactionallComponent } from './transaction-all/transaction-all.component';
import { TransactionRoutingModule } from './transaction-routing.component';
import { TransactionComponent } from './transaction.component';

@NgModule({
  imports: [
    TransactionRoutingModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  declarations: [
   TransactionComponent
  ],
  exports: [FormsModule,
    ReactiveFormsModule,]
})
export class TransactionModule { }
