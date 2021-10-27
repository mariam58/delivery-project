import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from 'src/app/shared/auth.service';
import { IRegisterData } from 'src/app/shared/dto/auth-service.interface';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.scss']
})
export class RegisterComponent implements OnInit {

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  onSubmit(form: NgForm){
    if(form.valid){
      const regData: IRegisterData=form.value;
      this.authService.register(regData);
    }
    // console.log(form.value);
  }
}
