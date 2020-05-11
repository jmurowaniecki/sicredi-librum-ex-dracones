import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  public background: any = false;
  public loaded: boolean = false;
  public engine: any = false;

  preLoad(callback: any = false, Pizzicato: any = false) {
    if (!this.engine) {
      this.engine = Pizzicato || window['Pizzicato'] || false;
      return setTimeout(() => this.preLoad(callback), 3000);
    }

    this.background = new this.engine.Sound({
      source: 'file',
      options: { path: '/assets/sound/background/0.wav' }
    }, () => {
      console.log('sound file loaded!');
      this.loaded = true;
      this.background.volume = 0.05;
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
