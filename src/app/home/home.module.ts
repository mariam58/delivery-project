import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { RouterModule, Routes } from '@angular/router';
import { AngularFireAuthGuard } from '@angular/fire/compat/auth-guard';
import { PizzaItemComponent } from './pizza-item/pizza-item.component'
import { AngularFirestoreModule } from '@angular/fire/compat/firestore';
import { FormsModule } from '@angular/forms';
import { SinglePizzaItemComponent } from './single-pizza-item/single-pizza-item.component';
import { CartComponent } from '../common/cart/cart.component';
const routes: Routes = [
  {
    path: '',
    component: HomeComponent,
  },
  {
    path: 'pizzaitem/:name',
    component: SinglePizzaItemComponent,
  },
];

@NgModule({
  declarations: [
    HomeComponent,
    PizzaItemComponent,
    SinglePizzaItemComponent,
    CartComponent,
  ],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    AngularFirestoreModule,
    FormsModule
  ]
})
export class HomeModule { }
