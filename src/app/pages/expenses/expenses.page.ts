import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Expenses } from 'src/app/models/expenses';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-expenses',
  templateUrl: './expenses.page.html',
  styleUrls: ['./expenses.page.scss'],
})
export class ExpensesPage {

expenses: Array<Expenses>;
constructor(private apiSvc: ApiService, private router: Router){}

ionViewWillEnter(){
  this.loadExpenses();

}
goToAddExpense(){
  this.router.navigateByUrl('expenses/add');}
  
goToUpdateExpense(expenses: Expenses){
    this.router.navigateByUrl(`expenses/update/${expenses.id}`);
  }

deleteExpense(expenses: Expenses){
  this.apiSvc.delete(`api/Expenses/${expenses.id}`).subscribe(() => {
    this.loadExpenses();
  });
}
goToExpensesDetails(expenses: Expenses) {
  this.router.navigateByUrl(`expenses/${expenses.id}`);
}

detailExpenses(expenses: Expenses) {}


private loadExpenses(){
  this.apiSvc.get('api/Expenses').subscribe((response:Array<Expenses>) =>{
    this.expenses = response;
  });
}
}
