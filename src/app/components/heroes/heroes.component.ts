import { Component, OnInit } from '@angular/core';
import { Router } from "@angular/router";
// Servicio
import { HeroesService, Heroe } from 'src/app/services/heroes.service';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
})
export class HeroesComponent implements OnInit {

  /** --------------------- PROPIEDADES --------------------- */
  // Propiedad inicializada como un array que guardará los datos obtenidos desde el servicio
  heroes: Heroe[] = [];

  /** --------------------- SERVICIOS --------------------- */
  // El servicio se llama dentro del constructor del componente
  // Estructura: scope _nombreServicio: type
  constructor(private _heroesService: HeroesService, private router: Router) {
  }

  /** --------------------- FUNCIONES --------------------- */
  ngOnInit(): void {
    // Se obtiene la DATA de la función getHeroes 
    this.heroes = this._heroesService.getHeroes();
    // console.log(this.heroes);
  }

  /** Función encargada de navegar a la ruta id:index mediante el módulo ROUTER */
  verHeroe(idx: number) {
    this.router.navigate(['/heroe', idx]);
  }

}
