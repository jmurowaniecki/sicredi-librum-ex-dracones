import { Component, OnInit } from '@angular/core';
import { SoundService } from 'src/app/service/sound.service';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {

  constructor(private sound: SoundService) { }

  ngOnInit(): void { }

}
