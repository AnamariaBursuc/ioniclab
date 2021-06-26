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
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AddExpensePage } from './pages/add.expense/add.expense.page';
import { FormsModule } from '@angular/forms';
import { UpdateExpensePage } from './pages/update.expense/update.expense.page';
import { DetailedExpensesPage } from './pages/detailed.expenses/detailed.expenses.page';
import { AuthService } from './services/auth.service';
import { TokenInterceptor } from './interceptors/auth.token.interceptor';
import { UserExpensesPage } from './pages/user.expenses/user.expenses.page';

@NgModule({
  declarations: [
 //components
    AppComponent, NavbarComponent, SideMenuComponent,
//pages
  LoginPage, ExpensesPage, AddExpensePage, UpdateExpensePage, DetailedExpensesPage, UserExpensesPage
  ],
  entryComponents: [],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule, FormsModule],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, ApiService, AuthService, 
    { provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptor,
      multi: true,}],
  bootstrap: [AppComponent],
})
export class AppModule {}
