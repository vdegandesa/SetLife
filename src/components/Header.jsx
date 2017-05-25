import React from 'react';

import Base from './Base';

export default class Header extends Base {

	    constructor(props) {
        super(props);
        this.state = {
        	brandName:'SetReality',
        }
        
    }

    render() {

    	var headerText = {
		color: '#fff',
		margin: 'auto 1rem',
		fontSize: '1.25rem',
		fontFamily:'Roboto'
		};


        return (
            <div className='Header'>
                <div style={headerText}>{this.state.brandName}</div>
                <div style={headerText}>Use Cases</div>
                <div style={headerText}>How It Works</div>
                <div style={headerText}>Options</div>
                <div style={headerText}>FAQs</div>
                <div style={headerText}>Contact</div>
            </div>
        );
    }
}