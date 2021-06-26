import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { User.ExpensesPage } from './user.expenses.page';

const routes: Routes = [
  {
    path: '',
    component: User.ExpensesPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class User.ExpensesPageRoutingModule {}
