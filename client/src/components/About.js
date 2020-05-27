import React, { Component } from 'react'
import styled from 'styled-components';

const AboutWrapper = styled.div`
.card{
    max-width: 100%;
}
.about-img{
    width:50%;
}
.dessert-description{
    font-size: 50px; !important
}
.title-shop{
    font-size: 70px;
}
`
export default class About extends Component {
    render() {
        return (
            <AboutWrapper>
                <React.Fragment>
                <div className="container">
                <div className="row align-items-center my-5">
                <div className="col-lg-6">
                    <img className="img-fluid about-img rounded mb-4 mb-lg-0" src="../../images/about.jpg" alt=""/>
                </div>
                <div className="col-lg-6">
                    <h1 className="title-shop font-weight-light">The Dessert Shop</h1>
                    <p>One stop shop for all your dessert needs.</p>
                    <p>Contact us: +91 95663020442</p>
                    <p>Available in New Delhi, Mumbai, Chennai and Bangalore</p>
                    {/* <a className="btn btn-primary" href="#">Call to Action!</a> */}
                </div>
                </div>
    
    
                <div className="card text-white bg-secondary my-5 py-4 text-center">
                <div className="card-body">
                    <p className="text-white m-0 font-italic dessert-description">Handcrafting desserts since 1950 all over India.</p>
                </div>
                </div>

    
                    <div className="row">
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Raj Kumar</h2>
                            <p className="card-text">"I have been a loyal customer of The Dessert Shop since 1980. Their products are remarkable and relished by me and my entire family. Thank you guys for such fresh desserts!"</p>
                        </div>
                        <div className="card-footer">
                         <p>-New Delhi</p>
                        </div>
                        </div>
                    </div>
                
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Shelly Arora</h2>
                            <p className="card-text">"Irreplacable desserts. Amazing food, amazing ambience."</p>
                        </div>
                        <div className="card-footer">
                            <p>-Mumbai</p>
                        </div>
                        </div>
                    </div>
                    
                    <div className="col-md-4 mb-5">
                        <div className="card h-100">
                        <div className="card-body">
                            <h2 className="card-title">Shrishtha Jaya Kumar</h2>
                            <p className="card-text">"Really good taste and good presentation of the food. Ordering from these guys since 1970's. Best shop!"</p>
                        </div>
                        <div className="card-footer">
                            <p>-Chennai</p>
                        </div>
                        </div>
                    </div>
                    

                    </div>
                

                </div>

                </React.Fragment>
            </AboutWrapper>
            
        )
    }
}
