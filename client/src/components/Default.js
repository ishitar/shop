import React, { Component } from 'react';

class Default extends Component {
    render() {
        console.log(this.props);
        return (
            <div className="container">
                <div className="row">
                    <div className="col-10 mx-auto text-center pt-5">
                        <h1>404</h1>
                        <h2>Error</h2>
                        <h3>Page Not Found</h3>
                        <h3>The request URL <span className="text-danger">{this.props.location.pathname} </span>was not found</h3>
                    </div>
                </div>
            </div>
        );
    }
}

export default Default;