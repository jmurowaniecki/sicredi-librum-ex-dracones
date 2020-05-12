import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragonsService {

  public list = [];

  constructor() {
    for (const dragon of [{
      selected: true,
      id: 0,
      name: 'Jôrthungd`Al',
      description: 'Quem com fogo fere, como churrasco será servido.',
      type: 'Dragão de Fogo',
      period: {from: 2780, to: 128},
      image: './assets/image/dragon/dragon0.png',
      avatar: './assets/image/dragon/dragon0-face.png',
      landscape: './assets/image/dragon/landscape0.jpg',
      position: 'top center'
    },
    {
      id: 1,
      name: 'Draconísius',
      description: 'Eu prefiro a comida suada e cansada.. É tipo um tempero natural.',
      type: 'Dragão de Pedra',
      period: {from: 1721, to: 345},
      image: './assets/image/dragon/dragon1.png',
      avatar: './assets/image/dragon/dragon1-face.png',
      landscape: './assets/image/dragon/landscape1.jpg',
      position: 'top right'
    },
    {
      id: 2,
      name: 'Phaul`argh',
      description: 'Eu amo meus inimigos. Pena que já comi todos.',
      type: 'Dragão Elétrico',
      period: { from: 792, to: 932 },
      image: './assets/image/dragon/dragon4.png',
      avatar: './assets/image/dragon/dragon4-face.png',
      landscape: './assets/image/dragon/landscape2.jpg',
      position: 'top center'
    },
    {
      id: 3,
      name: 'Mahr`Yan',
      description: 'Adoro visitas.. Principalmente na hora da janta.',
      type: 'Dragão de Sangue',
      period: {from: 82, to: 987},
      image: './assets/image/dragon/dragon3.png',
      avatar: './assets/image/dragon/dragon3-face.png',
      landscape: './assets/image/dragon/landscape5.png',
      position: 'bottom right'
    }
  ]) {
      dragon.selected = dragon.selected || false;
      this.list.push(dragon);
    }
  }
}
