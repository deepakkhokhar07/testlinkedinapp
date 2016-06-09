import React from 'react';


class Home12 extends React.Component {
    
    constructor() {
        super();
        this.state = { items: [] };
    }
    
    render() {
        var loginbanner=null;
        if (localStorage.getItem('token')=='null' || localStorage.getItem('token')==null) {
            
            
        }else{
            loginbanner=<span>Logged In</span>
        }
        
        return(
            
           <div className="loginBtn"> {loginbanner} </div> 
        );
    }
}

export default Home12;