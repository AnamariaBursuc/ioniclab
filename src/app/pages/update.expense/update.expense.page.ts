import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Expenses, TYPE } from 'src/app/models/expenses';
import { ApiService } from 'src/app/services/api.service';
import { ActivatedRoute, NavigationExtras} from "@angular/router";

@Component({
  selector: 'app-update.expense',
  templateUrl: './update.expense.page.html',
  styleUrls: ['./update.expense.page.scss'],
})
export class UpdateExpensePage {
    
  TYPE = TYPE;
    
    expenses = new Expenses;
    private routeSub: Subscription;
    private id: number;
    constructor(private apiSvc: ApiService, private route: ActivatedRoute, private navCtrl: NavController, private router: Router) {}

    ionViewWillEnter(){
      this.routeSub = this.route.params.subscribe(params => {
        this.id = params.id;
      });
    
      this.apiSvc.get(`api/expenses/${this.id}`).subscribe((response: Expenses) => {
        console.log(response);
        this.expenses = response;
      });

    }
    updateExpenses(expenses: Expenses) {
      console.log(expenses);
      this.apiSvc.put(`api/expenses/${this.id}`, expenses).subscribe(() => {
        this.router.navigateByUrl('expenses');
      });
    }
  }