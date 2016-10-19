import React from 'react';
import { Panel, Button } from 'react-bootstrap';

export default class RecipeItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			open: false,
			edit: false				
		};
	}

	edit(e){
		e.stopPropagation();
		this.setState({edit: true});

	}

	save(e){
		let newRecipe = {
			name: this.refs.newName.value,
			ingredients: this.refs.newIngredients.value.split(",")
		},
		index = this.props.index;
		e.stopPropagation();
		this.setState({edit: false});
		this.props.editRecipe(newRecipe, index);
		console.log(newRecipe);
		console.log(index);
	}

	delete(e){
		let index = this.props.index;
		e.stopPropagation();
		this.props.deleteRecipe(index);

	}

	renderNormal(){
		return(
			<Panel collapsible expanded={this.state.open} header={this.props.recipe.name} eventKey={this.props.index} onClick={()=>this.setState({open: !this.state.open})} >
				{this.props.recipe.ingredients.map((ingredient, index)=><li key={index}>{ingredient}</li>)}
				<Button onClick={(e)=>this.edit(e)}>Edit</Button>
				<Button onClick={(e)=>this.delete(e)}>Delete</Button>
			</Panel>
			);
	}

	renderForm(){
		return(
			<Panel collapsible expanded={this.state.open} header={this.props.recipe.name} eventKey={this.props.index} onClick={()=>this.setState({open: !this.state.open})} >
				<div>Recipe Name</div>
				<input ref="newName" defaultValue={this.props.recipe.name} placeholder="Enter recipe name" onClick={(e)=>e.stopPropagation()}></input>
				<div>Ingredients</div>
				<textarea ref="newIngredients" defaultValue={this.props.recipe.ingredients.join(",")} placeholder="Enter ingredients in a comma separated list" onClick={(e)=>e.stopPropagation()}></textarea>				
				<Button id="saveButton" onClick={(e)=>this.save(e)}>Save</Button>
			</Panel>
			);
	}

	render(){
		if(this.state.edit){
			return this.renderForm();		
		}else{
			return this.renderNormal();
		}
	}
}