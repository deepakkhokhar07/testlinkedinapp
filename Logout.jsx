import React from 'react';
var Router = require('react-router');

class Logout extends React.Component {
    
    constructor() {
        super();
        this.state = { items: [] };
        
    }
    
    componentDidMount() {
        
        localStorage.setItem('token', null);
	
	Router.browserHistory.push('login');
        
    }
    render() {
        return (
                
            <div>logged Out</div>
        )
    }
    
}


export default Logout;