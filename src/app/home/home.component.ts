import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';
import { NgForm } from '@angular/forms';
import { Observable } from 'rxjs';
import { HomeService } from './home.service';
import { IPoduct } from './shared/product.db';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  public pizzaList: IPoduct[]=[];  
  cachedPizzaList: IPoduct[]=[];
  private _searchTerm: string = ''; 
  get searchTerm(): string {
    return this._searchTerm;
  }
  set searchTerm(value: string) {
    console.log(value);
    this._searchTerm = value;
    this.search();
  }
  

  constructor(private firestore: AngularFirestore, private homeService: HomeService) { }

  ngOnInit(): void {
    this.getProduct()
    this.getProductTwo()
    // this.getAllProduct();
    this.cartListPainter()
  }
  public cartList: IPoduct[]=[];
  // public test:IPoduct[]=[];
  public totalAmount: number = 0;
  public chosenItem: IPoduct={
    name:'',
    price:0,
    id:'',
    ingredients:[],
    quantity:1,
  };



  dec(item: IPoduct){
    if(item.quantity!=1){
      item.quantity -=1;
      this.totalAmount-=item.price;
      // this.cartList.find(test=>test.id===item.id, item.quantity-=1)
      // localStorage.setItem('item', JSON.stringify(this.cartList));
     
     

    }
     this.receiveData(item)
  }

  
  inc(item:IPoduct){
    item.quantity +=1;
    this.totalAmount+=item.price;
    // for (let i = 0; i < this.cartList.length; i++) {
    //   if(item.id===this.cartList[i].id){
    //     this.cartList[i].quantity=item.quantity
    //   }
      
    // }
    // this.cartList.find(test=>test.id===item.id, item.quantity+=1)
      // localStorage.setItem('item', JSON.stringify(this.cartList));
      this.receiveData(item)
  }

  addToCart(chosenItem:IPoduct){
    // localStorage.setItem('item', JSON.stringify(chosenItem))
    this.receiveData(chosenItem)
  }

  singlePainter(event: any){
    this.chosenItem=event;
  }


  receiveData(event: any){
    // console.log(event)
    this.chosenItem=event;
    // this.addToCartList();
    if(this.cartList.find(test=>test.id===this.chosenItem.id)){
      for (let i = 0; i < this.cartList.length; i++) {
        if(this.chosenItem.id===this.cartList[i].id){
          this.cartList[i].quantity=this.chosenItem.quantity;
          
        }
        
      }
    }else{
      this.cartList.push(this.chosenItem);
      this.totalAmount += this.chosenItem.quantity*this.chosenItem.price;
    }
    
    // this.totalAmount+=this.chosenItem.price;
    localStorage.setItem('item', JSON.stringify(this.cartList));
    // this.cartListPainter()
    
  }

  cartListPainter(){
    if(localStorage.getItem('item')){
      const readData = JSON.parse(localStorage.getItem('item')!);
      
      this.cartList=[...readData]
      // console.log(this.cartList)
      for (let i = 0; i < this.cartList.length; i++) {
        this.totalAmount += this.cartList[i].quantity*this.cartList[i].price;
        
      }
    }
  }

  removeItem(event: IPoduct){
    console.log(event.id)
    this.cartList.splice(this.cartList.findIndex(item=>item.id===event.id),1);
    this.totalAmount-=event.price*event.quantity
    localStorage.setItem('item',JSON.stringify(this.cartList));
  }



  getProduct(){
    this.homeService.getProduct().subscribe((res)=>{
      this.pizzaList = res.map((post)=>{
        return {
          ...post.payload.doc.data() as IPoduct,
          id: post.payload.doc.id
        };
      })
      
      this.cachedPizzaList = [...this.pizzaList];
   
    })

 
  
  }



  getProductTwo(){
    this.homeService.getProductTwo().subscribe((res)=>{
      this.pizzaList = res.map((post)=>{
        return {
          ...post.payload.doc.data() as IPoduct,
          id: post.payload.doc.id
        };
      })
   
      this.cachedPizzaList = this.cachedPizzaList.concat([...this.pizzaList]);
    })

  }

  getAllProduct(){
    this.pizzaList = this.cachedPizzaList; 

  }
  
  onSubmit(form: NgForm){

  }

  search(){
    if(this.searchTerm.length>2){
      this.pizzaList = this.cachedPizzaList.filter((p)=>p.name.toLowerCase().includes(this.searchTerm.toLowerCase()))
    }
    else{
      this.getAllProduct()
    }
  }


 

  filterPizza(filter: any){
    if(filter== 'all'){
      this.getAllProduct()
    }
    else if(filter== 'classic'){
      this.getProduct()
    }
    else{
      this.getProductTwo()
    }
  }
}
