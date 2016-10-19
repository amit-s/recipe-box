import React from 'react';
import { PanelGroup, Accordion } from 'react-bootstrap';
import RecipeItem from './RecipeItem.jsx';

export default class RecipeBox extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			recipes: [
				{
					name: "Swedish Meatballs",
					ingredients: ["Ground Pork", "Egg Yolks", "Bread", "Flour", "Broth", "Heavy Cream"]
				},
				{
					name: "Lasagna",
					ingredients: ["Ground Beef", "Lasagna Noodles", "Mozzarella Cheese", "Ricotta Cheese", "Egg", "Tomato Sause"]
				},
				{
					name: "Fish Tacos",
					ingredients: ["Cod Filles", "Corn Tortillas", "Cabbage", "Mayonnaise", "Jalapeno", "Cheese"]
				}
			]		
		};
		this.editRecipe = this.editRecipe.bind(this);
		this.deleteRecipe = this.deleteRecipe.bind(this);
	}

	editRecipe(newRecipe,index){
		let recipes = this.state.recipes;
		recipes[index] = newRecipe;
		this.setState({recipes});
	}

	deleteRecipe(index){
		let recipes = this.state.recipes;
		recipes.splice(index,1);
		this.setState({recipes});
	}

	render(){
		return (			
			<PanelGroup>
				{this.state.recipes.map((recipe,index)=><RecipeItem recipe={recipe} editRecipe={this.editRecipe} deleteRecipe={this.deleteRecipe} index={index} key={index} />)}
			</PanelGroup>
			);
	}
}