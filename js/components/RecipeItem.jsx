import React from 'react';
import { Panel, Button } from 'react-bootstrap';
import RecipeForm from './RecipeForm.jsx';

export default class RecipeItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			open: false,
			edit: false				
		};
		this.save = this.save.bind(this);
		this.cancel = this.cancel.bind(this);
	}

	edit(e){
		e.stopPropagation();
		this.setState({edit: true});

	}

	save(e, newName, newIngredients){
		let newRecipe = {
			name: newName,
			ingredients: newIngredients
		},
		index = this.props.index;
		e.stopPropagation();
		this.setState({edit: false});
		this.props.editRecipe(newRecipe, index);
	}

	delete(e){
		let index = this.props.index;
		e.stopPropagation();
		this.props.deleteRecipe(index);

	}
	cancel(e){
		e.stopPropagation();
		this.setState({edit:false});
	}

	renderNormal(){
		return(
			<Panel collapsible expanded={this.state.open} header={this.props.recipe.name} eventKey={this.props.index} 
			onClick={()=>this.setState({open: !this.state.open})}>
				{this.props.recipe.ingredients.map((ingredient, index)=><li key={index}>{ingredient}</li>)}
				<Button onClick={(e)=>this.edit(e)}>Edit</Button>
				<Button onClick={(e)=>this.delete(e)}>Delete</Button>
			</Panel>
			);
	}

	renderForm(){
		return(
			<Panel collapsible expanded={this.state.open} header={this.props.recipe.name} eventKey={this.props.index} 
			onClick={()=>this.setState({open: !this.state.open})} >
				<RecipeForm defaultName={this.props.recipe.name} defaultIngredients={this.props.recipe.ingredients.join(", ")} cancel={this.cancel} save={this.save} />
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


/*<div>Recipe Name</div>
				<input ref="newName" defaultValue={this.props.recipe.name} placeholder="Enter recipe name" 
				onClick={(e)=>e.stopPropagation()} />
				<div>Ingredients</div>
				<textarea ref="newIngredients" defaultValue={this.props.recipe.ingredients.join(",")} 
				placeholder="Enter ingredients in a comma separated list" onClick={(e)=>e.stopPropagation()}></textarea><br />
				<Button id="saveButton" onClick={(e)=>this.save(e)}>Save</Button>
				<Button id="cancelButton" onClick={(e)=>this.cancel(e)}>Cancel</Button>*/