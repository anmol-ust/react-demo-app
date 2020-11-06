// Make a indecision app for crud
// where c-create, r-read. u-update & d-delete

// Task for the day
// Make a crud app for person 
// person has two properties like personName & personAge

import React, { Component } from 'react';
import Button from './Button';
import DataTable from './DataTable';
import './IndecisionApp-1.css';

class IndecisionApp extends Component {

    constructor() {
        super();
        this.state = {
            title: "Indecision APP",
            subTitle: "CRUD App for products",
            items: [],
            current: "",
            isUpdate: false
        };
        this.onFormSubmit = this.onFormSubmit.bind(this);
        this.deleteHandler = this.deleteHandler.bind(this);
        this.editHandler = this.editHandler.bind(this);
        this.deleteAllHandler = this.deleteAllHandler.bind(this);
        this.textInput = React.createRef();
    }

    // form submit handler
    onFormSubmit(e) {
        e.preventDefault();
        if (!this.state.isUpdate) {
            // add product logic
            const data = e.target.elements.option.value;
            console.log(data);
            if (data) {
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        items: [...prevState.items, data]
                    }
                });
                e.target.elements.option.value = "";
            }
        } else {
            // update product logic
            const value = e.target.elements.option.value;
            if (value) {
                const index = this.state.items.findIndex(item => item === this.state.current);
                const data = this.state.items;
                data.splice(index, 1, value);
                this.setState((prevState) => {
                    return {
                        ...prevState,
                        isUpdate: false,
                        current: "",
                        items: [...data]
                    }
                });
                e.target.elements.option.value = "";
            }
        }

    }

    editHandler(index) {
        const currentProduct = this.state.items[index];
        this.setState((prevState) => {
            return {
                ...prevState,
                isUpdate: true,
                current: currentProduct
            }
        });
        this.textInput.current.value = currentProduct;
    }

    // delete a product
    deleteHandler(index) {
        if (window.confirm('Are you sure you want to delete?')) {
            const data = this.state.items;
            data.splice(index, 1);
            this.setState((prevState) => {
                return {
                    ...prevState,
                    items: [...data]
                }
            });
        }
    }

    // delete a products
    deleteAllHandler() {
        if (window.confirm('Are you sure you want to delete all products?')) {
            this.setState((prevState) => {
                return {
                    ...prevState,
                    items: []
                }
            });
        }
    }

    render() {
        const { title, subTitle, items } = this.state;
        return (
            <div className="container">
                <h2>{title}</h2>
                <h4>{subTitle && subTitle}</h4>
                <hr />
                <form onSubmit={this.onFormSubmit}>
                    <input type="text" name="option" ref={this.textInput} placeholder="Enter a product" />
                    <br />
                    <Button btnType="submit" btnName={this.state.isUpdate ? "Update" : "Add"} />&nbsp;
                    <Button btnType="button" btnName="Delete All" handlerEvent={this.deleteAllHandler} />
                </form>
                <hr/>
                {
                    items.length > 0
                        ? (<p>{items.length} products are available</p>)
                        : (<p>Products are not available.</p>)
                }
                {
                    items.length > 0 && <DataTable data={items} editHandler={this.editHandler} deleteHandler={this.deleteHandler} /> 
                    // (
                    //     <table className="table">
                    //         <thead>
                    //             <tr>
                    //                 <th>Sr. No.</th>
                    //                 <th>Product Name</th>
                    //                 <th>Action</th>
                    //             </tr>
                    //         </thead>
                    //         <tbody>
                    //             {
                    //                 items.length > 0 && items.map((value, i) => (
                    //                     <tr key={i}>
                    //                         <td>{i + 1}</td>
                    //                         <td>{value}</td>
                    //                         <td>
                    //                             <Button btnType="button" btnName="Edit" handlerEvent={() => this.editHandler(i)} />&nbsp;
                    //                             <Button btnType="button" btnName="Delete" handlerEvent={() => this.deleteHandler(i)} />
                    //                         </td>
                    //                     </tr>
                    //                 ))
                    //             }
                    //         </tbody>
                    //     </table>
                    // )
                }
            </div>
        )
    }

}

export default IndecisionApp;