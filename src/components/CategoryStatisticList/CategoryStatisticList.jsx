import "./CategoryStatisticsList.scss";

function CategoryStatisticsList(category, sum) {
  return (
    <div className="category-statistics-list">
      <div className="category-statistics-list__row">
        <div className="category-statistics-list__category">{category}</div>
        <div className="category-statistics-list__sum">{sum}</div>
      </div>
    </div>
  );
}

export default CategoryStatisticsList;
