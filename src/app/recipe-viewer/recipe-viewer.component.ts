import { Component, OnInit, Input } from '@angular/core';
import { Recipe } from '../recipe';
import { RecipeService} from '../recipe.service'
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-recipe-viewer',
  templateUrl: './recipe-viewer.component.html',
  styleUrls: ['./recipe-viewer.component.css']
})
export class RecipeViewerComponent implements OnInit {

  @Input() recipe? : Recipe;

  constructor(
    private recipeService: RecipeService,
    private route: ActivatedRoute,    
    private location: Location
    ) { }

  ngOnInit(): void {
    this.getRecipe()
  }

  getRecipe(): void {
    const id = Number(this.route.snapshot.paramMap.get('id'));
    this.recipeService.getRecipe(id).subscribe(recipe => this.recipe = recipe);
  }
}
