/* eslint-disable array-callback-return */
import React from "react";
import ModalImage from "react-modal-image";
import { useDispatch } from "react-redux";
import { CloseOutlined } from "@ant-design/icons";

const ProductCardInCheckout = ({ s }) => {
  // const [update,setupdate]=React.useState([{}])
  const handleQuantityChange = (e, id) => {
    let count = e.target.value < 1 ? 1 : e.target.value;

    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }

      cart.map((service, i) => {
        if (service.id === id) {
          cart[i].count = count;
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  const handleRemove = () => {
    let cart = [];

    if (typeof window !== "undefined") {
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // [1,2,3,4,5]
      cart.map((service, i) => {
        if (service._id === s._id) {
          cart.splice(i, 1);
        }
      });

      localStorage.setItem("cart", JSON.stringify(cart));
      dispatch({
        type: "ADD_TO_CART",
        payload: cart,
      });
    }
  };

  let dispatch = useDispatch();

  return (
    <>
      <tbody>
        <tr>
          <td>
            <div style={{ width: "100px", height: "auto" }}>
              {s.images.length ? (
                <img
                  src={s.images[0].url}
                  style={{ borderRadius: "20px", padding: "15px" }}
                />
              ) : (
                <ModalImage
                  small="https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-back.png"
                  large="https://medusa-public-images.s3.eu-west-1.amazonaws.com/sweatshirt-vintage-back.png"
                />
              )}
            </div>
          </td>
          <td>&nbsp;{s.title}</td>
          <td
            style={{
              color: "#C341E3",
              fontWeight: "bold",
              width: "auto",
              textAlign: "center",
            }}
          >
            ???.{s.variants[0]["prices"][0]["amount"] / 100}
          </td>
          <td>{s.brands}</td>
          <td className="text-center">
            <input
              type="number"
              className="form-control"
              value={s.count}
              onChange={(e) => handleQuantityChange(e, s.id)}
              style={{
                height: "35px",
                paddingLeft: "10px",
                borderRadius: "5px",
                outline: "none",
              }}
            />
          </td>
          <td className="text-center">
            <CloseOutlined
              style={{
                background: "#C341E3",
                padding: "10px",
                color: "#fff",
                borderRadius: "5px",
              }}
              onClick={handleRemove}
              className="pointer"
            />
          </td>
        </tr>
      </tbody>
    </>
  );
};

export default ProductCardInCheckout;
