import { useState } from "react";
import { json } from "@remix-run/node";
import { useLoaderData } from "@remix-run/react";
import { BiShoppingBag } from "react-icons/bi";
import _ from "lodash";
import { useDispatch } from "react-redux";
import { createClient } from "~/utils/client";
import { formatPrice } from "~/utils/prices";

export const loader = async ({ params }) => {
  const client = createClient();
  const { product } = await client.products.retrieve(params.productId);
  return json(product);
};

export default function ProductRoute() {
  const product = useLoaderData();
  const [variant, setVariant] = useState(product.variants[0]);
  const [image, setImage] = useState(product.images[0]);
  const [quantity, setQuantity] = useState(1);

  const handleVariantChange = (index) => {
    setVariant(product.variants[index]);
    setQuantity(1);
  };

  const handleQuantityChange = (action) => {
    switch (action) {
      case "inc":
        if (quantity < variant.inventory_quantity) setQuantity(quantity + 1);
        break;

      case "dec":
        if (quantity > 1) setQuantity(quantity - 1);
        break;

      default:
        break;
    }
  };

  const handleImageChange = (id) => {
    setImage(product.images.find((img) => img.id === id));
  };

  const [tooltip, setTooltip] = useState("Click to add");

  const dispatch = useDispatch();

  const handleAddToCart = () => {
    // create cart array
    let cart = [];
    if (typeof window !== "undefined") {
      // if cart is in local storage GET it
      if (localStorage.getItem("cart")) {
        cart = JSON.parse(localStorage.getItem("cart"));
      }
      // push new service to cart
      cart.push({
        ...product,
        count: 1,
      });
      // remove duplicates
      let unique = _.uniqWith(cart, _.isEqual);
      // save to local storage
      // console.log('unique', unique)
      localStorage.setItem("cart", JSON.stringify(unique));
      // show tooltip
      setTooltip("Added");
      //add to redux store
      dispatch({
        type: "ADD_TO_CART",
        payload: unique,
      });

      console.log(cart);
    }
  };

  return (
    <>
      <div className="w-full">
        <div
          className="grid items-center md:grid-cols-2 media"
          style={{
            display: "flex",
            padding: "10px",
            justifyContent: "flex-start",
            alignItems: "start",
            flexWrap: "wrap",
          }}
        >
          <div
            style={{
              display: "flex",
              padding: "20px",
              flexDirection: "column",
              justifyContent: "flex-start",
              alignItems: "center",
              flex: "1",
            }}
          >
            <img
              className="rounded-lg"
              style={{ width: "40vw" }}
              src={image.url}
              alt={product.title}
            />
            <div className="flex justify-center p-4 space-x-2">
              {product.images.map((imageItem) => (
                <img
                  className={`w-16 border-2 rounded-lg ${
                    imageItem.id === image.id ? "border-teal-400" : null
                  }`}
                  key={imageItem.id}
                  src={imageItem.url}
                  alt={product.title}
                  onClick={() => handleImageChange(imageItem.id)}
                />
              ))}
            </div>
          </div>
          <div
            className="flex flex-col space-y-8 pr-2 py-10"
            style={{ justifyContent: "flex-start" }}
          >
            <h1>{product.title} </h1>
            <p className="font-semibold text-teal-600">
              {formatPrice(variant)}
            </p>
            <div>
              <p className="font-semibold">Select Size</p>
              <div className="">
                {product.variants.map((variantItem, index) => (
                  <button
                    key={variantItem.id}
                    className={`px-3 py-3 mt-2 rounded-xl mr-2 w-auto  text-sm hover:brightness-90 ${
                      variantItem.id === variant.id
                        ? "bg-gray-700 text-gray-100"
                        : "bg-gray-300 text-gray-700"
                    }`}
                    onClick={() => handleVariantChange(index)}
                  >
                    {variantItem.title}
                  </button>
                ))}
              </div>
            </div>
            <div>
              <p className="font-semibold">Select Quantity</p>
              <div className="flex items-center px-4 mt-2 space-x-4">
                <button
                  className="px-4 py-2 hover:shadow-sm hover:text-teal-500 hover:font-bold"
                  onClick={() => handleQuantityChange("dec")}
                >
                  -
                </button>
                <span>{quantity}</span>
                <button
                  className="px-4 py-2 hover:shadow-sm hover:text-teal-500 hover:font-bold"
                  onClick={() => handleQuantityChange("inc")}
                >
                  +
                </button>
              </div>
            </div>
            <div>
              <button className="inline-flex items-center px-4 py-2 font-semibold text-gray-200 bg-gray-700 rounded hover:text-white hover:bg-gray-900">
                <BiShoppingBag className="mr-2 text-lg" />{" "}
                <button onClick={handleAddToCart}>Add to Cart</button>
              </button>
            </div>
            <div>
              <p className="font-semibold">Product Description</p>
              <hr className="w-2/3 mt-2 border-t-2 border-gray-300" />
              <p className="mt-4 text-gray-700">{product.description}</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
