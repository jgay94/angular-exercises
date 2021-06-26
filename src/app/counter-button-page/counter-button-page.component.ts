import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-button-page',
  templateUrl: './counter-button-page.component.html',
  styleUrls: ['./counter-button-page.component.css']
})
export class CounterButtonPageComponent implements OnInit {
  count: number = 0;
  threshold: number = 10;
  showCounterButton: boolean = true;

  constructor() { }

  ngOnInit(): void {
  }

  incrementCount(): void {
    this.count += 1;
  }

  toggleCounterButton(): void {
    this.showCounterButton = !this.showCounterButton;
  }
}
