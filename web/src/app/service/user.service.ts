import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private title$: string | any;

  get title(): string {
    return this.title$;
  }

  get user(): string {
    return localStorage.getItem('name');
  }

  set user(name: string) {
    localStorage.setItem('name', name);

    if (name === 'Khaleesi') {
      this.title$ = 'mãe dos Dragões';
    }
  }

  Logout(): void {
    localStorage.removeItem('name');
  }
}
