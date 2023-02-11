import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { Routes, RouterModule } from '@angular/router';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CustomersComponent } from './customers/customers.component';
import { CustomerComponent } from './customer/customer.component';
import { AccountComponent } from './account/account.component';
import { CardsComponent } from './cards/cards.component';
import { HttpClientModule } from '@angular/common/http';
const routes: Routes = [
  { path: 'customers', component: CustomersComponent },
  { path: 'customer', component: CustomerComponent },
  { path: '', redirectTo: '/customer', pathMatch: 'full' },
  { path: 'accounts', component: AccountComponent },
  { path: 'cards', component: CardsComponent },
];
@NgModule({
  declarations: [
    AppComponent,
    CustomersComponent,
    CustomerComponent,
    AccountComponent,
    CardsComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(routes),
     HttpClientModule,
    AppRoutingModule,
    FormsModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
