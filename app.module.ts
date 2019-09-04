import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { BookAFlightComponent } from './book-aflight/book-aflight.component';
import { SearchFlightsComponent } from './search-flights/search-flights.component';
import { LoginOrSignUpComponent } from './login-or-sign-up/login-or-sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    BookAFlightComponent,
    LoginOrSignUpComponent
   
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
