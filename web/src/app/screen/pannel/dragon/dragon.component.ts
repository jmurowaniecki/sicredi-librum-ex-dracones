import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DragonsService } from 'src/app/service/dragons.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { SoundService } from 'src/app/service/sound.service';

@Component({
  selector: 'dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.sass']
})
export class DragonComponent implements OnInit {

  private selected: any = 0;

  public clicked: any = false;

  constructor(
    private route: ActivatedRoute,
    private dragon: DragonsService,
    public sounds: SoundService,
    ) { }

  get Dragon() {
    this.sounds.preLoaded.dragon[this.selected].play();
    return this.dragon.list[this.selected];
  }

  ngOnInit(): void {
    this.selected = this.route.snapshot
      .paramMap.get('id');  // This is NOT a POG..
                            // It's just in case of fail to Observe.. (;

    this.route.params.subscribe(params => {
      this.selected = params.id;
    });
  }

}
