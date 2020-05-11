import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  public background: any = false;
  public loaded: any = false;
  public engine: any = false;

  preLoad(callback: any = false, Pizzicato: any = 'Pizzicato') {
    this.engine = Pizzicato in window ? window[Pizzicato] : false;
    if (!this.engine) {
      return setTimeout(() => this.preLoad(callback), 3000);
    }

    this.background = new this.engine.Sound({
      source: 'file',
      options: { path: '/assets/sound/background/0.wav' }
    }, () => {
      console.log('sound file loaded!');
      this.loaded = true;
      this.background.volume = 0.05;
      if (callback) {
        callback();
      }
    });
  }

  playBackground() {
    if (!this.background) {
      return this.preLoad();
    }
    if (this.loaded) {
      this.background.play();
      this.background.loop = 1;
    }
  }
}
