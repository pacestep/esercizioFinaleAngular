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
  }

  handleSelectedPokemon(pokemon: ISelectedPokemon): void {
    if(pokemon.action === 'rifiuta') {
      this.pokemonRifiutati.push(pokemon.pokemon);
    } else if(pokemon.action === 'cattura') {
      this.pokemonCatturati.push(pokemon.pokemon);
    }

    this.getPokemon();
  }

  deletePokemon(pokemon: IPokemon) {
    this.pokemonCatturati = this.pokemonCatturati.filter((element) => element.id != pokemon.id);
  }

}
