import { Component, AfterViewInit } from '@angular/core';
import { Router, NavigationStart, NavigationEnd, NavigationError, ChildActivationStart, ChildActivationEnd } from '@angular/router';
import { SoundService } from './service/sound.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent implements AfterViewInit {
  title = 'Librum ex Dracones';

  ngAfterViewInit() {
    try {
      screen.orientation.lock('portrait');
    } catch (e) {
      console.log('Fail to bind orientation', e);
    }

    this.fx.preLoad(() => {
      this.openCurtains();
      this.fx.playBackground();
    });
  }

  openCurtains(stage: any = '') {
    setTimeout(() => {
      document.body.classList.add(`show${stage}`);
      setTimeout(() => document.body.classList.add(`ready${stage}`), 1000);
    }, 666);
  }

  constructor(private router: Router, private fx: SoundService) {
    router.events.subscribe((event) => {
      // ..
      return event;
    });
  }
}
