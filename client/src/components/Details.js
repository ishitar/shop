import React, { Component } from 'react';
import {ProductConsumer} from '../context';
import {Link} from 'react-router-dom'; 
import {ButtonContainer} from './Button';
//import styled from 'styled-components';

class Details extends Component {
    render() {
        return (
            
            <ProductConsumer>
                {
                    value => {
                      const { id, title, img, info,price, inCart, company } = value.detailProduct;
                        return (
            <div className="container py-5">            
             <div className="row">
             <div className="col-10 mx-auto text-center text-slanted text-blue my-5">
                <h1>{title}</h1>
              </div>
              <div className="row">
               <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                   <img src={img} alt="product" className="img-fluid" />   
                </div>
                 
                <div className="col-10 mx-auto col-md-6 my-3 text-capitalize">
                 <h2>model: {title}</h2>
                 <h4 className="text-title text-uppercase text-muted mt-3 mb-2">
                   made by: <span className="text-uppercase">
                     {company}
                   </span>
                 </h4>
                 <h4 className="text-blue">
                   <strong>
                     price: <span>$</span>
                     {price}
                   </strong>
                 </h4>
                 <p  className="text-capitalize font-weigh-bold mt-3 mb-0">
                  some info about product:
                 </ p>
                 <p className="text-muted lead">
                   {info}
                 </p>
                 
              
                   {/* buttons */}
                 <div>

                  <Link to="/">
                    <ButtonContainer>
                      Back to Home Page
                    </ButtonContainer>
                  </Link>
                  <ButtonContainer 
                  like
                  disabled={inCart ? true : false}
                  onClick={()=>{
                    value.addToCart(id);
                    value.openModal(id);                    
                  }}
                  >
                    {inCart ? <h2 className="liked-button"><i className="fas fa-cart-plus"/> </h2>: <h2 className="not-liked-button"><i className="fas fa-cart-plus"/></h2>}
                  </ButtonContainer>                  
                 </div>
               </div>
             </div>
            </div>
          </div>
                        )
                    }
                }
            
            </ProductConsumer>
            
        );
    }
}

// const DetailsWrapper = styled.div`
// .liked-button{
//     color:var(--mainBlue);
// }
// .not-liked-button{
//     color:var(--mainRed);
// }
// `
export default Details;