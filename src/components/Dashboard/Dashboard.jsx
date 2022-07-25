import "./Dashboard.scss";
import CategoryStatistics from "../CategoryStatistics/CategoryStatistics";
import IncomeOutcomeStatistics from "../IncomeOutcomeStatistics/IncomeOutcomeStatistics";

function Dashboard({ selectedFilter }) {
  return (
    <div className="dashboard">
      <CategoryStatistics selectedFilter={selectedFilter} />
      <IncomeOutcomeStatistics selectedFilter={selectedFilter} />
    </div>
  );
}

export default Dashboard;
