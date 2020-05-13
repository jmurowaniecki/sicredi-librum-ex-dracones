import { Component } from '@angular/core';
import { DragonsService } from 'src/app/service/dragons.service';
import { SoundService } from 'src/app/service/sound.service';

@Component({
  selector: 'sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.sass']
})
export class SidebarComponent {

  constructor(
    public dragon: DragonsService,
    public sounds: SoundService,
  ) { }

  get Dragons() {
    return this.dragon.Lair;
  }

}
