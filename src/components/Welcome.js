import { Component } from 'react';

class Welcome extends Component {

    constructor(props) {
        super(props);
        this.state = {
            count: 0
        }
        this.incrementHandler = this.incrementHandler.bind(this); // refer this approach
    }

    incrementHandler() {
        this.setState((prevState) => {
            return {
                count: prevState.count + 1
            }
        });
    }

    render() {
        return (
            <div>
                <button type="button" onClick={this.incrementHandler}>Count {this.state.count}</button>
                {/* <button type="button" onClick={() => this.incrementHandler()}>Count {this.state.count}</button> */}
            </div>
        )
    }
}

export default Welcome;