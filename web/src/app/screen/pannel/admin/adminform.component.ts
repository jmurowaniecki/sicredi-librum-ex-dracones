import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DragonsService, GET_EMPTY } from 'src/app/service/dragons.service';
import { Dragon, DragonType } from 'src/app/dragon';

@Component({
  templateUrl: './adminform.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminFormComponent implements OnInit {

  public Dragon: Dragon = {} as Dragon;

  constructor(
    private route: ActivatedRoute,
    private dragon: DragonsService,
    private router: Router,
  ) { }

  get isNew(): boolean {
    return this.Dragon.id === '{{i}}';
  }

  get DragonTypes(): DragonType[] {
    return this.dragon.Types;
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.dragon.Refresh()
        .then(() => {
          this.Dragon = this.dragon.Get(params.id, GET_EMPTY, this.dragon.New());
        })
        .catch(() => console.error('Error while refreshing dragons'));
    });
  }

  invoqueChanges(action: string, dragon: Dragon) {
    this.dragon[action](dragon)
      .then((() => this.router.navigate(['/admin'])))
      .catch(() => console.error('Error while', action, dragon));
  }
}
