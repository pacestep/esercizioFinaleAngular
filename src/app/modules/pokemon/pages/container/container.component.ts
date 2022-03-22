import { Component, OnInit } from '@angular/core';
import { IPokemon, ISelectedPokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from 'src/app/modules/services/pokemon.service';

@Component({
  selector: 'app-container',
  templateUrl: './container.component.html',
  styleUrls: ['./container.component.scss']
})
export class ContainerComponent implements OnInit {

  currentPokemon?: IPokemon;
  pokemonCatturati: IPokemon[] = [];
  pokemonRifiutati: IPokemon[] = [];

  constructor(private pokemonService: PokemonService) { }

  ngOnInit(): void {
    this.getPokemon();
  }

  getPokemon(): void {
    this.pokemonService.getPokemon().subscribe(data => this.currentPokemon = data);
    const pokemons = this.pokemonService.getLocalStorage();
    if (pokemons.length) {
      this.pokemonCatturati = pokemons.filter((pokemon) => pokemon.action === 'cattura');
      this.pokemonRifiutati = pokemons.filter((pokemon) => pokemon.action === 'rifiuta');
      this.storePokemons();
    }
  }

  handleSelectedPokemon(pokemon: ISelectedPokemon): void {
    pokemon.pokemon.action = pokemon.action;
    if(pokemon.action === 'rifiuta') {
      this.pokemonRifiutati.push(pokemon.pokemon);
    } else if(pokemon.action === 'cattura') {
      this.pokemonCatturati.push(pokemon.pokemon);
    }
    this.storePokemons();
    this.getPokemon();
  }

  deletePokemon(pokemon: IPokemon): void {
    this.pokemonCatturati = this.pokemonCatturati.filter((element) => element.id !== pokemon.id);
    this.storePokemons();
  }

  storePokemons(): void {
    const pokemons = [...this.pokemonCatturati, ...this.pokemonRifiutati];
    this.pokemonService.saveCurrentPokemons(pokemons);
  }



}
