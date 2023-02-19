import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { Book } from '../interface/book';
import { CartService } from '../cart/cart.service';

@Component({
  selector: 'app-bookdetails',
  templateUrl: './bookdetails.component.html',
  styleUrls: ['./bookdetails.component.css']
})
export class BookdetailsComponent implements OnInit {
  
  @Input() book:Book = {} as Book;
  isInCart:boolean = false;

  constructor(private cartService: CartService) { }

  ngOnInit(): void {
  }
  addToCart() :void{
    this.isInCart =true;
    this.cartService.add(this.book);
  }
  removeFromCart(){
    this.cartService.remove();
  }
}
