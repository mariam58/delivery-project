import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { AuthService } from '../shared/auth.service';
import { ProfileService } from '../shared/profile.service';
import { IProfileForm } from './shared/profile.dto';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent implements OnInit {

  public profile: IProfileForm = {
    email: '',
    firstName: '',
    lastName: '',
    uid: '',
    id: '',
    address: '',
    phone: 0,
  };
  constructor(private authService: AuthService, private profileService: ProfileService) { }

  ngOnInit(): void {
    this.authService.getCurrentUser().then((user) => {
      // console.log(user?.email)
      // console.log(user?.uid)
      if (user) {
        // this.profile.email=user.email;
        // this.profile.uid=user.uid;
        this.profileService.getProfileData(user.uid).subscribe((data) => {
          // console.log(data)
          if (data[0]) {
            this.profile = { ...data[0] };
          }
        });
      }
    });
  }

  onSubmit(form: NgForm) {
    if (form.valid) {
      // console.log(this.profile)
      this.profileService.updateProfile(this.profile);
      
    }
  }
}
