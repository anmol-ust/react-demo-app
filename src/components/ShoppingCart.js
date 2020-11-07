import React, { Component } from 'react';

class ShoppingCart extends Component {

    constructor() {
        super();
        this.state = {
            products: [
                { id: 1, name: 'eraser', price: 5, quantity: 1 },
                { id: 2, name: 'pen', price: 10, quantity: 1 }
            ],
            cart: [],
            totalAmount: 0
        };
        this.addToCartHandler = this.addToCartHandler.bind(this);
        this.addQuantityHandler = this.addQuantityHandler.bind(this);
        this.deleteAllCartProducts = this.deleteAllCartProducts.bind(this);
        this.deleteCartProduct = this.deleteCartProduct.bind(this);
    }

    // add product to cart
    addToCartHandler(p) {
        const { id, name, price, quantity } = p; // destructure
        const item = this.state.cart.find(v => v.id === id);
        if (item) {
            window.alert("Product already exists on the cart.");
        } else {
            const product = {
                id, name, price, quantity, amount: price * quantity
            }
            this.setState(prevState => {
                return {
                    ...prevState,
                    cart: [...prevState.cart, product]
                }
            });
            setTimeout(() => {
                const amount = this.state.cart.map(v => v.amount).reduce((t, c) => t += c);
                this.setState({ totalAmount: amount });
            }, 500);
        }
    }

    // add quantity handler
    addQuantityHandler(p, e) {
        const index = this.state.cart.findIndex(v => v.id === p.id);
        const data = this.state.cart;
        const { id, name, price, quantity, amount } = p;
        const product = {
            id, name, price, quantity: e.target.value, amount: price * e.target.value
        }
        data.splice(index, 1, product);
        this.setState(prevState => {
            return {
                ...prevState,
                cart: [...data]
            }
        });
        setTimeout(() => {
            const amount = this.state.cart.map(v => v.amount).reduce((t, c) => t += c);
            this.setState({ totalAmount: amount });
        }, 500);
    }

    // delete all products
    deleteAllCartProducts() {
        if (window.confirm("Are you sure to delete all products?")) {
            this.setState(prevState => {
                return {
                    ...prevState,
                    cart: []
                }
            })
        }
    }

    // delete product
    deleteCartProduct(p) {
        // const msg = "Are you sure to delete "+p.name+"?";
        const msg = `Are you sure to delete ${p.name}?`; // template literal syntax
        if (window.confirm(msg)) {
            const data = this.state.cart;
            const index = this.state.cart.findIndex(v => v.id === p.id);
            data.splice(index, 1);
            this.setState(prevState => {
                return {
                    ...prevState,
                    cart: [...data]
                }
            });
            setTimeout(() => {
                const amount = this.state.cart.map(v => v.amount).reduce((t, c) => t += c);
                this.setState({ totalAmount: amount });
            }, 500);
        }
    }

    render() {
        const { products, cart, totalAmount } = this.state;
        return (
            <div className="container mt-5">
                <h2>Product List</h2>
                {
                    products.length > 0 && (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Name</th>
                                    <th>Price</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    products.map((p, i) => {
                                        return (
                                            <tr key={p.id}>
                                                <td>{i + 1}</td>
                                                <td>{p.name}</td>
                                                <td>{p.price}</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-sm" onClick={() => this.addToCartHandler(p)}>Add to Cart</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }

                            </tbody>
                        </table>
                    )
                }
                <hr/>
                <div className="d-flex justify-content-between align-items-center">
                    <p className="fs-25"><strong>Cart:</strong> {cart.length === 0 && 'Please add to cart one product.'}</p>
                    <div>
                        {
                            cart.length > 0 && (<button type="button" className="btn btn-sm btn-danger" onClick={this.deleteAllCartProducts}>Delete All</button>)
                        }
                    </div>
                </div>
                {
                    cart.length > 0 && (
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Sr. No.</th>
                                    <th>Name</th>
                                    <th>Quantity</th>
                                    <th>Amount</th>
                                    <th>Action</th>
                                </tr>
                            </thead>
                            <tbody>
                                {
                                    cart.map((p, i) => {
                                        return (
                                            <tr key={p.id}>
                                                <td>{i + 1}</td>
                                                <td>{p.name}</td>
                                                <td>
                                                    <input type="number" className="form-control w-50" value={p.quantity} onChange={(event) => this.addQuantityHandler(p, event)} />
                                                </td>
                                                <td>{p.amount}</td>
                                                <td>
                                                    <button type="button" className="btn btn-primary btn-sm" onClick={() => this.deleteCartProduct(p)}>Delete</button>
                                                </td>
                                            </tr>
                                        )
                                    })
                                }
                            </tbody>
                        </table>
                    )
                }
                <hr />
                {
                    cart.length > 0 && (
                        <div className="d-flex justify-content-between">
                            <div>
                                <strong>Total Products:</strong> {cart.length}
                            </div>
                            <div>
                                <strong>Total Amount:</strong> {totalAmount}
                            </div>
                        </div>
                    )
                }
            </div>
        )
    }

}

export default ShoppingCart;