import "./Product.scss";
import prod from "../../../assets/products/earbuds-prod-1.webp";
import { useNavigate } from "react-router-dom";
const Product = () => {
  const navigate = useNavigate();
  return (
    <div className="product-card" onClick={() => navigate("/product/1")}>
      <div className="thumbnail">
        <img src={prod} alt="ProductImage" />
      </div>
      <div className="product-details">
        <span className="name">Product Name</span>
        <span className="price">$999.00</span>
      </div>
    </div>
  );
};

export default Product;
