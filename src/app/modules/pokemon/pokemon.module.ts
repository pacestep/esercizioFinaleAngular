import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { PokemonRoutingModule } from './pokemon-routing.module';
import { ContainerComponent } from './pages/container/container.component';
import { DetailsComponent } from './pages/details/details.component';
import { PokeareaComponent } from './components/pokearea/pokearea.component';
import { PokedexComponent } from './components/pokedex/pokedex.component';
import { RejectedPokemonComponent } from './components/rejected-pokemon/rejected-pokemon.component';

@NgModule({
  declarations: [
    ContainerComponent,
    DetailsComponent,
    PokeareaComponent,
    PokedexComponent,
    RejectedPokemonComponent,
  ],
  imports: [CommonModule, PokemonRoutingModule],
})
export class PokemonModule {}
