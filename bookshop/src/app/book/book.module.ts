import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BookComponent } from './book.component';
import { BookService } from './book.service';
import { BookdetailsComponent } from '../bookdetails/bookdetails.component';



@NgModule({
  declarations: [BookComponent,BookdetailsComponent],
  providers:[BookService],
  imports: [
    CommonModule
  ],
  exports:[BookComponent]
})
export class BookModule { }
