import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IMoveBundle } from 'src/app/models/move.model';
import { IPokemon } from 'src/app/models/pokemon.model';
import { IStats } from 'src/app/models/stats.model';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.scss']
})
export class DetailsComponent implements OnInit {

  private pokemonList!: IPokemon[];
  public pokemonDetails?: IPokemon;
  public moves?: IMoveBundle[];
  public stats?: IStats[];

  constructor(private pokemonService: PokemonService, private router: Router, private activatedRoute: ActivatedRoute) {
  
   }

  ngOnInit(): void {
    this.getPokemonListByService();
    this.getPokemon();  
  }

  getPokemonListByService(): void {
    this.pokemonService.pokemonList$.subscribe(data => this.pokemonList = data);
  }

  getPokemon(): void {
    const id = this.activatedRoute.snapshot.params.id;
    this.pokemonDetails = this.pokemonList.find(element => element.id === Number(id));
    if(!this.pokemonDetails) {
      this.return();
    }
    this.moves = this.pokemonDetails?.moves;
    this.stats = this.pokemonDetails?.stats;
  }

  return() {
    this.router.navigate(['pokemon']);
  }

}
