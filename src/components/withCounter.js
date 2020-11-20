import React, { Component } from 'react';

const withCounter = (WrappedComponent, incrementValue) => {
    class WithCounter extends Component {
        constructor() {
            super();
            this.state = {
                count: 0
            }
        }

        incrementCount = () => {
            this.setState(prevState => {
                return {
                    count: prevState.count + incrementValue
                }
            })
        }

        render(){
            return (<WrappedComponent count={this.state.count} incrementCount={this.incrementCount} {...this.props} />)
        }
    }
    return WithCounter;
}

export default withCounter;