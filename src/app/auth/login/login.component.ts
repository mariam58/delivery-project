import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { ILoginData } from 'src/app/shared/dto/auth-service.interface';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(form.valid){
      const loginData: ILoginData=form.value;
      this.authService.login(loginData);
    }
    // console.log(form.value);
  }
}
