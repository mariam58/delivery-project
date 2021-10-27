import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AngularFireAuth } from '@angular/fire/compat/auth';
import { ILoginData, IRegisterData } from './dto/auth-service.interface';
import { HOME_PATH } from '../constants/routes';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  userToten: string | undefined = undefined;
  constructor(private router: Router, private afAuth: AngularFireAuth) { }

  // login(credentials: ILoginData){
  //   this.afAuth
  //   .signInWithEmailAndPassword(credentials.email, credentials.password)
  //   .then((response)=>{
  //     console.log('current user', response.user?.getIdToken());
  //     this.router.navigate(['/']);
  //   })
  //   .catch((err)=>{
  //     console.warn('current user', err);
  //   });
  // }

  updateAuthState(): void{
    this.afAuth.authState.subscribe( async (data)=>{
      const result = await data?.getIdTokenResult();
      // console.log(result)
      this.userToten = result?.token;
    })
    // console.log(this.afAuth.authState)
    // return this.afAuth.authState;
  }



  getCurrentUser(){
    return this.afAuth.currentUser;
    
  }




  async login(credentials: ILoginData){
    try {
      const response = await this.afAuth.signInWithEmailAndPassword(credentials.email, credentials.password);
      const tokenResult = await response.user?.getIdTokenResult();
      // console.log('token', tokenResult?.token);
      this.router.navigate([HOME_PATH]);
      this.userToten = tokenResult?.token;
    }
    catch(error){
      console.warn('current user', error);
    };
  }

  register(credentials: IRegisterData){
    this.afAuth
    .createUserWithEmailAndPassword(credentials.email, credentials.password)
    .then(()=>{
      this.logOut();
      // console.log('register', currentUser);
    })
    .catch((err)=>{
      console.warn('register', err);
    });
  }

  logOut(){
    this.afAuth.signOut();
    this.router.navigate([HOME_PATH]);
  }
}
