import { NgModule } from "@angular/core";
import { FormsModule } from "@angular/forms";
import { BrowserModule } from "@angular/platform-browser";
import { AppRoutingModule } from "./app-routing.module";
import { AppComponent } from "./app.component";
import { AuthModule } from "./auth/auth.module";
import { BookModule } from "./book/book.module";
import { CartComponent } from './cart/cart.component';


@NgModule({
    imports:[BrowserModule,BookModule,AppRoutingModule,AuthModule],
    declarations:[AppComponent, CartComponent],
    bootstrap:[AppComponent]
})
export class AppModule {}