import React from 'react';
import config from 'react-global-configuration';
import { Col, Button, Form} from 'react-bootstrap';
import $ from 'jquery';
import { setLogin } from "../component/ProductSlice";
import {connect} from "react-redux";
import {doAjaxCall} from "../util";


class LoginScreen extends React.Component{
    constructor(props) {
        super(props);
        this.state={
			isLoading: false,
            login:[]
		 }
    }

	// componentDidMount() {
    //     this.getLoginDetails();
    // }

	getLoginDetails = () =>{
        doAjaxCall(`2436ee40-0692-450e-ade1-b69d9381c833`, 'GET','')
            .then(response =>  {
                if(response.status === 200){
                    this.props.setLogin(response.data.login);
                    this.setState({isLoading: true});
                } else {
                    alert('error');
                }
            });
    }

	handleSubmit = () => {
        this.props.history.push('/product');
    }

    render(){
        return(            
            <div className="w-25 m-auto ">
                <h1 className="text-success text-center mt-5 mb-5">Log In </h1>
				<form>				                 
				<div class="mb-3">
					<label  class="form-label">Username</label>
					<input type="text" class="form-control" disabled readOnly placeholder="Rudra" />
				</div>
				<div class="mb-3">
					<label  class="form-label">Password</label>
					<input type="text" class="form-control" disabled readOnly placeholder="testing123" />
				</div>
				<div className="d-grid  ">
                        <button className="btn btn-danger" type="button" onClick={this.handleSubmit}>Login</button>
                    </div>
					</form>
                                
                
            </div>
        );
    }
}

const mapStateToProps = state => ({
    
    login: state.products.login,
    
  }); 
  
  const mapDispatchToProps = {setLogin};
export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);
