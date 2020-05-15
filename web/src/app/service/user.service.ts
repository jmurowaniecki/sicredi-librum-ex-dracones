import { Injectable } from '@angular/core';
import { DragonsService } from './dragons.service';

@Injectable({
  providedIn: 'root'
})
export class UserService {

  private title$: string | any;

  private messages: Array<string> = [];

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

  private validateUsername(name: string | any): boolean {
    if (name.length > 0) {
      if (!name.match(/^[a-zA-Z `'"´çÇáÁàÀâÂéÉêÊíÍóÒúÚîÎôÔûÛüÜùÙãÃõÕ]+$/)) {
        this.messages.push('Utilize apenas letas.');
        if (name.length > 6) {
          this.messages.push('Invente um nome, não uma senha.');
        }
      }
      for (const [condition, message] of [
        [name.length < 4, 'Utilize um nome, não seu apelido.'],
        [name.length >= 13, 'Utilize um nome mais curto.'],
        [name.length === 17, 'Nenhuma referência será permitida. Talkey?!'],
        [name.length === 42, 'É apenas um nome, não a resposta para o significado da Vida, do Universo e tudo o mais.'],
        [name.length > 42, 'Calma! É apenas um nome, não um salmo..'],
        [name.match(/(.)\1{2,}/), 'Seu nome nome não deve possuir mais de 2 caracteres repetidos consecutivamente.'],
        [!name.match(/^[A-Z]+/), 'Seu nome deve ter ao menos a primeira letra maiúscula.'],
      ]) {
        if (condition) {
          this.messages.push(message);
        }
      }
      if (!this.messages.length) {
        return true;
      }
    } else {
      this.messages.push('Seu nome não pode ser vazio.');
    }
    return false;
  }

  private validatePassword(runes: string | any): boolean {
    let password = '';

    for (let n = 0; n < 10; n++) {
      password += runes[`rune_${n}`] ? n : '';
    }

    if (password === '346') {
      return true;
    }
    this.messages.push('Senha incorreta!');

    return false;
  }

  public validate(form: any): {
    messages: string[],
    isValid: boolean
  } {
    this.messages = [];
    const auth = this.validateUsername(form.username) && this.validatePassword(form);

    if (auth) {
      this.user = form.username;
    }

    return {
      isValid: auth,
      messages: this.messages
    };
  }
}
