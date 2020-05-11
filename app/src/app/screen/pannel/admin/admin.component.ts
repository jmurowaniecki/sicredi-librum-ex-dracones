import { Component, OnInit } from '@angular/core';
import { DragonsService } from 'src/app/service/dragons.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  constructor(
    public Dragons: DragonsService,
    private login: UserService,
    ) { }

  ngOnInit(): void { }

  get user() {
    return this.login.user;
  }

}
