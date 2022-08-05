import "./CategoryStatisticsCard.scss";
import { round } from "lodash";
import { useEffect, useState } from "react";

function CategoryStatisticsCard({ category, sum, fillPercantage, transactionColor }) {
  const [animatedFill, setAnimatedFill] = useState(0);

  useEffect(() => {
    setAnimatedFill(0);
    let currentValue = 0;
    const fillInterval = setInterval(() => {
      currentValue += 4;
      setAnimatedFill(currentValue);
      if (currentValue >= fillPercantage) {
        clearInterval(fillInterval);
      }
    }, 1);
  }, [category]);

  return (
    <div className="category-statistics-card">
      <div
        className="category-statistics-card__fill"
        style={{ width: `calc(${animatedFill}% - 20px)`, backgroundColor: transactionColor }}
      ></div>
      <div className="category-statistics-card__content">
        <div className="category-statistics-card__category">{category}</div>
        <div className="category-statistics-card__sum">${round(sum, 2).toFixed(2)}</div>
      </div>
    </div>
  );
}

export default CategoryStatisticsCard;
