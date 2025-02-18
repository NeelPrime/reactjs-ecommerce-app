import React from "react";
import cat1 from "../../../assets/category/cat-1.jpg";

import "./Category.scss";
import { Link } from "react-router-dom";

const Category = () => {
  return (
    <div className="shop-by-category">
      <div className="categories">
        <div className="category">
          <Link to={`/category/1`}>
            <img src={cat1} alt="cat1" />
          </Link>
        </div>
        <div className="category">
        <Link to={`/category/1`}>
            <img src={cat1} alt="cat1" />
          </Link>
        </div>
        <div className="category">
        <Link to={`/category/1`}>
            <img src={cat1} alt="cat1" />
          </Link>
        </div>
        <div className="category">
        <Link to={`/category/1`}>
            <img src={cat1} alt="cat1" />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Category;
