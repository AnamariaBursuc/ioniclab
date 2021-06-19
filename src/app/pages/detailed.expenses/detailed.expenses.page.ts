import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { NavController } from '@ionic/angular';
import { Subscription } from 'rxjs';
import { Expenses } from 'src/app/models/expenses';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-detailed.expenses',
  templateUrl: './detailed.expenses.page.html',
  styleUrls: ['./detailed.expenses.page.scss'],
})
export class DetailedExpensesPage {

  expenses = new Expenses();
  private routeSub: Subscription;
  private id: number;
  
  constructor(private apiSvc: ApiService, private navCtrl: NavController, private router: Router, private route: ActivatedRoute) {}

  ionViewWillEnter() {

    this.routeSub = this.route.params.subscribe(params => {
      this.id = params.id;
    });

    this.apiSvc.get(`api/expenses/${this.id}`).subscribe((response: Expenses) => {
      console.log(response);
      this.expenses = response;
    });

  }
} 


