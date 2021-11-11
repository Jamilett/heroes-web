// Archivo de rutas que debe ir dentro de la carpeta app
// Nos ayudará a interactuar en la misma página sin hacer refresh 
// Formato estandar para crear rutas
import { RouterModule, Routes } from "@angular/router";
import { HomeComponent } from './components/home/home.component';
import { AboutComponent } from './components/about/about.component';
import { HeroesComponent } from "./components/heroes/heroes.component";
import { HeroeComponent } from "./components/heroe/heroe.component";
import { BuscadorComponent } from "./components/buscador/buscador.component";

const APP_ROUTES: Routes = [
    // Rutas por componente
    // path: 'nombre de nuestra ruta', component: Componente al que redirecciona
    { path: 'home', component: HomeComponent },
    { path: 'about', component: AboutComponent },
    { path: 'heroes', component: HeroesComponent },
    // Agregamos la ruta para iterar cada elemento héroe
    { path: 'heroe/:id', component: HeroeComponent },
    { path: 'buscar/:context', component: BuscadorComponent },
    // Si no funciona alguna ruta, nos redirecciona a esta por default.
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];

export const APP_ROUTING = RouterModule.forRoot(APP_ROUTES, { useHash: true });