import React from "react";
import "./CategoryStatisticsCard.scss";

function CategoryStatisticsCard({ category, sum }) {
  return (
    <div className="category-statistics-card">
      <div className="category-statistics-card__category">{category}</div>
      <div className="category-statistics-card__sum">${sum}</div>
    </div>
  );
}

export default CategoryStatisticsCard;
