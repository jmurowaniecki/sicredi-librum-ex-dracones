import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DragonsService, GET_FIRST, GET_EMPTY } from 'src/app/service/dragons.service';
import { SoundService } from 'src/app/service/sound.service';
import { Dragon } from 'src/app/dragon';

@Component({
  selector: 'dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.sass']
})
export class DragonComponent implements OnInit {

  public Dragon: Dragon | any;

  constructor(
    private route: ActivatedRoute,
    public dragon: DragonsService,
    public sounds: SoundService,
  ) { }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.Dragon = this.dragon.Get(params.id, GET_EMPTY);
    });
  }

}
