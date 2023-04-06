import { Component } from '@angular/core';
import { Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-form-pokedex',
  templateUrl: './form-pokedex.component.html',
  styleUrls: ['./form-pokedex.component.css'],
})
export class FormPokedexComponent {
  pokeId: string = '';

  @Output()
  propagarId = new EventEmitter<string>();

  sendPokeId() {
    this.pokeId = this.pokeId.toLowerCase();
    this.propagarId.emit(this.pokeId);
  }
}
