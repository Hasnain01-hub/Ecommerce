/* eslint-disable react-hooks/rules-of-hooks */
/* eslint-disable no-unused-vars */
import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import ProductCardInCheckout from "~/components/ProductCardInCheckout";
import { formatPrice } from "~/utils/prices";
const checkout = ({ history }) => {
  const { cart, user } = useSelector((state) => ({ ...state }));
  const dispatch = useDispatch();

  const getTotal = () => {
    // return cart.reduce((currentValue, nextValue) => {
    //     return currentValue + nextValue.count * nextValue.price;
    // }, 0);
    var sum = 0;
    cart.map((item) => {
      var values = item.variants[0]["prices"][0]["amount"] * item.count;
      sum += values;
      // console.log(item.variants[0]["prices"][0]["amount"]);
    });
    return sum / 100;
  };
  const placeorder = () => {
    if (confirm("Are you sure you want to place order?")) {
      
      localStorage.setItem("cart", JSON.stringify([]));
      dispatch({
        type: "REMOVE_FROM_CART",
        payload: [],
      });
    }
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
          <th scope="col"></th>
        </tr>
      </thead>

      {cart.map((s) => (
        <ProductCardInCheckout key={s._id} s={s} />
      ))}
    </table>
  );

  return (
    <>
    {console.log(cart[0])}
      <div
        className="container-fluid pt-2"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
      >
        <div className="row">
          <div className="col-md-8">
            <h4>Cart / {cart.length} Products</h4>

            {!cart.length ? (
              <p>
                No services in cart.{" "}
                <Link to="/allservices">Continue Shopping.</Link>
              </p>
            ) : (
              showCartItems()
            )}
          </div>
          <div className="col-md-4">
            <h4>Summary</h4>
            <hr />
            Total: <b>€.{getTotal()}</b>
            <hr />
          </div>
        </div>
        {cart.length>0?<button
          style={{
            border: "1px solid black",
            padding: "10px",
            borderRadius: "15px",
            margin: "10px 0",
          }}
          onClick={placeorder}
        >
          Place Order
        </button>:<></>}
      </div>
    </>
  );
};

export default checkout;
