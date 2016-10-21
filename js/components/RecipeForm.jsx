import React from 'react';
import { Button } from 'react-bootstrap';

export default class RecipeForm extends React.Component{
	render(){
		let defaultName = this.props.defaultName ? this.props.defaultName : "";
		let defaultIngredients = this.props.defaultIngredients ? this.props.defaultIngredients : "";
		let inputStyle = {
			marginBottom: 5
		};
		
		return(
			<div>
				<div><b>Recipe Name</b></div>
				<input style={inputStyle} ref="newName" onClick={(e)=>e.stopPropagation()} defaultValue={defaultName} placeholder="Enter recipe name"/>
				<div><b>Ingredients</b></div>
				<textarea ref="newIngredients" onClick={(e)=>e.stopPropagation()} defaultValue={defaultIngredients} placeholder="Enter ingredients as a comma separated list"></textarea><br />
				<Button id="saveButton" onClick={(e)=>this.props.save(e,this.refs.newName.value,this.refs.newIngredients.value.split(","))} >Save</Button>
				<Button id="cancelButton" onClick={this.props.cancel}>Cancel</Button>
			</div>
			);
	}
}