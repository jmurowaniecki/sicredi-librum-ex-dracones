import { Component, OnInit } from '@angular/core';
import { DragonsService } from 'src/app/service/dragons.service';

@Component({
  templateUrl: './admin.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminComponent implements OnInit {

  constructor(public Dragons: DragonsService) { }

  ngOnInit(): void { }

}
