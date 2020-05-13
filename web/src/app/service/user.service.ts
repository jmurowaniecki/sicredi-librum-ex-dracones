import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private title$: string | any;

  private name$: string;

  get title(): string {
    return this.title$;
  }

  get user(): string {
    return this.name$;
  }

  set user(name: string) {
    this.name$ = name;

    if (name === 'Khaleesi') {
      this.title$ = 'mãe dos Dragões';
    }
  }
}
