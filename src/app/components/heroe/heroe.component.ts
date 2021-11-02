import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HeroesService } from '../../services/heroes.service';

@Component({
  selector: 'app-heroe',
  templateUrl: './heroe.component.html',
})
export class HeroeComponent {

  heroe: any = {};

  constructor(private activatedRoute: ActivatedRoute, private _heroesService: HeroesService) {
    // activatedRoute: proporciona acceso a la información de la ruta asociada a un componente cargado.
    // .params "observa" los parámetros de la matriz dentro del alcance de la ruta asociada.
    this.activatedRoute.params.subscribe(params => {
      console.log(params); // Params de la URL { regresan en un obj }
      this.heroe = this._heroesService.getHeroe(params['id']); // El id es porque en las rutas así lo nombramos
      console.log(this.heroe);
    })
  }

}
