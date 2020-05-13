import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { of, Observable } from 'rxjs';
import { Dragon } from '../dragon';



export const GET_FIRST = true;
export const GET_EMPTY = false;

const API_ENDPOINT = 'https://5ebb376af2cfeb001697c9ca.mockapi.io/api/v1/dragon';

const THE_BEAST = 666;
const THE_HOLLY = 3;



@Injectable({
  providedIn: 'root'
})
export class DragonsService {

  private summoner: any;

  private remotes$ = this.http.get(API_ENDPOINT);

  private brooder$ = this.http.get('./assets/eggs.json');

  private grimoire: Array<string> = [];

  public Lair: Dragon[] | any = [];

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



  constructor(private http: HttpClient) {}



  public UnleashThemAll(): void {
    const loop = this.Refresh();
    this.summoner = setInterval(loop.bind(this), THE_BEAST * THE_HOLLY);
  }

  public Refresh(): any {
    this.remotes$.subscribe((dragons: Dragon[]) => {
      dragons
        .forEach((that: Dragon) => {
          if (!this.exists(that)) {
            this.Lair.push(that);
            this.grimoire.push(that.name);
          }
        });

      this.Lair.sort((actual: Dragon, next: Dragon) => String(actual.name).localeCompare(next.name));
    });
    return this.Refresh;
  }

  public exists(dragon: Dragon): boolean {
    return this.grimoire.indexOf(dragon.name) !== -1;
  }

  public Get(id: number, getFirst: boolean = GET_EMPTY, defaultDragon: any = false): Dragon | any {
    return this.Lair
        ? this.Lair.filter(dragon => dragon.id === id).pop()
        || (getFirst ? this.Lair[0]
          : defaultDragon)
          : defaultDragon;
  }

  public Post(dragon: Dragon): any {
    return new Promise(done => (dragon.id === '{{i}}'
      ? this.http.post(API_ENDPOINT, dragon)
      : this.http.put(API_ENDPOINT.concat('/', dragon.id), dragon))
        .subscribe(() => done(this.Refresh())));
  }

  public Delete(dragon: Dragon): any {
    return new Promise(done => this.http.delete(API_ENDPOINT.concat('/', dragon.id))
      .subscribe(() => {
        this.Lair = [];
        this.grimoire = [];
        done(this.Refresh());
      }));
  }

  public motherOfDragons() {
    this.brooder$.subscribe((eggs: Dragon[]) => {
      eggs.forEach((brood: Dragon) => {
        if (!this.exists(brood)) {
          this.Post(brood).subscribe(done => console.log('hatched', done));
        }
      });
    });
  }
}
