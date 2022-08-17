import "./IncomeOutcomeStatistics.scss";
import { ResponsiveLine } from "@nivo/line";
import transactions from "../../data/transactions";
import intervalVariants from "../../constans/filterValues";
import { transactionTypes } from "../../data/transactions";
import moment from "moment";
import { min, round } from "lodash";

const periodToIntervalType = (dates) => {
  const start = moment(dates.start);
  const end = moment(dates.end);
  const diffMonth = end.diff(start, "months");
  const diffDays = end.diff(start, "days");
  if (diffDays <= 7) {
    return intervalVariants.WEEK;
  } else if (diffMonth < 2) {
    return intervalVariants.MONTH;
  }
  return intervalVariants.YEAR;
};

function IncomeOutcomeStatistics({ selectedFilter, selectedBankAcc }) {
  const dataBuildFunction = (type) => {
    const endDate = selectedFilter.dates?.end ? moment(selectedFilter.dates.end) : moment();
    const startDate = getStartedDate(selectedFilter);
    const calcInterval =
      selectedFilter.interval === intervalVariants.PERIOD
        ? periodToIntervalType(selectedFilter.dates)
        : selectedFilter.interval;

    switch (calcInterval) {
      case intervalVariants.DAY:
      case intervalVariants.WEEK:
        const dataWeek = {
          id: Math.random(),
          color: type === transactionTypes.INCOME ? "#95b66d" : "#f65738",
          minValue: 0,
          data: [],
        };

        for (let i = 1; i <= endDate.day(); i++) {
          const firstDate = startDate.clone().day(i);
          const lastDate = firstDate.clone().hour(23).minute(59).second(59);
          const transactionsForDay = transactions
            .filter(
              (transaction) =>
                selectedBankAcc.length === 0 ||
                selectedBankAcc.map((account) => account.toLowerCase()).includes(transaction.account)
            )
            .filter((transaction) => transaction.type === type)
            .filter((transaction) => {
              const transactionDate = moment(transaction.date);
              return transactionDate.isSameOrAfter(firstDate, "day") && transactionDate.isSameOrBefore(lastDate, "day");
            });
          const sumDay = transactionsForDay.reduce((acc, transaction) => {
            return acc + transaction.sum;
          }, 0);
          dataWeek.data.push({
            x: firstDate.format("dddd"),
            y: sumDay,
          });
        }
        dataWeek.minValue = min(dataWeek.data.map((data) => data.y));
        return dataWeek;

      case intervalVariants.MONTH:
        const month = endDate.month();
        const mondays = [];
        const dataMonth = {
          id: Math.random(),
          color: type === transactionTypes.INCOME ? "#95b66d" : "#f65738",
          minValue: 0,
          data: [],
        };

        // Get the first Monday in the month
        while (startDate.day() !== 1) {
          startDate.date(startDate.date() + 1);
        }

        // Get all the other Mondays in the month
        while (startDate.month() === month) {
          mondays.push(moment(startDate));
          startDate.date(startDate.date() + 7);
        }

        //Sum the transactions for each Monday
        for (let i = 0; i < mondays.length; i++) {
          const firstDayOfMonth = moment(mondays[i]).date(1);
          const previousDate = i === 0 ? firstDayOfMonth : mondays[i - 1];
          const transactionsForWeek = transactions
            .filter(
              (transaction) =>
                selectedBankAcc.length === 0 ||
                selectedBankAcc.map((account) => account.toLowerCase()).includes(transaction.account)
            )
            .filter((transaction) => transaction.type === type)
            .filter((transaction) => {
              const transactionDate = moment(transaction.date);
              return (
                transactionDate.isSameOrAfter(previousDate, "day") &&
                transactionDate.isBefore(mondays[i], "day") &&
                transactionDate.isBefore(moment())
              );
            });
          const sumWeek = transactionsForWeek.reduce((acc, transaction) => {
            return acc + transaction.sum;
          }, 0);
          dataMonth.data.push({
            x: mondays[i].format("DD.MM.YYYY"),
            y: sumWeek,
          });
        }
        dataMonth.minValue = min(dataMonth.data.map((data) => data.y));

        return dataMonth;

      case intervalVariants.YEAR:
        const dataYear = {
          id: Math.random(),
          color: type === transactionTypes.INCOME ? "#95b66d" : "#f65738",
          minValue: 0,
          data: [],
        };
        const currentMonth = endDate.month();
        for (let i = startDate.month(); i <= currentMonth; i++) {
          const firstDayOfMonth = moment().month(i).startOf("month");
          const lastDayOfMonth = moment().month(i).endOf("month");

          const transactionsForMonth = transactions
            .filter(
              (transaction) =>
                selectedBankAcc.length === 0 ||
                selectedBankAcc.map((account) => account.toLowerCase()).includes(transaction.account)
            )
            .filter((transaction) => transaction.type === type)
            .filter((transaction) => {
              const transactionDate = moment(transaction.date);
              return (
                transactionDate.isSameOrAfter(firstDayOfMonth, "day") &&
                transactionDate.isSameOrBefore(lastDayOfMonth, "day")
              );
            });
          const sumMonth = transactionsForMonth.reduce((acc, transaction) => {
            return acc + transaction.sum;
          }, 0);
          dataYear.data.push({
            x: firstDayOfMonth.format("MMMM"),
            y: sumMonth,
          });
        }
        dataYear.minValue = min(dataYear.data.map((data) => data.y));
        return dataYear;

      default:
    }
  };

  const getStartedDate = (selectedFilter) => {
    let startDate = moment();
    switch (selectedFilter.interval) {
      case intervalVariants.DAY:
        startDate.hour(0).minute(0).second(0);
        break;
      case intervalVariants.WEEK:
        startDate.day(1).hour(0).minute(0).second(0);
        break;
      case intervalVariants.MONTH:
        startDate.date(1).hour(0).minute(0).second(0);
        break;
      case intervalVariants.YEAR:
        startDate.month(0).date(1).hour(0).minute(0).second(0);
        break;
      case intervalVariants.PERIOD:
        startDate = moment(selectedFilter.dates.start);
        break;
      default:
    }

    return startDate;
  };
  const outcomeData = dataBuildFunction(transactionTypes.OUTCOME);
  const incomeData = dataBuildFunction(transactionTypes.INCOME);

  return (
    <div className="in-outcome-statistics">
      <ResponsiveLine
        className="in-outcome-statistics__chart"
        data={[outcomeData, incomeData]}
        margin={{ top: 10, right: 50, bottom: 50, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="cardinal"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",

          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "date",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "sum",
          legendOffset: -40,
          legendPosition: "middle",
        }}
        colors={(data) => data.color}
        lineWidth={3}
        pointSize={9}
        pointColor={"#fff"}
        pointBorderWidth={2}
        pointBorderColor={{ from: "serieColor" }}
        pointLabelYOffset={-12}
        enableArea={true}
        areaOpacity={0.65}
        useMesh={true}
        legends={[]}
        areaBaselineValue={min([outcomeData.minValue, incomeData.minValue])}
        tooltip={(datum) => {
          return <div className="in-outcome-statistics__tooltip">${round(datum.point.data.y).toFixed(2)}</div>;
        }}
      />
    </div>
  );
}

export default IncomeOutcomeStatistics;
