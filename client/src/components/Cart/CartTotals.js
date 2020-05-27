import React from 'react'
import {Link} from 'react-router-dom';
import StripeCheckout from 'react-stripe-checkout';

export default function CartTotals({value}) {
    const{cartSubTotal, cartTax, cartTotal, clearCart} = value;

    const makePayment = token => {
         const body = {token,cartTotal}
         const headers = { "Content-Type": "application/json"}

         return fetch("https://stormy-island-65192.herokuapp.com/payment",{
             method:"POST",
             headers,
             body:JSON.stringify(body)
         }).then(response => 
            {console.log("Response",response)
         const {status} = response
         console.lg("Status",status)
            }
         )
         .catch(err=>console.log("Error",err))
    }
    return (
        <React.Fragment>
            <div className="container">
                <div className="row">
                    <div className="col-12 mt-2 ml-sm-5 ml-md-auto col-sm-8 text-capitalize">
                        <Link to="/">
                            <button className="btn btn-outline-danger text-uppercase mb-3 px-5" type="button" onClick={()=>clearCart()}>Clear Cart</button>
                        </Link>
                        <h5><span className="text-title">Subtotal: </span>$ {cartSubTotal}</h5>
                        <h5><span className="text-title">Tax: </span>$ {cartTax}</h5>
                        <h5><span className="text-title">Cart Total: </span>$ {cartTotal}</h5>
                        <StripeCheckout stripeKey="pk_test_9pLwA8w7FrGz1vsOIHCzcqvT00TumsZL9X" token={makePayment} name="Just 1 step away" amount={cartTotal*100} shippingAddress billingAddress/>
                    </div>
                </div>
            </div>
        </React.Fragment>
    )
}
