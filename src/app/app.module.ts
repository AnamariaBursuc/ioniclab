import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';

import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { LoginPage } from './pages/login/login.page';
import { ExpensesPage } from './pages/expenses/expenses.page';
import { NavbarComponent } from './components/navbar/navbar.component';
import { SideMenuComponent } from './components/side-menu/side-menu.component';
import { ApiService } from './services/api.service';
import { HttpClientModule } from '@angular/common/http';
import { AddExpensePage } from './pages/add.expense/add.expense.page';
import { FormsModule } from '@angular/forms';
import { UpdateExpensePage } from './pages/update.expense/update.expense.page';

@NgModule({
  declarations: [
 //components
    AppComponent, NavbarComponent, SideMenuComponent,
//pages
  LoginPage, ExpensesPage, AddExpensePage, UpdateExpensePage,
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ApiService],
  bootstrap: [AppComponent],
})
export class AppModule {}
