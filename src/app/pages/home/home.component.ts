import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  @Output() title = new EventEmitter<string>();

  sendTitle(value: string) {
    this.title.emit();
  }
}
