import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.css']
})
export class ButtonComponent {
  public btnText = '';

  @Input()
  set text(text: string) {
    this.btnText = text;
  }

  @Input() type: string = 'button';
  @Input() isDisabled = false;

  @Output() btnClick = new EventEmitter();

  onClick() {
    this.btnClick.emit();
  }
}
