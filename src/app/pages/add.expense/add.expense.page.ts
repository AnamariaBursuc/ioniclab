import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Expenses, TYPE } from 'src/app/models/expenses';
import { ApiService } from 'src/app/services/api.service';


@Component({
  selector: 'app-add.expense',
  templateUrl: './add.expense.page.html',
  styleUrls: ['./add.expense.page.scss'],
})
export class AddExpensePage {
TYPE = TYPE;

expenses = new Expenses();

constructor(private apiSvc: ApiService, private navCtrl: NavController){}

addExpense() {
this.apiSvc.post('api/Expenses', this.expenses).subscribe(() => {
 this.navCtrl.pop();
});
}
}
