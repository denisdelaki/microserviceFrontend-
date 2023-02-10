import { Component, OnInit } from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {ActivatedRoute} from '@angular/router';
  @Component({
  selector: 'app-customer',
  templateUrl: './customer.component.html',
  styleUrls: ['./customer.component.css']
})
export class CustomerComponent implements OnInit{
customer: any;
accounts: any;

constructor (private http:  HttpClient, private route: ActivatedRoute){}
ngOnInit(){
  this.route.params.subscribe(params =>{
    this.http.get(`http://localhost:3000/customers/${params['id']}.json`)
    .subscribe(data=>{
      this.customer =data;
      this.http.get(`http://localhost:3000/customers/${params['id']}/accounts.json`).subscribe(data=>{
        this.accounts =data;
      })

    })
  })
}
topUp(account:  { id: number, balance: number }, amount: number) {
  let params = new HttpParams()
    .set('amount', amount.toString());
  this.http.post(`http://localhost:3000/customers/${this.customer.id}/accounts/${account.id}/top_up`, params)
    .subscribe(data => {
      this.accounts.forEach((a: { id: number, balance: number }) => {
        if (a.id === account.id) {
          a.balance += amount;
        }
      });
    });
}

withdraw(account: { id: number, balance: number }, amount: number) {
 let params = new HttpParams()
    .set('amount', amount.toString());
  this.http.post(`http://localhost:3000/customers/${this.customer.id}/accounts/${account.id}/withdraw`, params)
    .subscribe(data => {
      this.accounts.forEach((a: { id: number, balance: number }) => {
        if (a.id === account.id) {
          a.balance -= amount;
        }
      });
    });
}
}
