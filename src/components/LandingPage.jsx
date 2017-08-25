import React from 'react';

import Base from './Base';

export default class LandingPage extends Base {
	constructor(props) {
		super(props);
		this.autoBind('switchCurrencyToBtc', 'switchCurrencyToDollar')
		this.state = {
			selectedCurrency: 'btc'
		}
	}
	switchCurrencyToBtc() {
		console.log('switchCurrencyToBtc')
		this.setState({
			selectedCurrency: 'btc'
		});

	}
	switchCurrencyToDollar() {
		console.log('switchCurrencyToDollar')
		this.setState({
			selectedCurrency: 'dollars'
		});

	}

    render() {
    	console.log('render')
    	var isDollarSelected;

    	if (this.state.selectedCurrency == 'dollars') {
    		isDollarSelected = true
    	}
    	else {
    		isDollarSelected = false
    	}

        return (
            <div className='LandingPage'>
            	{isDollarSelected
            		?
            			<h6>Dollars</h6>
            		:
            			<h6>Bitcoin</h6>
        
            	}
                
                
                <p onClick={this.switchCurrencyToBtc}>bitcoin Switch</p>
                <p onClick={this.switchCurrencyToDollar}>dollar Switch</p>

            </div>
        );
    }
}
