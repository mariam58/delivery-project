import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { IPoduct } from './shared/product.db';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  constructor(private fireStoreService: AngularFirestore) { }

  getSingleData(name: string) {
    return this.fireStoreService
      .collection<IPoduct>('pizza', (ref) =>
        ref.where('name', '==', name).limit(1)
      )
      .snapshotChanges()
      .pipe(
        map((res) =>
          res.map((snap) => {
            
            const data = snap.payload.doc.data() as IPoduct;
            const id = snap.payload.doc.id;
            // console.log(id)
            return { ...data, id };
            
          })
        )
      );
  }


getProduct(){
  return this.fireStoreService.collection('pizza').snapshotChanges();
  
}
getProductTwo(){
  return this.fireStoreService.collection('brandedPizza').snapshotChanges();
}

  // getSearch(name: string) {
  //   return this.fireStoreService
  //     .collection<IPoduct>('pizza', (ref) =>
  //       ref.where('name', '==', name)
  //     )
  //     .snapshotChanges()
  //     .pipe(
  //       map((res) =>
  //         res.map((snap) => {
            
  //           const data = snap.payload.doc.data() as IPoduct;
  //           const id = snap.payload.doc.id;
  //           // console.log(id)
  //           return { ...data, id };
            
  //         })
  //       )
  //     );
  // }



}
