import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../interface/book';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  
  @Input() book:Book = {} as Book;
  @Output() bookEvent = new EventEmitter<Book>();

  constructor() { }

  ngOnInit(): void {
  }
  addToCard() :void{
    this.bookEvent.emit(this.book);
  }
}
