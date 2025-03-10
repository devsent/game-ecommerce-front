import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent {
  public gameTitle = '';

  @Input()
  set title(title: string) {
    this.gameTitle = title;
  }
}
