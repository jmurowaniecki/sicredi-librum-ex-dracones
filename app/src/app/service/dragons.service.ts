import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DragonsService {

  public list = [
    {
      name: "Jôrthungd'Al",
      description: "Quem com fogo fere, churrasco será servido.",
      type: "Dragão de Fogo",
      period: "2780 a.J. - 128 d.J.",
      image: "./assets/image/dragon/dragon0.png",
      avatar: "./assets/image/dragon/dragon0-face.png"
    },
    {
      name: "Jôrthungd'Al",
      description: "Quem com fogo fere, churrasco será servido.",
      type: "Dragão de Fogo",
      period: "2780 a.J. - 128 d.J.",
      image: "./assets/image/dragon/dragon1.png",
      avatar: "./assets/image/dragon/dragon1-face.png"
    },
    {
      name: "Jôrthungd'Al",
      description: "Quem com fogo fere, churrasco será servido.",
      type: "Dragão de Fogo",
      period: "2780 a.J. - 128 d.J.",
      image: "./assets/image/dragon/dragon2.png",
      avatar: "./assets/image/dragon/dragon2-face.png"
    },
    {
      name: "Jôrthungd'Al",
      description: "Quem com fogo fere, churrasco será servido.",
      type: "Dragão de Fogo",
      period: "2780 a.J. - 128 d.J.",
      image: "./assets/image/dragon/dragon3.png",
      avatar: "./assets/image/dragon/dragon3-face.png"
    },
    {
      name: "Jôrthungd'Al",
      description: "Quem com fogo fere, churrasco será servido.",
      type: "Dragão de Fogo",
      period: "2780 a.J. - 128 d.J.",
      image: "./assets/image/dragon/dragon4.png",
      avatar: "./assets/image/dragon/dragon4-face.png"
    }
  ];

  constructor() {}
}
