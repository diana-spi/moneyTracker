import "./CategoryStatisticsCard.scss";
import { round } from "lodash";

function CategoryStatisticsCard({ category, sum, fillPercantage, transactionColor }) {
  return (
    <div className="category-statistics-card">
      <div
        className="category-statistics-card__fill"
        style={{ width: `calc(${fillPercantage}% - 20px)`, backgroundColor: transactionColor }}
      ></div>
      <div className="category-statistics-card__content">
        <div className="category-statistics-card__category">{category}</div>
        <div className="category-statistics-card__sum">${round(sum, 2).toFixed(2)}</div>
      </div>
    </div>
  );
}

export default CategoryStatisticsCard;
