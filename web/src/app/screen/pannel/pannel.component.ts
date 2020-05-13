import { Component, OnInit } from '@angular/core';
import { UserService } from 'src/app/service/user.service';
import { DragonsService } from 'src/app/service/dragons.service';

@Component({
  selector: 'pannel',
  templateUrl: './pannel.component.html',
  styleUrls: ['./pannel.component.sass']
})
export class PannelComponent implements OnInit {

  constructor(
    public auth: UserService,
    private Dragons: DragonsService,
  ) { }

  ngOnInit(): void {
    this.Dragons.UnleashThemAll();
  }

}
