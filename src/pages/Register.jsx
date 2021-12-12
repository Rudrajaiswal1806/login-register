import React from 'react';
import {doAjaxCall} from '../util';

class Register extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            
            email: "",
            name:"",
            password: "",
            mobile: ""
        };
    }

    

    

    handleSubmit = () => {
        this.props.history.push('/login');
    }

    

   

    render(){
        return(
            <div className="w-25 m-auto ">
                <h1 className="text-success text-center mt-5">Register </h1>
                <form   className="mt-5 ">
                    
                    <div className="mb-3">    
                        <input type="text" className="form-control " placeholder="Name"  required  />    
                    </div>
                    <div className="mb-3">    
                        <input type="number" className="form-control " placeholder="Mobile Number"  required />    
                    </div>
                    <div className="mb-3">    
                        <input type="email" className="form-control " placeholder="Email address"  required />    
                    </div>
                    <div className="mb-3 ">    
                        <input type="password" className="form-control " placeholder="Password"  required />  
                    </div>  
                    
                    <div className="d-grid  ">
                        <button className="btn btn-danger" type="button" onClick={this.handleSubmit}>Register</button>
                    </div>
                </form>
            </div>                
        );
    }
}

export default Register;
