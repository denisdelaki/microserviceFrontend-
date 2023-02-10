import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
@Component({
  selector: 'app-cards',
  templateUrl: './cards.component.html',
  styleUrls: ['./cards.component.css']
})
export class CardsComponent implements OnInit {
  cards: Array<{ id: number, number: string, type: string }> = [];

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get<Array<{ id: number, number: string, type: string }>>('http://localhost:3000/cards')
      .subscribe(data => {
        this.cards = data;
      });
  }
}
