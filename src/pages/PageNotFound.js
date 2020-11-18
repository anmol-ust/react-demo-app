import React, { Component } from 'react';

class PageNotFound extends Component {

    constructor(props){
        super(props)
    }

    render() {
        return (
            <div className="container mt-5">
                <h1>404</h1>
                <h3>Page Not Found</h3>
                <button type="button" className="btn btn-link" onClick={() => this.props.history.push('/')}>Go to homepage</button>
            </div>
        )
    }
}

export default PageNotFound;