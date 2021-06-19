import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AddExpensePage } from './pages/add.expense/add.expense.page';
import { DetailedExpensesPage } from './pages/detailed.expenses/detailed.expenses.page';
import { ExpensesPage } from './pages/expenses/expenses.page';
import { LoginPage } from './pages/login/login.page';
import { UpdateExpensePage } from './pages/update.expense/update.expense.page';

const routes: Routes = [
  {
    path: 'login',
   component: LoginPage,
  },
  {
    path: '',
    redirectTo: 'login',
    pathMatch: 'full'
  },
 
  {
    path: 'expenses',
    component: ExpensesPage,
  },
  {
    path: 'expenses/add',
    component: AddExpensePage,
  },
  {
    path: 'expenses/update/:id',
   component: UpdateExpensePage,
  },
  {
    path: 'expenses/:id',
   component: DetailedExpensesPage,
  },

];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
