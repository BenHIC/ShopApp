import { Ingredient } from '../../shared/ingredient.model';
import * as ShoppingListAtions from './shopping-list.action';

const initialState = {
  ingredients: [
    new Ingredient('Apple', '5'),
    new Ingredient('Tomato', '10')
  ]
};

export function shoppingListReducer(state = initialState, action: ShoppingListAtions.AddIngredient) {
  switch (action.type) {
    case ShoppingListAtions.ADD_INGREDIENT:
      return {
        ...state,
        ingrendients: [...state.ingredients, action.payload]
      };
    default:
      return state;
  }
}
