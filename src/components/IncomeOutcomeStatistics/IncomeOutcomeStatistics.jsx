import "./IncomeOutcomeStatistics.scss";
import { ResponsiveLine } from "@nivo/line";
import transactions from "../../data/transactions";
import intervalVariants from "../../constans/filterValues";
import { transactionTypes } from "../../data/transactions";
import moment from "moment";
import { scopedCssBaselineClasses } from "@mui/material";

function IncomeOutcomeStatistics({ selectedFilter, selectedBankAcc }) {
  const dataBuildFunction = (type) => {
    const endDate = moment();
    const startDate = getStartedDate(selectedFilter);
    endDate.date(12);

    switch (selectedFilter) {
      // case intervalVariants.DAY:
      //   break;
      // case intervalVariants.WEEK:
      //   break;

      case intervalVariants.MONTH:
        const month = endDate.month();
        const mondays = [];
        const data = {
          id: Math.random(),
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
            .filter((transaction) => transaction.type === type)
            .filter((transaction) => {
              const transactionDate = moment(transaction.date);
              return transactionDate.isSameOrAfter(previousDate, "day") && transactionDate.isBefore(mondays[i], "day");
            });
          const sum = transactionsForWeek.reduce((acc, transaction) => {
            return acc + transaction.sum;
          }, 0);
          data.data.push({
            x: mondays[i].format("DD.MM.YYYY"),
            y: sum,
          });
        }
        return data;
      // case intervalVariants.YEAR:
      //   break;
      default:
    }
  };

  const getStartedDate = (selectedFilter) => {
    const startDate = moment();
    switch (selectedFilter) {
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
        margin={{ top: 10, right: 30, bottom: 50, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: false,
          reverse: false,
        }}
        yFormat=" >-.2f"
        curve="natural"
        axisTop={null}
        axisRight={null}
        axisBottom={{
          orient: "bottom",

          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "transportation",
          legendOffset: 36,
          legendPosition: "middle",
        }}
        axisLeft={{
          orient: "left",
          tickSize: 5,
          tickPadding: 5,
          tickRotation: 0,
          legend: "count",
          legendOffset: -40,
          legendPosition: "middle",
        }}
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
      />
    </div>
  );
}

export default IncomeOutcomeStatistics;
