import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-heroe-tarjeta',
  templateUrl: './heroe-tarjeta.component.html',
})
export class HeroeTarjetaComponent implements OnInit {

  // Input le indica a Ángular que va a recibir "algo" desde "afuera"
  @Input() heroe:any = {};
  @Input() index:number;

  // Output le indica a Ángular que el componente estará "escuchando" un evento desde el componente padre
  @Output() heroeSeleccionad: EventEmitter<number>

  constructor(private router: Router) {
    // Inicializar el EventEmitter (disparar) un evento personalizado
    this.heroeSeleccionad = new EventEmitter();
   }

  ngOnInit(): void {
  }

  verHeroe(){
  // console.log(this.index);
  // this.router.navigate(['/heroe', this.index]);
  this.heroeSeleccionad.emit(this.index);
  }

}
