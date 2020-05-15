import { Component, OnInit, ElementRef, ViewChild } from '@angular/core';
import { SoundService } from 'src/app/service/sound.service';
import { UserService } from 'src/app/service/user.service';
import { Router } from '@angular/router';
import { DragonsService } from 'src/app/service/dragons.service';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  public messages: Array<string> = [];
  public sortInts: Array<number> = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]
    .sort(() => .5 - Math.random());

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

  Login(form: any) {
    const login = this.login.validate(form.value);

    this.sound.play('action', [1, 2][Number(login)]);

    if (!login.isValid) {
      console.log('inváldi', login);
      this.messages = login.messages;
      return false;
    }
    this.route.navigate(['/dragon']);
  }
}
