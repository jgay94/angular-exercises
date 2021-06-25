import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-counter-button',
  templateUrl: './counter-button.component.html',
  styleUrls: ['./counter-button.component.css']
})
export class CounterButtonComponent implements OnInit {
  count: number = 0
  
  constructor() { }

  ngOnInit(): void {
  }

  incrementCount(): void {
    this.count += 1
  }

}
