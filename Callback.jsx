import React from 'react';
var Router = require('react-router');


class Callback extends React.Component {
    
    constructor(props) {
        super(props);
        this.state = { items: [] };
    }
    
    componentDidMount() {
        
        localStorage.setItem('token', this.props.location.query.name);
        
        Router.browserHistory.push('contact');
    }
    
    render() {
        return (
            <div>
                You have logged IN
            </div>
        )
    }
}
export default Callback;