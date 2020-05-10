import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.sass']
})
export class StageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const dde = document.documentElement;

    dde.addEventListener('mousemove', e => {
      dde.style.setProperty('--mouseX', String(e.clientX * 100 / dde.offsetWidth));
      dde.style.setProperty('--mouseY', String(e.clientY * 100 / dde.offsetHeight));
    });
  }

}
