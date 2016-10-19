import React from 'react';
import { Panel, Button } from 'react-bootstrap';

export default class RecipeItem extends React.Component{
	constructor(props){
		super(props);
		this.state = {
			open: false
		};
	}
	render(){
		return(
			<Panel collapsible expanded={this.state.open} header={this.props.recipe.name} eventKey={this.props.index} onClick={()=>this.setState({open: !this.state.open})}>
				{this.props.recipe.ingredients.map((ingredient, index)=><li key={index}>{ingredient}</li>)}
				<Button onClick={(e)=>e.stopPropagation()}>Edit</Button>
				<Button onClick={(e)=>e.stopPropagation()}>Delete</Button>
			</Panel>
			);
	}
}