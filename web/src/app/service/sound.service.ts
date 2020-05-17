import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SoundService {

  public background: any = false;
  public loaded: any = false;
  public engine: any = false;

  public sounds: any = {
    action: ['click.mp3', 'move.mp3', 'open.mp3'],
    background: ['0.mp3', '1.mp3', '2.mp3'],
    dragon: ['0.mp3', '2.mp3', '3.mp3', '4.mp3', '5.mp3', '6.mp3', '7.mp3'],
    fire: ['0.mp3', '1.mp3']
  };

  public preLoaded: any = {
    action: [],
    background: [],
    dragon: [],
    fire: []
  };

  public DragonBreath(dragon: any = false) {
    this.playBackground();
  }

  preLoad(callback: any = false, Pizzicato: any = 'Pizzicato') {
    this.engine = Pizzicato in window ? window[Pizzicato] : false;

    if (!this.engine) {
      return setTimeout(() => this.preLoad(callback), 3000);
    }

    this.background = new this.engine.Sound({
      source: 'file',
      options: {
        path: '/assets/sound/background/'
          .concat(this.sounds.background[Math.floor(Math.random() * this.sounds.background.length)])
      }
    }, () => {
      this.loaded = true;
      this.background.volume = 0.05;
      if (callback) {
        callback();
      }
    });

    this.loadLibrary();
  }

  private loadLibrary(): void {
    for (const key in this.sounds) {
      if (this.sounds.hasOwnProperty(key)) {
        const elements = this.sounds[key];

        elements.forEach(element => {
          this.preLoaded[key]
            .push(new this.engine.Sound({
              source: 'file',
              options: {
                path: `/assets/sound/${key}/`.concat(element)
              }
            }));
        });
      }
    }
  }

  playBackground() {
    if (!this.background) {
      return this.preLoad();
    }
    if (this.loaded) {
      this.background.loop = 1;
      this.background.play();
    }
  }

  play(type: string, record: number, callback: any = false): boolean | any {
    if (!this.engine) {
      return setTimeout(() => this.preLoad(callback), 3000);
    }
    if ((!this.preLoaded[type]
      || !this.preLoaded[type][record]
      || !this.preLoaded[type][record].play)) {
      return false;
    }
    try {
      return this.preLoaded[type][record].play();
    } catch (e) {
      console.error('Error playing', this.preLoaded[type][record]);
    }
  }
}
