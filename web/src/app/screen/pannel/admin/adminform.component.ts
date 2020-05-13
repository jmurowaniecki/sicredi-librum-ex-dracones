import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { DragonsService, GET_EMPTY } from 'src/app/service/dragons.service';
import { Dragon } from 'src/app/dragon';
import { NgForm } from '@angular/forms';

@Component({
  templateUrl: './adminform.component.html',
  styleUrls: ['./admin.component.sass']
})
export class AdminFormComponent implements OnInit {

  public Dragon: Dragon;

  constructor(
    private route: ActivatedRoute,
    private dragon: DragonsService,
    private router: Router,
  ) { }

  get isNew(): boolean {
    return this.Dragon.id === '{{i}}';
  }

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      this.Dragon = this.dragon.Get(params.id, GET_EMPTY, this.dragon.New());
    });
  }

  summon(dragon: Dragon) {
    this.dragon.Post(dragon).then(() => this.invoqueChanges());
  }

  slay(dragon: Dragon) {
    this.dragon.Delete(dragon).then(() => this.invoqueChanges());
  }

  invoqueChanges() {
    this.router.navigate(['/admin']);
  }
}
