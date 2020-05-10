import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, ParamMap } from '@angular/router';
import { DragonsService } from 'src/app/service/dragons.service';
import { switchMap } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Component({
  selector: 'dragon',
  templateUrl: './dragon.component.html',
  styleUrls: ['./dragon.component.sass']
})
export class DragonComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private service: DragonsService,
    ) { }

  ngOnInit(): void {
    // this.service.getHero(params.get('id')))

    console.log(this.route.snapshot.paramMap.get('id'));
  }

}
