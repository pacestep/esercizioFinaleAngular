import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { IPokemon } from 'src/app/models/pokemon.model';
import { PokemonService } from '../../../services/pokemon.service';

@Component({
  selector: 'app-rejected-pokemon',
  templateUrl: './rejected-pokemon.component.html',
  styleUrls: ['./rejected-pokemon.component.scss']
})
export class RejectedPokemonComponent implements OnInit {

  @Input() pokemonList!: IPokemon[];

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

}
