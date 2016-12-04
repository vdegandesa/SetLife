import React from 'react';

import Base from './Base';

export default class Button extends Base {
    constructor(props) {
        super(props);
    }
    render() {
        return (
            <div className='Button row center'>
                <p>{this.props.children}</p>
            </div>
        );
    }
}