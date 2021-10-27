import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
// import { AuthService } from './auth.service';
import { AngularFireAuthModule } from '@angular/fire/compat/auth';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    AngularFireAuthModule,
  ],
  // exports: [AuthService],
})
export class SharedModule { }
