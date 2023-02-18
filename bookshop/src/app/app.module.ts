import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppComponent } from "./app.component";
import { BookComponent } from './book/book.component';
import { BookdetailsComponent } from './bookdetails/bookdetails.component';

@NgModule({
    imports:[BrowserModule,FormsModule],
    declarations:[AppComponent, BookComponent, BookdetailsComponent],
    bootstrap:[AppComponent]
})
export class AppModule {}