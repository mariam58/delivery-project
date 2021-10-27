import { Component, Input, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { ActivatedRoute } from '@angular/router';
import { IPoduct } from '../shared/product.db';
import { map } from 'rxjs/operators';
import { HomeService } from '../home.service';

@Component({
  selector: 'app-single-pizza-item',
  templateUrl: './single-pizza-item.component.html',
  styleUrls: ['./single-pizza-item.component.scss']
})
export class SinglePizzaItemComponent implements OnInit {
  singleArticle: any;
  count: number = 1;

  constructor(private route: ActivatedRoute, private firestore: AngularFirestore, private homeService: HomeService) { }

  ngOnInit(): void {
    const name = this.route.snapshot.paramMap.get('name');
    // console.log(name);
    if(name){
      this.homeService.getSingleData(name).subscribe((data) => {
        // console.log(data[0])
        if (data[0]) {
          this.singleArticle = data;
        }
      });
    }
  }


  onAdd(){
    this.count+=1;
 
  }

  onMinus(){
    this.count-=1;
   
  }

  addToCart(){
    
  }
  // getUrl(uid: string) {
  //   return this.firestore
  //     .collection<IPoduct>('pizza', (ref) =>
  //       ref.where('uid', '==', uid).limit(1)
  //     )
  //     .snapshotChanges()
  //     .pipe(
  //       map((res) =>
  //         res.map((snap) => {
  //           const data = snap.payload.doc.data() as IPoduct;
  //           const id = snap.payload.doc.id;
  //           return { ...data, id };
  //         })
  //       )
  //     );
  // }
}
