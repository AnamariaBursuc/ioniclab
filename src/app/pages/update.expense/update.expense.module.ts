import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Update.ExpensePageRoutingModule } from './update.expense-routing.module';

import { Update.ExpensePage } from './update.expense.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Update.ExpensePageRoutingModule
  ],
  declarations: [Update.ExpensePage]
})
export class Update.ExpensePageModule {}
