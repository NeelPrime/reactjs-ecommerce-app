import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import prod1 from "../../../assets/products/jbl-headphone.png";

import "./CartItem.scss";
const CartItem = () => {
  return (
    <div className="cart-products">
      <div className="cart-product">
        <div className="img-container">
          <img src={prod1} alt="ProductImage" />
        </div>
        <div className="prod-details">
          <span className="name">JBL Tune 510BT On-Ear Bluetooth Headphones - Black</span>
          <MdClose className="close-btn" />
          <div className="quantity-buttons">
            <span>-</span>
            <span>1</span>
            <span>+</span>
          </div>
          <div className="text">
            <span>1</span>
            <span>x</span>
            <span className="highlight">$99.00</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
