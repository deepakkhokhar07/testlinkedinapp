import React from 'react';
var Router = require('react-router');


class Contact extends React.Component {
    
    constructor() {
        super();
        this.state = { items: [] };
        
        this.getcompanyData = this.getcompanyData.bind(this);

    }
    
    componentDidMount() {
        
        this.setState({items: []});
        
        if (localStorage.getItem('token')=='null' || localStorage.getItem('token')==null) {
            
            
            Router.browserHistory.push('login');
        }
        
        
        $.ajax({
            
            url: webservice.getcompany,
            dataType: 'json',
            method : 'POST',
            cache: false,
            data : {token : localStorage.getItem('token')},
            success: function(data) {
                
                this.setState({items: data.data});
                
            }.bind(this),
            error: function(xhr, status, err) {
                
                console.error(this.props.url, status, err.toString());
            }.bind(this)
        });
        
    }
    
    getcompanyData(e){
        
        let valuetext=document.getElementById("companytext").value;
        
        if (valuetext.length>2) {
            
            this.setState({items: []});
            
            if (localStorage.getItem('token')=='null' || localStorage.getItem('token')==null) {
            
                
                Router.browserHistory.push('login');
            }   
            
            $.ajax({
                url: webservice.getcompany,
                dataType: 'json',
                method : 'POST',
                cache: false,
                data : {token : localStorage.getItem('token'),value : valuetext},
                success: function(data) {
                    
                    this.setState({items: data.data});
                    
        
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error(this.props.url, status, err.toString());
                }.bind(this)
            });
        }
        
    }

    
    render() {
       
        return(
            <table className="table">
                <tbody>
                <tr ><td className="tdwidthSearch">Search keyword : </td><td colspan="2" className="tdwidthSearchbox"><input type="text" onKeyUp={this.getcompanyData} placeholder="Type company Name" id="companytext" name="companytext" /></td></tr>
                <tr ><td className="tdwidth1">Name</td><td className="tdwidth2">Industry</td><td className="tdwidth3">Basic Info Description</td></tr>
                {this.state.items.map(item=> { return <tr key={item.id}><td className="tdwidthIn1">{item.name}</td><td className="tdwidthIn2">{item.industries.values[0].name}</td><td className="tdwidthIn3">{item.description}</td></tr>})}        
                </tbody>
            </table>
            
        );
    }
    

        

}
export default Contact;