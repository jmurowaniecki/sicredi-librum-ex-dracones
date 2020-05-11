import { Component, OnInit } from '@angular/core';
import { DragonsService } from 'src/app/service/dragons.service';
import { UserService } from 'src/app/service/user.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  constructor(
    public Dragons: DragonsService
    ) { }

  ngOnInit(): void { }

}
