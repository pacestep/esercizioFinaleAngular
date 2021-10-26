import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { IPokemon, ISelectedPokemon } from 'src/app/models/pokemon.model';

@Component({
  selector: 'app-pokearea',
  templateUrl: './pokearea.component.html',
  styleUrls: ['./pokearea.component.scss']
})
export class PokeareaComponent implements OnInit {

  @Input() pokemon?: IPokemon;
  @Output() selectedPokemon = new EventEmitter<ISelectedPokemon>();
  @Input() pokemonCatturati!: IPokemon[];

  constructor() { }

  ngOnInit(): void {
  }

  selectPokemon(action: 'rifiuta' | 'cattura'): void {
    if(this.pokemon) {
      this.selectedPokemon.emit({pokemon: this.pokemon, action})
    }
  }

}
