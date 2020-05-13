import { Component } from '@angular/core';
import { DragonsService } from 'src/app/service/dragons.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent {

  constructor(
    public dragon: DragonsService,
    public auth: UserService,
  ) { }

  get Dragons() {
    return this.dragon.Lair;
  }
}
