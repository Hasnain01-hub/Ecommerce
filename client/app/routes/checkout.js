/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInCheckout from "~/components/ProductCardInCheckout";

const checkout = ({ history }) => {
    const { cart, user } = useSelector((state) => ({ ...state }));
    const dispatch = useDispatch();

    const getTotal = () => {
        return cart.reduce((currentValue, nextValue) => {
            return currentValue + nextValue.count * nextValue.price;
        }, 0);
    };


    const showCartItems = () => (
        <table className="table table-bordered">
            <thead className="thead-light">
                <tr>
                    <th scope="col">Image</th>
                    <th scope="col">Title</th>
                    <th scope="col">Average Costing</th>
                    <th scope="col">Brand</th>
                    <th scope="col">Count</th>
                    <th scope="col">Remove</th>
                </tr>
            </thead>

            {cart.map((s) => (
                <ProductCardInCheckout key={s._id} s={s} />
            ))}
        </table>
    );

    return (
        <div className="container-fluid pt-2"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}>
            <div className="row">
                <div className="col-md-8">
                    <h4>Cart / {cart.length} Products</h4>

                    {!cart.length ? (
                        <p>
                            No services in cart. <Link to="/allservices">Continue Shopping.</Link>
                        </p>
                    ) : (
                        showCartItems()
                    )}
                </div>
                <div className="col-md-4">
                    <h4>Summary</h4>
                    <hr />
                    
                    Total: <b>Rs.{getTotal()}</b>
                    <hr />
                    {user ? (
                        <>
                            {/* <button
                                onClick={saveOrderToDb}
                                className="btn btn-sm btn-primary mt-2"
                                disabled={!cart.length}
                            >
                                Proceed to Checkout
                            </button> */}
                            <br />
                            <button
                                className="btn btn-sm btn-primary mt-2"
                                disabled={!cart.length}
                            >
                                Pay Cash on Service Completion
                            </button>
                        </>
                    ) : (
                        <button className="btn btn-sm btn-primary mt-2">
                            <Link
                                to={{
                                    pathname: "/login",
                                    state: { from: "cart" },
                                }}
                            >
                              Checkout
                            </Link>
                        </button>
                    )}
                </div>
            </div>
        </div>
    );
};

export default checkout;
