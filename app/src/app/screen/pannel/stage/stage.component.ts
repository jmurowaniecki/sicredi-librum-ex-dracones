import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.sass']
})
export class StageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {

    let dde = document.documentElement;
    dde.addEventListener("mousemove", e => {
      let ow = dde.offsetWidth;
      let oh = dde.offsetHeight;
      dde.style.setProperty('--mouseX', String(e.clientX * 100 / ow));
      dde.style.setProperty('--mouseY', String(e.clientY * 100 / oh));
    });
  }

}
