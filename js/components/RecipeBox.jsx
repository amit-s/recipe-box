import React from 'react';
import { PanelGroup, Accordion, Button } from 'react-bootstrap';
import RecipeItem from './RecipeItem.jsx';
import RecipeForm from './RecipeForm.jsx';

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
			],
			add: false
		};
		this.editRecipe = this.editRecipe.bind(this);
		this.deleteRecipe = this.deleteRecipe.bind(this);
		this.cancel = this.cancel.bind(this);
		this.save = this.save.bind(this);
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

	add(){
		this.setState({add: true});
	}

	cancel(){
		this.setState({add: false});
	}

	save(e, newName, newIngredients){
		if(!newName || newIngredients.length < 2){
			this.setState({add: false});
			return;
		}
		
		let recipes = this.state.recipes;
		recipes.push({
			name: newName,
			ingredients: newIngredients
		});
		this.setState({
			recipes: recipes,
			add: false
		});
	}

	renderNormal(){
		return (
			<div>
				<h1 id="heading" className="text-center">Recipe Box</h1>
				<Button id="addButton" onClick={()=>this.add()}>Add</Button>
				<PanelGroup>
					{this.state.recipes.map((recipe,index)=><RecipeItem recipe={recipe} editRecipe={this.editRecipe} deleteRecipe={this.deleteRecipe} index={index} key={index} />)}
				</PanelGroup>
			</div>
			);
	}

	renderForm(){
		return (
			<div>
				<h1 id="heading" className="text-center">Recipe Box</h1>
				<RecipeForm cancel={this.cancel} save={this.save} />
				<PanelGroup>
					{this.state.recipes.map((recipe,index)=><RecipeItem recipe={recipe} editRecipe={this.editRecipe} deleteRecipe={this.deleteRecipe} index={index} key={index} />)}
				</PanelGroup>
			</div>
			);
	}

	render(){
		if(this.state.add){
			return this.renderForm();
		}else{
			return this.renderNormal();
		}
	}
}