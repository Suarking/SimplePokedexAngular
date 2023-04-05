import { Component } from '@angular/core';
import { Pokemon } from 'src/app/models/pokemon.model';
import { PokeServiceService } from 'src/app/services/poke-service.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.css'],
})
export class PokedexComponent {
  //Valores por defecto, no se aceptan null
  pokemon: Pokemon = {
    id: 0,
    name: '',
    height: 0,
    weight: 0,
    moves: [],
    types: [],
    sprites: { front_default: '' },
  };

  pokemonNameOrId: string = 'pikachu';

  translatethis: string = 'Hola amigo, te quiero mucho';

  moves: any[] = [];
  types: any[] = [];

  constructor(private pokeService: PokeServiceService) {}

  currentTab = 'tab1'; // Valor por defecto para la pestaña activa

  showTab(tabName: string) {
    this.currentTab = tabName;
  }

  //Al iniciar, obtener el pokemon por defecto
  ngOnInit() {
    this.getPokemon();
  }

  //Llamada al servicio para obtener nuevo pokemon con valor
  //obtenido desde template, nos suscribimos para fijar un nuevo pokemon
  //que será mostrado en el template por interpolación.
  getPokemon(): void {
    this.pokeService.getPokemon(this.pokemonNameOrId).subscribe((pokemon) => {
      this.pokemon = pokemon;
      console.log(this.pokemon);
      this.moves = pokemon.abilities;
      console.log(this.moves);

      this.types = pokemon.types;
      console.log(this.types);
    });
  }

  //Acción a realizar cuando pulsemos el botón del template
  //y se envíe el submit
  onSubmit(): void {
    this.getPokemon();
  }
}
