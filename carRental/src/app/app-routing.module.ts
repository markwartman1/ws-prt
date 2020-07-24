import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LobbyComponent } from './components/lobby/lobby.component';
import { CarLotComponent } from './components/car-lot/car-lot.component';
import { RegistrationComponent } from './components/lobby/registration/registration.component';
import { RentalComponent } from './components/lobby/rental/rental.component';


const routes: Routes = [
  { path: 'lobby', component: LobbyComponent },
  { path: 'carLot', component: CarLotComponent },
  { path: 'registration', component: RegistrationComponent },
  { path: 'rental', component: RentalComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
