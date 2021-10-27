import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { map } from 'rxjs/operators';
import { IProfileForm } from '../profile/shared/profile.dto';

@Injectable({
  providedIn: 'root'
})
export class ProfileService {

  constructor(private fireStoreService: AngularFirestore ) { }

  getProfileData(uid: string) {
    return this.fireStoreService
      .collection<IProfileForm>('users', (ref) =>
        ref.where('uid', '==', uid).limit(1)
      )
      .snapshotChanges()
      .pipe(
        map((res) =>
          res.map((snap) => {
            const data = snap.payload.doc.data() as IProfileForm;
            const id = snap.payload.doc.id;
            return { ...data, id };
          })
        )
      );
  }

  updateProfile(data: IProfileForm) {
    this.fireStoreService.doc(`users/${data.id}`).ref.update(data);
  }

  addProfile(data: IProfileForm) {
    this.fireStoreService.collection('users').add(data);
  }
}
