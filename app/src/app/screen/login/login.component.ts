import { Component, OnInit } from '@angular/core';
import { SoundService } from 'src/app/service/sound.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(
    private sound: SoundService,
    private login: UserService,
    ) { }

  ngOnInit(): void { }

  Login(name: string | any) {
    this.login.user = name;
  }

}
