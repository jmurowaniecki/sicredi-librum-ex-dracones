import { Injectable } from '@angular/core';
// import { Pizzicato  } from 'pizzicato';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  public background: any = false;
  public loaded: boolean = false;

  constructor() {}

  preLoad(callback: any = false) {

    console.log(Pizzicato);

    if (!Pizzicato) {
      return setTimeout(this.preLoad, 3000);
    }

    this.background = new Pizzicato.Sound({
      source: 'file',
      options: { path: '/assets/sound/background-0.wav' }
    }, () => {
      console.log('sound file loaded!');
      this.loaded = true;
      this.background.volume = 0.3;
      callback &&
      callback();
    });
  }

  playBackground() {
    if (!this.background) {
      return this.preLoad();
    }
    this.loaded &&
    this.background &&
    this.background.play(); //0.5);
    this.background.loop = 1;
  }
}
