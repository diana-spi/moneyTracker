import React from "react";
import "./CategoryStatisticsCard.scss";
import { round } from "lodash";

function CategoryStatisticsCard({ category, sum }) {
  return (
    <div className="category-statistics-card">
      <div className="category-statistics-card__category">{category}</div>
      <div className="category-statistics-card__sum">${round(sum, 2)}</div>
    </div>
  );
}

export default CategoryStatisticsCard;
