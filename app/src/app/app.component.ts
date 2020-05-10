import { Component, AfterViewInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {
  title = 'Librum ex Dracones';

  ngAfterViewInit() {
    setTimeout(() => {
      document.body.classList.toggle('show');
      setTimeout(() => document.body.classList.toggle('ready'), 1000);
    }, 3000);
  }
}
