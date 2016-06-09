import React from 'react';
var Router = require('react-router');

class Login extends React.Component {
    
    constructor() {
        
        super();
        
        this.state = { items: [] };
        
    }
    

    render() {
        
        var loginbanner=null;
        
        if (localStorage.getItem('token')=='null' || localStorage.getItem('token')==null) {
            
            loginbanner=<a className="loginBtnStyle" href={"https://www.linkedin.com/oauth/v2/authorization?response_type=code&client_id="+webservice.client_id+"&redirect_uri="+webservice.redirect_url+"&state="+webservice.state+"&scope=r_basicprofile"}>Login With LinkedIn</a>; 
        }else{
            
            Router.browserHistory.push('contact');
        }
        return (
            <div>{loginbanner}</div>
        )
    }
}

export default Login;