import { Component } from 'react';

class LoginUser extends Component {

    constructor() {
        super();
        this.state = {
            isLogin: true
        }
    }

    render() {

        // if(this.state.isLogin){
        //     return (<div>
        //         <h3>Login Status</h3>
        //         <p>Hello Admin</p>
        //     </div>);
        // }else{
        //     return (<div>
        //         <h3>Login Status</h3>
        //         <p>Hello Guest</p>
        //     </div>);
        // }
        // let template;
        // if (!this.state.isLogin) {
        //     template = (<div>
        //         <h3>Login Status</h3>
        //         <p>Hello Admin</p>
        //     </div>);
        // }else{
        //     template = (<div>
        //         <h3>Login Status</h3>
        //         <p>Hello Guest</p>
        //     </div>);
        // }

        // return template;
        // return !this.state.isLogin
        //     ? (<div><h3>Login Status</h3><p>Hello Admin</p></div>)
        //     : (<div><h3>Login Status</h3><p>Hello Guest</p></div>)

        return !this.state.isLogin && (<div><h3>Login Status</h3><p>Hello Admin</p></div>)

    }

}

export default LoginUser;