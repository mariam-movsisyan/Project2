import { Component, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  public count: number =0;
  public cartCount: number = 0
  addItem(newItemCount: number){
    this.count = newItemCount;
    console.log(newItemCount)
  }

  addCount(item_count: number){
    this.cartCount = item_count
  }
}
