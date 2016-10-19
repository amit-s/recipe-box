import React from 'react';
import { Panel } from 'react-bootstrap';

export default class RecipeItem extends React.Component{
	render(){
		return(
			<Panel collapsible header={this.props.recipe.name} eventKey={this.props.index}>
				{this.props.recipe.ingredients.map((ingredient, index)=><li key={index}>{ingredient}</li>)}
			</Panel>
			);
	}
}