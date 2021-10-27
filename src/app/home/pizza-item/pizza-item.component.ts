import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { CartServiceService } from '../../common/cart/cart-service.service';
import { IPoduct } from '../shared/product.db';

@Component({
  selector: 'app-pizza-item',
  templateUrl: './pizza-item.component.html',
  styleUrls: ['./pizza-item.component.scss']
})
export class PizzaItemComponent implements OnInit {
  @Input() pizza:any;

  @Output() onAddToCartClick = new EventEmitter<string>();
  @Output() viewDetail = new EventEmitter<string>();

  // public cartItem:  IPoduct = {
  //   name: '',
  //   price: 0,
  //   id: '',
  //   ingredients: [],
  // };

//  cartItem: string="mari"
  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {
    // console.log(this.pizza)
    // console.log(this.cartItem=this.pizza)
  }

  quickView(){ 
  }

  addToCart(){
   this.onAddToCartClick.emit(this.pizza)
    // this.cartService.addToCart(this.cartItem).then();
  }
  sendDataToSingle(){
   this.viewDetail.emit(this.pizza)

  }
}
