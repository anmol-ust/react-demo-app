import React, { Component } from 'react';

class Registers extends Component {

    constructor() {
        super();
        this.state = {
            isDisabled: true
        }
        this.handleInputChange = this.handleInputChange.bind(this);
    }

    validateEmail(email) {
        const emailRegex = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const result = emailRegex.test(email);
        if (result === false) {
            this.setState({
                userEmailError: true
            });
        } else {
            this.setState({
                userEmailError: false,
                userEmail: email
            });
        }
    }

    handleInputChange(e) {
        const target = e.target;
        const value = e.target.type === 'checkbox' ? target.checked : target.value;
        const name = target.name;
        this.setState({
            [name]: value
        });
        setTimeout(() => {
            console.log(this.state);
        }, 500);

        // first name validation
        // if (e.target.name === 'firstName') {
        //     if (e.target.value === '' || e.target.value === null) {
        //         this.setState({
        //             firstNameError: true
        //         });
        //     } else {
        //         this.setState({
        //             firstNameError: false,
        //             firstName: e.target.value
        //         });
        //     }
        // }
        // last name validation
        // if(e.target.name === 'lastName'){
        //     if(e.target.value === '' || e.target.value === null){
        //         this.setState({
        //             lastNameError:true
        //         });
        //     }else{
        //         this.setState({
        //             lastNameError:false,
        //             lastName:e.target.value
        //         });
        //     }
        // }
        // email validation
        // if(e.target.name === 'userEmail'){
        //     this.validateEmail(e.target.value);
        // }
        // password validation
        // if(e.target.name === 'userPass'){
        //     if(e.target.value === '' || e.target.value === null){
        //         this.setState({
        //             userPassError:true
        //         });
        //     }else{
        //         this.setState({
        //             userPassError:false,
        //             userPass:e.target.value
        //         });
        //     }
        // }

        // if(this.state.firstNameError === false && this.state.lastNameError === false && this.state.userEmailError === false && this.state.userPassError === false){
        //     this.setState({
        //         isDisabled:false
        //     })
        // }
    }

    render() {
        return (
            <div className="row mt-5">
                <div className="container col-lg-5 border">
                    <h3>Register</h3>
                    <form>
                        <div className="form-group">
                            <label>First Name:</label>
                            <input type="text" className="form-control" value={this.state.firstName} onChange={(e) => this.handleInputChange(e)} name="firstName" placeholder="Enter First Name" />
                            <div>
                                {this.state.firstNameError ? 'First Name Required' : ''}
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Last Name:</label>
                            <input type="text" className="form-control" value={this.state.lastName} onChange={(e) => this.handleInputChange(e)} name="lastName" placeholder="Enter Last Name" />
                            <div>
                                {this.state.lastNameError ? 'Last Name Required' : ''}
                            </div>
                        </div>
                        <div className="form-group">
                            <label>gender:</label>
                            {/* <input type="text" className="form-control" value={this.state.lastName} onChange={(e) => this.handleInputChange(e)} name="lastName" placeholder="Enter Last Name" /> */}
                            <div>
                                <input type="radio" onChange={(e) => this.handleInputChange(e)} name="gender" value="male" />Male
                                <input type="radio" onChange={(e) => this.handleInputChange(e)} name="gender" value="female" />Female
                            </div>
                        </div>
                        <div className="form-group">
                            <label>City:</label>
                            <select name="city" onChange={(e) => this.handleInputChange(e)} >
                                <option value="">Select City</option>
                                <option value="nagpur">Nagpur</option>
                                <option value="pune">Pune</option>
                            </select>
                        </div>
                        <div className="form-group">
                            <label>Address:</label>
                           <textarea name="address" onChange={(e) => this.handleInputChange(e)} />
                        </div>
                        <div className="form-group">
                            <label>Email:</label>
                            <input type="email" className="form-control" value={this.state.userEmail} onChange={(e) => this.handleInputChange(e)} name="userEmail" placeholder="Enter Email Id" />
                            <div>
                                {this.state.userEmailError ? 'Enter a valid email' : ''}
                            </div>
                        </div>
                        <div className="form-group">
                            <label>Password:</label>
                            <input type="password" className="form-control" value={this.state.userPass} onChange={(e) => this.handleInputChange(e)} name="userPass" placeholder="Enter Password" />
                            <div>
                                {this.state.userPassError ? 'Password is Required' : ''}
                            </div>
                        </div>
                        <div className="form-group">
                            <label>
                                <input type="checkbox" checked={this.state.userAgree} onChange={(e) => this.handleInputChange(e)} name="userAgree" /> I agree the terms and conditions.
                            </label>

                        </div>
                        <div className="form-group">
                            <button type="submit" className="btn btn-primary btn-sm" disabled={this.state.isDisabled}>Submit</button>
                        </div>
                    </form>
                </div>
            </div>
        )
    }

}

export default Registers;