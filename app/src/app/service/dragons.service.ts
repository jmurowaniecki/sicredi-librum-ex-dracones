import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragonsService {

  public list = [
    {
      selected: true,
      id: 1,
      name: 'Jôrthungd`Al',
      description: 'Quem com fogo fere, como churrasco será servido.',
      type: 'Dragão de Fogo',
      period: '2780 a.J. - 128 d.J.',
      image: './assets/image/dragon/dragon0.png',
      avatar: './assets/image/dragon/dragon0-face.png',
      landscape: './assets/image/dragon/landscape0.jpg'
    },
    {
      id: 2,
      name: 'Jôrthungd`Al',
      description: 'Quem com fogo fere, churrasco será servido.',
      type: 'Dragão de Fogo',
      period: '2780 a.J. - 128 d.J.',
      image: './assets/image/dragon/dragon1.png',
      avatar: './assets/image/dragon/dragon1-face.png',
      landscape: './assets/image/dragon/landscape1.jpg'
    },
    {
      id: 3,
      name: 'Jôrthungd`Al',
      description: 'Quem com fogo fere, churrasco será servido.',
      type: 'Dragão de Fogo',
      period: '2780 a.J. - 128 d.J.',
      image: './assets/image/dragon/dragon2.png',
      avatar: './assets/image/dragon/dragon2-face.png',
      landscape: './assets/image/dragon/landscape2.jpg'
    },
    {
      id: 4,
      name: 'Jôrthungd`Al',
      description: 'Quem com fogo fere, churrasco será servido.',
      type: 'Dragão de Fogo',
      period: '2780 a.J. - 128 d.J.',
      image: './assets/image/dragon/dragon3.png',
      avatar: './assets/image/dragon/dragon3-face.png',
      landscape: './assets/image/dragon/landscape3.jpg'
    },
    {
      id: 5,
      name: 'Jôrthungd`Al',
      description: 'Quem com fogo fere, churrasco será servido.',
      type: 'Dragão de Fogo',
      period: '2780 a.J. - 128 d.J.',
      image: './assets/image/dragon/dragon4.png',
      avatar: './assets/image/dragon/dragon4-face.png',
      landscape: './assets/image/dragon/landscape4.jpg'
    }
  ];

  constructor() {}
}
