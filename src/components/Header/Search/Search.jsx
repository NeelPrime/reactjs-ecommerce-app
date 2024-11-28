import { MdClose } from "react-icons/md";
import prod from "../../../assets/products/earbuds-prod-1.webp";

import "./Search.scss";
const Search = ({ setShowSearch }) => {
  return (
    <div className="search-modal">
      <div className="form-field">
        <input type="text" autoFocus placeholder="Search for products" />
        <MdClose className="close-btn" onClick={() => setShowSearch(false)} />
      </div>
      <div className="search-result-content">
        <div className="search-results">
          {/* search result item starts */}
          <div className="search-result-item">
            <div className="img-container">
              <img src={prod} alt="ProductImage" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="desc">
                product desc- Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Atque veniam{" "}
              </span>
            </div>
          </div>

          <div className="search-result-item">
            <div className="img-container">
              <img src={prod} alt="ProductImage" />
            </div>
            <div className="prod-details">
              <span className="name">Product Name</span>
              <span className="desc">
                product desc- Lorem ipsum dolor sit amet, consectetur
                adipisicing elit. Atque veniam{" "}
              </span>
            </div>
          </div>
          {/* search result item ends */}
        </div>
      </div>
    </div>
  );
};

export default Search;
