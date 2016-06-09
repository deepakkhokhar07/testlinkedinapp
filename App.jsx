import React from 'react';
import { Router, Route, Link, browserHistory, IndexRoute  } from 'react-router';

class App extends React.Component {
    
    constructor() {
        super();
        this.state = { items: [] };
        
    }

    render() {
        var banner;
        var banner1;
        var banner2;
        if (localStorage.getItem('token')=='null' || localStorage.getItem('token')==null) {
            
            
        }else{
            
            banner=<Link  className="linksStyle" to={"home12"}> Home</Link>;
            banner1=<Link className="linksStyle" to={"contact"}> Companies</Link>;
            banner2=<Link className="linksStyle" to={"logout"}> Logout</Link>;
        }
    
    
      return (
         <div>
            <div className="styleheader1">
                {banner}
                {banner1}
                {banner2}
            </div>
            <div className="divLogin">{this.props.children}</div>
         </div>
      )
   }
}

export default App;