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
      console.log('go nav!', event);

      // if ((event instanceof ChildActivationStart
      //   || event instanceof ChildActivationEnd)) {
      //   return event;
      // }

      // if (event instanceof NavigationStart) {
      //   document.body.classList.remove('show', 'ready');
      // }

      // if (event instanceof NavigationEnd) {
      //   this.openCurtains();
      // }

      // if (event instanceof NavigationError) {
      //   this.openCurtains();
      //   // Hide loading indicator

      //   // Present error to user
      //   console.log(event.error);
      // }
      return event;
    });

  }
}
