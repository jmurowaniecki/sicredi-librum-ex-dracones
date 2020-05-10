import { Component, OnInit } from '@angular/core';
import { DragonsService } from 'src/app/service/dragons.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent implements OnInit {

  constructor(public Dragons: DragonsService) { }

  // get Dragons() {
  //   console.log(this.dragonsService);
  //   return this.dragonsService.list;
  // }

  ngOnInit(): void {
  }

}
