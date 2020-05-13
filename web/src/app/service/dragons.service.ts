import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Dragon } from '../dragon';

export const GET_FIRST = true;
export const GET_EMPTY = false;

const API_ENDPOINT = 'https://5ebb376af2cfeb001697c9ca.mockapi.io/api/v1/dragon';

@Injectable({
  providedIn: 'root'
})
export class DragonsService {

  public Lair: Dragon[] | any;

  public lair$ = this.http.get(API_ENDPOINT);

  private breed = [
    {
      id: '{{i}}',
      name: 'Jôrthungd`Al',
      quote: 'Quem com fogo fere, como churrasco será servido.',
      type: 'Dragão de Fogo',
      imageUrl: './assets/image/dragon/dragon0.png',
      avatar: './assets/image/dragon/dragon0-face.png',
      landscape: './assets/image/dragon/landscape0.jpg',
      position: 'top center',
      histories: [],
      createdAt: '',
    },
    {
      id: '{{i}}',
      name: 'Draconísius',
      quote: 'Eu prefiro a comida suada e cansada.. É tipo um tempero natural.',
      type: 'Dragão de Pedra',
      imageUrl: './assets/image/dragon/dragon1.png',
      avatar: './assets/image/dragon/dragon1-face.png',
      landscape: './assets/image/dragon/landscape1.jpg',
      position: 'top right',
      histories: [],
      createdAt: '',
    },
    {
      id: '{{i}}',
      name: 'Phaul`argh',
      quote: 'Eu amo meus inimigos. Pena que já comi todos.',
      type: 'Dragão Elétrico',
      imageUrl: './assets/image/dragon/dragon4.png',
      avatar: './assets/image/dragon/dragon4-face.png',
      landscape: './assets/image/dragon/landscape2.jpg',
      position: 'top center',
      histories: [],
      createdAt: '',
    },
    {
      id: '{{i}}',
      name: 'Mahr`Yan',
      quote: 'Adoro visitas.. Principalmente na hora da janta.',
      type: 'Dragão de Sangue',
      imageUrl: './assets/image/dragon/dragon3.png',
      avatar: './assets/image/dragon/dragon3-face.png',
      landscape: './assets/image/dragon/landscape5.png',
      position: 'bottom right',
      histories: [],
      createdAt: '',
    }
  ];

  constructor(private http: HttpClient) {}

  public UnleashThemAll(): void {
    this.lair$.subscribe((dragons: Dragon[]) => {
      this.Lair = dragons.sort((a, e) => String(a.name).localeCompare(e.name)) ;
    });
  }

  public Refresh(): void {
    this.UnleashThemAll();
  }

  public New(): Dragon {
    return {
      id: '{{i}}',
      name: '',
      type: '',
      avatar: '',
      imageUrl: '',
      landscape: '',
      histories: [],
      quote: '',
      position: '',
      createdAt: String(new Date()),
    };
  }

  public Get(id: number, getFirst: boolean = GET_EMPTY, defaultDragon: any = false): Dragon | any {
    return this.Lair
        ? this.Lair.filter(dragon => dragon.id === id).pop()
        || (getFirst ? this.Lair[0]
          : defaultDragon)
          : defaultDragon;
  }

  public Post(dragon: Dragon): any {
    return dragon.id === '{{i}}'
      ? this.http.post(API_ENDPOINT, dragon)
      : this.http.put(API_ENDPOINT.concat('/', dragon.id), dragon);
  }

  public Delete(dragon: Dragon): any {
    return this.http.delete(API_ENDPOINT.concat('/', dragon.id));
  }

  public motherOfDragons() {
    this.breed.forEach(dragonEgg => {
      this.Post(dragonEgg).subscribe(done => console.log('done', done));
    });
  }
}
