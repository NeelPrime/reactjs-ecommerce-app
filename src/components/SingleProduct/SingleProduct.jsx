import RelatedProducts from "./RelatedProducts/RelatedProducts";
import {
  FaCartPlus,
  FaFacebook,
  FaInstagram,
  FaPinterest,
  FaXTwitter,
} from "react-icons/fa6";
import prod from "../../assets/products/earbuds-prod-1.webp";
import "./SingleProduct.scss";

const SingleProduct = () => {
  return (
    <div className="single-product-main-content">
      <div className="layout">
        <div className="single-product-page">
          <div className="left">
            <img src={prod} alt="ProductImage" />
          </div>
          <div className="right">
            <span className="name">Product NAme</span>
            <span className="price">$999.00</span>
            <span className="desc">
              product desc Lorem ipsum dolor sit amet consectetur adipisicing
              elit. Quod et in odio reiciendis distinctio architecto officia
              doloremque consectetur eum temporibus nulla maiores numquam vero
              ex, beatae ipsam voluptatibus voluptatem id!
            </span>
            <div className="cart-buttons">
              <div className="quantity-buttons">
                <span>-</span>
                <span>3</span>
                <span>+</span>
              </div>
              <button className="add-to-cart-button">
                <FaCartPlus />
                ADD TO CART
              </button>
            </div>
            <span className="divider" />

            <div className="info-item">
              <span className="text-bold">
                Category:
                <span>Headphones</span>
              </span>
              <span className="text-bold">
                Share:
                <span className="social-icons">
                  <FaFacebook size={16} />
                  <FaXTwitter size={16} />
                  <FaInstagram size={16} />
                  <FaPinterest size={16} />
                </span>
              </span>
            </div>
          </div>
        </div>
        <RelatedProducts />
      </div>
    </div>
  );
};

export default SingleProduct;
