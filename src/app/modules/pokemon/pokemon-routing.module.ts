import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContainerComponent } from './pages/container/container.component';
import { DetailsComponent } from './pages/details/details.component';


const routes: Routes = [
  { path: '', component: ContainerComponent },
  { path: 'detail/:id', component: DetailsComponent }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PokemonRoutingModule { }
