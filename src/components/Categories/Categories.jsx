import React from "react";
import { Link } from "react-router-dom";

import categoriesData from "../../Data/CategoriesData";
import "./Categories.css";

function Categories() {
  return (
    <div className="categories">
      <div className="container categories__container">
        <div className="categories__left">
          <h1>Categories</h1>
          <p>
            Lorem ipsum dolor, sit amet consectetur adipisicing elit. Impedit earum
            dolores reiciendis, minus ipsa ullam quasi mollitia commodi perferendis.
            Nostrum officia exercitationem ullam sapiente autem, cumque obcaecati
            adipisci possimus tenetur.
          </p>
          <Link to="/" className="btn">
            Learn More
          </Link>
        </div>
        <div className="categories__right">
          {categoriesData.map((category, i) => {
            return (
              <div key={i} className="category">
                <span className="category__icon">{category.icon}</span>
                <h5>{category.title}</h5>
                <p>{category.description}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

export default Categories;
