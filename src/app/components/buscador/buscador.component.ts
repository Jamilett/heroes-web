import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from 'src/app/services/heroes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-buscador',
  templateUrl: './buscador.component.html',
})
export class BuscadorComponent implements OnInit {

  heroes:any[] = [];
  context:string;
  idx:any;

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService, private router: Router) { }

  ngOnInit() {
    // Se obtiene en el parametro de la url
    this.idx = this.activatedRoute.params.subscribe((params) => {
      console.log(params['context']);
      this.context = params['context'];
      this.heroes = this._heroesService.buscarHeroes(params['context']);
      console.log(this.heroes);
    })
  }

  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
