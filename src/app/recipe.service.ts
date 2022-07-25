import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Recipe } from './recipe';
import { RECIPES } from './mock-recipes';

@Injectable({
  providedIn: 'root'
})
export class RecipeService {

  constructor() { }

  getRecipes(): Observable<Recipe[]> {
    const recipes = of(RECIPES);    
    return recipes;
  }

  getRecipe(id: number): Observable<Recipe> {
    const recipe = RECIPES.find(recipe => recipe.id === id)!;
    return of(recipe)
  }
}
