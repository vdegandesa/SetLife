import React from 'react';

import Base from './Base';

export default class Button extends Base {
    constructor(props) {
        super(props);
        
    }

    render() {
        return (
            <div className='Button row' style={this.props.style}>
                <div style={{margin:'auto'}}>{this.props.children}</div>
            </div>
        );
    }
}