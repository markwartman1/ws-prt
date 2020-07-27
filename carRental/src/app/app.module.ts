import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
import { ReactiveFormsModule, FormsModule } from "@angular/forms";
import { InMemoryDataService } from './Services/in-memory-data.service';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LobbyComponent } from './components/lobby/lobby.component';
import { RegistrationComponent } from './components/lobby/registration/registration.component';
import { CarLotComponent } from './components/car-lot/car-lot.component';
import { RentalComponent } from './components/lobby/rental/rental.component';
import { Registration2Component } from './components/lobby/registration2/registration2.component';

@NgModule({
  declarations: [
    AppComponent,
    LobbyComponent,
    RegistrationComponent,
    CarLotComponent,
    RentalComponent,
    Registration2Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    HttpClientInMemoryWebApiModule.forRoot(
      InMemoryDataService, { dataEncapsulation: false }
    ),
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
