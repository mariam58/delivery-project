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

  constructor(private cartService: CartServiceService) { }

  ngOnInit(): void {

  }

  quickView(){ 
  }

  addToCart(){
   this.onAddToCartClick.emit(this.pizza)
  }
  sendDataToSingle(){
   this.viewDetail.emit(this.pizza)

  }
}
