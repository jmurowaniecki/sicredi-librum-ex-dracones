import { Component, OnInit } from '@angular/core';
import { SoundService } from 'src/app/service/sound.service';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { DragonsService } from 'src/app/service/dragons.service';
import { timingSafeEqual } from 'crypto';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public messages: Array<string> = [];

  constructor(
    private sound: SoundService,
    private login: UserService,
    private route: Router,
    private breed: DragonsService,
    ) { }

  ngOnInit(): void {
    if (this.route.url === '/logout') {
      this.login.Logout();
    }
  }

  private isValid(name): boolean {
    this.messages = [];

    if (name.length > 0) {
      if (!name.match(/^[a-zA-Z `'"´çÇáÁàÀâÂéÉêÊíÍóÒúÚîÎôÔûÛüÜùÙãÃõÕ]+$/)) {
        this.messages.push('Utilize apenas letas.');
        if (name.length > 6) {
          this.messages.push('Invente um nome, não uma senha.');
        }
      }
      for (const [condition, message] of [
        [name.length  <  4      , 'Utilize um nome, não seu apelido.'],
        [name.length  >= 13     , 'Utilize um nome mais curto.'],
        [name.length === 17     , 'Nenhuma referência será permitida. Talkey?!'],
        [name.length === 42     , 'É apenas um nome, não a resposta para o significado da Vida, do Universo e tudo o mais.'],
        [name.length  >  42     , 'Calma! É apenas um nome, não um salmo..'],
        [name.match(/(.)\1{2,}/), 'Seu nome nome não deve possuir mais de 2 caracteres repetidos consecutivamente.'],
        [!name.match(/^[A-Z]+/) , 'Seu nome deve ter ao menos a primeira letra maiúscula.'],
      ]) {
        if (condition) {
          this.messages.push(message);
        }
      }
      if (!this.messages.length) {
        if (name === 'Khaleesi') {
          this.breed.motherOfDragons();
        }
        this.login.user = name;
        return true;
      }
    } else {
      this.messages.push('Seu nome não pode ser vazio.');
    }
    return false;
  }

  Login(name: string | any) {
    const login = this.isValid(name);
    this.sound.play('action', [1, 2][Number(login)]);

    if (login) {
      this.route.navigate(['/dragon']);
    }
  }
}
