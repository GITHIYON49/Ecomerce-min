import { useContext } from "react";
import { Trash2 } from "lucide-react";
import { ProductContext } from "../../globalState/ProductCntx";
import { Button, Image } from "../index";
import "./style.scss";

function CartCard({ listCart }) {
  const { cart, setCart } = useContext(ProductContext);

  const { productName, price, image } = listCart;

  function Remove() {
    setCart(cart?.filter((cr) => cr.id !== listCart.id));
  }
  return (
    <>
      <div className="cart-card">
        <div className="cart-card__sub-one">
          <div className="cart-card__sub-one__pic">
            <Image pic={image} picname={productName} />
          </div>
          <div className="cart-card__sub-one__detail">
            <h4 className="cart-card__sub-one__detail__title">{productName}</h4>
            <span className="cart-card__sub-one__detail__price">{price}</span>
          </div>
        </div>
        <div className="cart-card__sub-two">
          <Button className="cart-card__sub-two__btn" />
          <Button className="cart-card__sub-two__btn" />
        </div>
        <div className="cart-card__sub-three">
          <Trash2 className="cart-card__sub-three__del-icon" onClick={Remove} />
        </div>
      </div>
    </>
  );
}

export default CartCard;
