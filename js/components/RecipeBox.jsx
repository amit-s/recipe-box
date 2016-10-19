import React from 'react';
import { Accordion, Panel } from 'react-bootstrap';
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
	}

	render(){
		return (			
			<Accordion>
				{this.state.recipes.map((recipe,index)=><RecipeItem recipe={recipe} key={index} />)}
			</Accordion>
			);
	}
}