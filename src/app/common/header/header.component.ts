import { Component, OnInit } from '@angular/core';
import { Location } from '@angular/common';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/shared/auth.service';
import { HOME_PATH } from '../../constants/routes';
import { ProfileService } from 'src/app/shared/profile.service';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ProfileComponent } from 'src/app/profile/profile.component';
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  route: boolean | null = null;
  
 
  
  constructor(public authService: AuthService, location: Location, router: Router ) { 
    router.events.subscribe(val => {

        if (location.path() != HOME_PATH) {
          this.route = true;
        }
        else{
          this.route = false;
        } 
      
    });
  }

  ngOnInit(): void {
    this.authService.updateAuthState();
    // this.currentRouter = this.router.url;
    // console.log(this.router.url);
    // console.log(this.currentRouter);

  }

}
