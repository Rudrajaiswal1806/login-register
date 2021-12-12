import React from 'react';
import { setProduct } from "../component/ProductSlice";
import {connect} from "react-redux";
import Header from "../component/Header"
import {doAjaxCall} from "../util";

class Product extends React.Component{

    constructor(props) {
        super(props);
        this.state = {
            isLoading: false,
            product: [],
            
        };
    }

    componentDidMount() {
        this.getProductList();
    }

    getProductList = () =>{
        doAjaxCall(`ccd1cece-bec0-4670-9bed-b63cbd3214db`, 'GET','')
            .then(response =>  {
                if(response.status === 200){
                    this.props.setProduct(response.data.product);
                    this.setState({isLoading: true});
                } else {
                    alert('error');
                }
            });
    }

    

    
    
    render(){
        

        return(
            <>
                <Header/>
                <div className=" container-fluid bg-light">
                    <div className="container">
                        <h1 className="text-center pt-5">Product</h1>
                        <div class="row row-cols-1 row-cols-md-3 g-4  py-4">
                            {this.props.product.map((products) =>                
                            <div class="col ">
                                <div class="card mb-0 shadow-sm">
                                    <img src={products.Image} class="card-img-top mb-0" alt="..."/>
                                    <div class="card-body mb-0 pb-2">
                                        <h5 class="card-title mb-1 text-muted">{products.Name}</h5>
                                        <p class="card-text text-muted mb-3">{products.Price}</p>
                                        
                                    </div>
                                </div>
                            </div>
                            )}                
                        </div>
                    </div>
                </div>
            </>
        );
    }
}



const mapStateToProps = state => ({
    
    product: state.products.product,
    
  }); 
  
  const mapDispatchToProps = {setProduct};
export default connect(mapStateToProps, mapDispatchToProps)(Product);
