import { Component, OnInit } from '@angular/core';
import { AuthService } from './shared/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  // title = 'pizza-delivery-project';
  constructor(public authService: AuthService) {}

  ngOnInit(): void {
    // console.log(this.authService.userToten);
    this.authService.updateAuthState();
  }
}
