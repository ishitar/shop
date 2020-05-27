import React from 'react'

export default function EmptyCart() {
    return (
        <div className="container mt-5">
            <div className="row">
                <div className="col-4 mx-auto">You have zero items in your cart as of now.</div>
                
            </div>
            <div className="row">
            <div className="col-2 mx-auto">
            <i className="fas fa-meh-o"></i>
            </div>
            
            </div>
        </div>
    )
}
