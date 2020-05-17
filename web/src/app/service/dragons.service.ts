import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Dragon, DragonType, COMMON_DRAGON_TYPES } from '../dragon';



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

  public Types: DragonType[] = COMMON_DRAGON_TYPES;

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
      createdAt: (new Date()).toISOString(),
    };
  }



  constructor(
    private http: HttpClient,
  ) {}



  public apply(dragon: Dragon, target: Dragon | any = false): Dragon {
    try {
      const dragonType = this.Types.filter(e => e.value === dragon.type).pop();
      ['avatar', 'imageUrl', 'landscape', 'position', 'label'].forEach(type => {
        dragon[type] = dragonType[type];
      });
    } catch (e) {
      console.error('Cannot apply dragon type');
    }
    if (target) {
      Object.assign(target, dragon);
    }
    return dragon;
  }


  public UnleashThemAll(): void {
    this.summoner = setInterval(() => this.Refresh(), THE_BEAST * THE_HOLLY);
  }

  public Refresh(): any {
    return new Promise(done => {
      this.remotes$.subscribe((dragons: Dragon[]) => {
        dragons
          .forEach((that: Dragon) => {
            if (!this.exists(that)) {
              this.Lair.push(this.apply(that));
              this.grimoire.push(that.id);
            }
          });

        this.Lair.sort((actual: Dragon, next: Dragon) => String(actual.name).localeCompare(next.name));
        return done();
      });
    });
  }

  public exists(dragon: Dragon): boolean {
    return this.grimoire.indexOf(dragon.id) !== -1;
  }

  public Get(id: number, getFirst: boolean = GET_EMPTY, defaultDragon: any = false): Dragon | any {
    return this.Lair
        ? this.Lair.filter(dragon => dragon.id === id).pop()
        || (getFirst ? this.Lair[0]
          : defaultDragon)
          : defaultDragon;
  }

  public Post(dragon: Dragon): any {
    const isNew = dragon.id === '{{i}}';
    let method = () => this.http.put(API_ENDPOINT.concat('/', dragon.id), dragon);
    if (isNew) {
      dragon.createdAt = (new Date()).toISOString();
      method = (() => this.http.post(API_ENDPOINT, dragon));
    } else {
      this.apply(dragon, this.Lair[this.Lair.findIndex(test => test.id === dragon.id)]);
    }
    return new Promise(done => method().subscribe(() => this.Refresh().then(() => done())));
  }

  public Delete(dragon: Dragon): any {
    return new Promise(done => this.http.delete(API_ENDPOINT.concat('/', dragon.id))
      .subscribe(() => {
        this.Lair = [];
        this.grimoire = [];
        this.Refresh().then(() => done());
      }));
  }

  public motherOfDragons() {
    this.brooder$.subscribe((eggs: Dragon[]) => {
      eggs.forEach((brood: Dragon) => {
        if (this.grimoire.indexOf(brood.name) === -1) {
          brood.createdAt = (new Date()).toISOString();
          this.Post(brood).then(ok => console.log('hatched', ok));
        }
      });
    });
  }
}
