import React from 'react';
import ReactDOM from 'react-dom';
import RecipeBox from './components/RecipeBox.jsx';

let recipes = [{
					name: "Swedish Meatballs",
					ingredients: ["Ground Pork", "Egg Yolks", "Bread", "Flour", "Broth", "Heavy Cream"]
				},
				{
					name: "Lasagna",
					ingredients: ["Ground Beef", "Lasagna Noodles", "Mozzarella Cheese", "Ricotta Cheese", "Egg", "Tomato Sause"]
				},
				{
					name: "Fish Tacos",
					ingredients: ["Cod Fillets", "Corn Tortillas", "Cabbage", "Mayonnaise", "Jalapeno", "Cheese"]
				}];

if(window.localStorage){
	if(localStorage.getItem("_amits_recipes")){
		recipes = JSON.parse(localStorage.getItem("_amits_recipes"));
	}else{		
		localStorage.setItem("_amits_recipes", JSON.stringify(recipes));
	}
}

ReactDOM.render(<RecipeBox recipes={recipes} />, document.getElementById("recipeBox"));
