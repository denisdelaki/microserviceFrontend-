import { Component, OnInit } from '@angular/core';
import {HttpClient} from '@angular/common/http';
@Component({
  selector: 'app-customers',
  templateUrl: './customers.component.html',
  styleUrls: ['./customers.component.css']
})
export class CustomersComponent implements OnInit {
customers: any;
constructor (private http: HttpClient){}
ngOnInit (){
  this.http.get('http://localhost:3000/customers.json').subscribe(data=>{
    this.customers =data
  })
}
}
