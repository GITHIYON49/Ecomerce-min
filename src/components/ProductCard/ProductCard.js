import React, { useContext } from "react";
import { ProductContext } from "../../globalState/ProductCntx";
import { Strings } from "../../data/strings";
import { Button, Image } from "../index";
import "./style.scss";

const ProductCard = ({ listItems }) => {
  const { add, remove } = Strings;
  const { cart, setCart } = useContext(ProductContext);

  const { productName, price, image } = listItems;

  function handleAddCart() {
    setCart([...cart, listItems]);
  }

  function handleRemoveCart() {
    setCart(cart.filter((cr) => cr?.id !== listItems?.id));
  }
  return (
    <>
      <div className="card-container">
        <div className="card-container__pic">
          <Image pic={image} picname={productName} />
        </div>
        <div className="card-container__detail">
          <h5 className="card-container__detail__title">{productName}</h5>
          <p className="card-container__detail__price">₹{price}</p>
          {cart.includes(listItems) ? (
            <Button
              className="card-container__detail__btn"
              btnType={remove}
              onClick={() => handleRemoveCart()}
            />
          ) : (
            <Button
              className="card-container__detail__btn"
              btnType={add}
              onClick={() => handleAddCart()}
            />
          )}
        </div>
      </div>
    </>
  );
};

export default ProductCard;
