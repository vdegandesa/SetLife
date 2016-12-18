import React from 'react';
import base from './Base';
import Tile from './Tile';

export default class Input extends base{
	constructor(props){
		super(props);
		this.autoBind('handleChangeTopic', 'handleSubmit', 'text', 'handleChangeDescription');
		this.state = {
				topic: '',
				description: '',
				list: [],
		};
	}
	handleChangeTopic(event){
		this.setState({
			topic: event.target.value

		});
	}
	handleChangeDescription(event){
		this.setState({
			description: event.target.value

		});
	}

	handleSubmit(event) {
		event.preventDefault();
		var info = {topic: this.state.topic,
					description: this.state.description}
		var list = this.state.list.concat(info)
		this.setState({
			list: list,
			topic: '',
			description: '',
	
		});
		
	}

	text(){
		return this.state.list.map((text, index) => {
			return(
					<Tile
						topic={text.topic}
						description={text.description}
						key={index}
						/>
				)
		})
	}
	render(){
		console.log(this.state)
		return(
			<div className='Input flex'>
				<form className='flex row' onSubmit={this.handleSubmit}>
  					<input 
  						onChange={this.handleChangeTopic} 
  						value={this.state.topic} 
  						type="text"
  					/>
  					<input 
  						onChange={this.handleChangeDescription} 
  						value={this.state.description} 
  						type="text"
  					/>
  					<button className='flex-center' type='submit'>/|.|.|.|./|\.|.|.l.|\</button>
				</form>
				{
					this.text()
				}
			</div>
			);
	}
}
