import { Component, OnInit } from '@angular/core';
import { SoundService } from 'src/app/service/sound.service';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';

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
    ) { }

  ngOnInit(): void { }

  Login(name: string | any) {
    this.messages = [];

    if (name.length > 0) {
      if (!name.match(/^[a-zA-Z `'"´]+$/)) {
        this.messages.push('Utilize apenas letas.');
        if (name.length > 6) {
          this.messages.push('Invente um nome, não uma senha.');
        }
      }
      if (name.length < 4) {
        this.messages.push('Utilize um nome, não seu apelido.');
      }
      if (name.length >= 13) {
        this.messages.push('Utilize um nome mais curto.');
      }
      if (name.length === 17) {
        this.messages = ['Nenhuma referência será permitida. Talkey?!'];
      }
      if (name.length === 42) {
        this.messages = ['É apenas um nome, não a resposta para o significado da Vida, do Universo e tudo o mais.'];
      }
      if (name.length > 42) {
        this.messages.push('Calma! É apenas um nome, não um salmo..');
      }
      if (name.match(/(.)\1{2,}/)) {
        this.messages.push('Seu nome nome não deve possuir mais de 2 caracteres repetidos consecutivamente.');
      }
      if (!name.match(/^[A-Z]+/)) {
        this.messages.push('Seu nome deve ter ao menos a primeira letra maiúscula.');
      }
      if (!this.messages.length) {
        this.login.user = name;
        this.route.navigate(['/dragons']);
      }
    }
    else {
      this.messages.push('Seu nome não pode ser vazio.');
    }

    return false;
  }

  Logout() {
    this.login.user = null;
  }
}
