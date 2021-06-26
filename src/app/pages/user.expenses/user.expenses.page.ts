import { Component, OnInit } from '@angular/core';
import { Expenses } from 'src/app/models/expenses';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-user.expenses',
  templateUrl: './user.expenses.page.html',
  styleUrls: ['./user.expenses.page.scss'],
})
export class UserExpensesPage  {

 userExpensesList;
  router: any;
  reservations: any;


 constructor(private apiSvc: ApiService) {}

 ionViewWillEnter(){
  this.loadExpensesForUser();
}

goToAddExpenseToUser() {
  this.router.navigateByUrl('userExpensesList/add');
}

deleteExpenseForUser(expenses:Expenses){
  this.apiSvc.delete(`api/expenses/${expenses.id}`).subscribe(() => {
    this.loadExpensesForUser();
  })
  }


private loadExpensesForUser(){
  this.apiSvc.get('api/userExpensesLists').subscribe((response: UserExpensesPage) => {
    this.reservations=response; 
    console.log(response);
  });
}

}
 