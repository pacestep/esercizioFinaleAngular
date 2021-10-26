import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-pokedex',
  templateUrl: './pokedex.component.html',
  styleUrls: ['./pokedex.component.scss']
})
export class PokedexComponent implements OnInit {

  @Input() pokemonList!: IPokemon[];
  @Output() deletedPokemon = new EventEmitter<IPokemon>();

  constructor(
    private router: Router, 
    private activatedRoute: ActivatedRoute, 
    private pokemonService: PokemonService
  ) { }

  ngOnInit(): void {
  }

  navigateToDetails(id: number) {
    this.pokemonService.updateSubject(this.pokemonList)
    this.router.navigate(['detail', id], { relativeTo: this.activatedRoute })
  }

  deletePokemon(pokemon: IPokemon):void {
    this.deletedPokemon.emit(pokemon);
  }

}
