import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { IPokemon } from 'src/app/models/pokemon.model';

@Injectable({
  providedIn: 'root'
})
export class PokemonService {
  private apiUrl = 'https://pokeapi.co/api';

  pokemonListSubject: BehaviorSubject<IPokemon[]>;
  pokemonList$: Observable<IPokemon[]>;

  constructor(private httpClient: HttpClient) {
    this.pokemonListSubject = new BehaviorSubject<IPokemon[]>([])
    this.pokemonList$ = this.pokemonListSubject.asObservable();
   }

  getPokemon(): Observable<IPokemon> {
    const id = Math.ceil(Math.random() * 898);
    return this.httpClient.get<IPokemon>(`${this.apiUrl}/v2/pokemon/${id}`);
  }

  updateSubject(pokemonList: IPokemon[]) {
    this.pokemonListSubject.next(pokemonList);
  }
}
