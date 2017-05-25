import React from 'react';

import Base from './Base';

import Header from './Header'

import Button from './Button'

export default class LandingPage extends Base {

    render() {


        return (
            <div className='LandingPage'>
            	<Header></Header>
            	<div className='largeFont' style={{margin:'25vh auto 0 auto',fontSize:'4em'}}>Discover VR</div>
            	<div className='mediumFont' style={{margin:'5vh auto 0 auto'}}>New Realities, From Your Home</div>
            	<Button style={{margin:'5vh auto 0 auto'}}>Step In</Button>
            </div>
        );
    }
}