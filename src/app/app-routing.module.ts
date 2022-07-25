import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { RecipeViewerComponent } from './recipe-viewer/recipe-viewer.component';
import { RecipesComponent } from './recipes/recipes.component';

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'dashboard', component: RecipesComponent},
  { path: 'recipes/:id', component: RecipeViewerComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
