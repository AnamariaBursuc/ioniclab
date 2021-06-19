import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { Detailed.ExpensesPage } from './detailed.expenses.page';

const routes: Routes = [
  {
    path: '',
    component: Detailed.ExpensesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class Detailed.ExpensesPageRoutingModule {}
