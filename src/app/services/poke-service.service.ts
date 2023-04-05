import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Pokemon } from '../models/pokemon.model';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokeServiceService {
  //Url APi Pokèmon
  private apiUrl = 'https://pokeapi.co/api/v2';

  //Inyectamos HttpClient para usar API Rest
  constructor(private http: HttpClient) {}

  //Consultamos a la api pasando parámetros de tipo string
  //para el nombre, o number para la ID (acepta ambos)
  //Obtenemos un pokemon
  getPokemon(nameOrId: string | number): Observable<any> {
    const url = `${this.apiUrl}/pokemon/${nameOrId}`;
    return this.http.get<Pokemon>(url);
  }
}
