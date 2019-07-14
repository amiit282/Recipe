import { Component, OnInit } from '@angular/core';
import { Recipe } from '../recipes.model';

@Component({
  selector: 'app-recipe-list',
  templateUrl: './recipe-list.component.html',
  styleUrls: ['./recipe-list.component.css']
})
export class RecipeListComponent implements OnInit {
  recipe: Recipe[] = [
    new Recipe(
      'Test Recipe',
      'Test Reipe Description',
      'https://www.needpix.com/photo/285933/recipe-label-icon-symbol-spoon-recipes-card-food-ingredients'
    )
  ];
  constructor() {}

  ngOnInit() {}
}
