import React from 'react';
import Input from './Input';

import Base from './Base';

export default class LandingPage extends Base{
	render(){
		return ( 
			<div className='row LandingPage'>
                <h6 className='flex row'>Statics Topics</h6>
                <h6 className='flex row'>Physics Topics</h6>
                <h6 className='flex row'>Intro to flight</h6>
                <Input/>
            </div>
		);
	}
	
}