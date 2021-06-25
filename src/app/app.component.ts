import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'my-angular-app';
  count: number = 0;
  threshold: number = 10;
  showCounterButton: boolean = true;

  incrementCount(): void {
    this.count += 1;
  }

  toggleCounterButton(): void {
    this.showCounterButton = !this.showCounterButton;
  }
}
