import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'stage',
  templateUrl: './stage.component.html',
  styleUrls: ['./stage.component.sass']
})
export class StageComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
    const stage = document.documentElement;

    stage.addEventListener('mousemove', e => {
      stage.style.setProperty('--mouseX', String(e.clientX * 100 / stage.offsetWidth));
      stage.style.setProperty('--mouseY', String(e.clientY * 100 / stage.offsetHeight));
    });

    stage.addEventListener('resize', e => {
      stage.style.setProperty('--sizing', String(Math.ceil(stage.offsetWidth * .1)));
    });
  }

}
