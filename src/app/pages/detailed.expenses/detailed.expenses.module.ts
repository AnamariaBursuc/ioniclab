import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { Detailed.ExpensesPageRoutingModule } from './detailed.expenses-routing.module';

import { Detailed.ExpensesPage } from './detailed.expenses.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    Detailed.ExpensesPageRoutingModule
  ],
  declarations: [Detailed.ExpensesPage]
})
export class Detailed.ExpensesPageModule {}
