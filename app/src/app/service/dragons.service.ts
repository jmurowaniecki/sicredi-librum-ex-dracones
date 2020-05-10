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
      period: '2780 a.J. - 128 d.J.',
      image: './assets/image/dragon/dragon0.png',
      avatar: './assets/image/dragon/dragon0-face.png',
      landscape: './assets/image/dragon/landscape0.jpg'
    },
    {
      id: 1,
      name: 'Draconísius',
      description: 'Eu prefiro a comida suada e cansada.. É tipo um tempero natural.',
      type: 'Dragão de Pedra',
      period: '1721 a.J. - 345 d.J.',
      image: './assets/image/dragon/dragon1.png',
      avatar: './assets/image/dragon/dragon1-face.png',
      landscape: './assets/image/dragon/landscape1.jpg'
    },
    {
      id: 2,
      name: 'Phaul`argh',
      description: 'Eu amo meus inimigos. Pena que já comi todos.',
      type: 'Dragão Elétrico',
      period: '792 a.J. - 932 d.J.',
      image: './assets/image/dragon/dragon2.png',
      avatar: './assets/image/dragon/dragon2-face.png',
      landscape: './assets/image/dragon/landscape3.jpg'
    },
    {
      id: 3,
      name: 'Mahr`Yan',
      description: 'Adoro visitas.. Principalmente na hora da janta.',
      type: 'Dragão de Sangue',
      period: '82 a.J. - 987 d.J.',
      image: './assets/image/dragon/dragon3.png',
      avatar: './assets/image/dragon/dragon3-face.png',
      landscape: './assets/image/dragon/landscape5.png'
    },
    {
      id: 4,
      name: 'Soulstcy`Anh',
      description: 'Não se incomode, pode continuar vestido. Minha saliva derrete tudo.',
      type: 'Dragão de Ácido',
      period: '2780 a.J. - 128 d.J.',
      image: './assets/image/dragon/dragon4.png',
      avatar: './assets/image/dragon/dragon4-face.png',
      landscape: './assets/image/dragon/landscape2.jpg'
    }]) {
      dragon.selected = dragon.selected || false;
      this.list.push(dragon);
    }
  }
}
