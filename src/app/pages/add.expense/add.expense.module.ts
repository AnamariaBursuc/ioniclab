import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Add.ExpensePageRoutingModule } from './add.expense-routing.module';

import { Add.ExpensePage } from './add.expense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Add.ExpensePageRoutingModule
  ],
  declarations: [Add.ExpensePage]
})
export class Add.ExpensePageModule {}
