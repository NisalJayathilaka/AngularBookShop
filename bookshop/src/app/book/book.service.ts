import { Injectable } from '@angular/core';
import { Book } from '../interface/book';

@Injectable({
  providedIn: 'root'
})
export class BookService {

  constructor() { }

  getBooks():Book[]{
    return [
      {
        name: 'Clean Code',
        author: 'Robert C Martin',
        src: 'https://images-na.ssl-images-amazon.com/images/I/81bGKUa1e0L._AC_UL210_SR195,210_.jpg',
        price:800
      },
      {
        name: 'Worse Than you',
        author: 'pitbull',
        src: 'https://images-na.ssl-images-amazon.com/images/I/81lJ9+mcvzL._AC_UL210_SR195,210_.jpg',
        price:900
      },
      {
        name: 'Clean Code',
        author: 'Robert C Martin',
        src: 'https://images-na.ssl-images-amazon.com/images/I/71AFyzXeB6L._AC_UL210_SR195,210_.jpg',
        price:800
      },
      {
        name: 'Clean Code',
        author: 'Robert C Martin',
        src: 'https://images-na.ssl-images-amazon.com/images/I/71Fh3yg+0WL._AC_UL210_SR195,210_.jpg',
        price:800
      }
    ];
  }
}
