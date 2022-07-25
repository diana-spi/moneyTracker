import "./IncomeOutcomeStatistics.scss";
import { ResponsiveLine } from "@nivo/line";
import transactions from "../../data/transactions";
import intervalVariants from "../../constans/filterValues";
import { transactionTypes } from "../../data/transactions";
import moment from "moment";
import { scopedCssBaselineClasses } from "@mui/material";

function IncomeOutcomeStatistics({ selectedFilter }) {
  const data = [
    {
      id: "japan",
      color: "hsl(217, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 166,
        },
        {
          x: "helicopter",
          y: 221,
        },
        {
          x: "boat",
          y: 117,
        },
        {
          x: "train",
          y: 127,
        },
        {
          x: "subway",
          y: 174,
        },
        {
          x: "bus",
          y: 21,
        },
        {
          x: "car",
          y: 196,
        },
        {
          x: "moto",
          y: 153,
        },
        {
          x: "bicycle",
          y: 156,
        },
        {
          x: "horse",
          y: 80,
        },
        {
          x: "skateboard",
          y: 70,
        },
        {
          x: "others",
          y: 209,
        },
      ],
    },
    {
      id: "france",
      color: "hsl(295, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 296,
        },
        {
          x: "helicopter",
          y: 116,
        },
        {
          x: "boat",
          y: 147,
        },
        {
          x: "train",
          y: 89,
        },
        {
          x: "subway",
          y: 200,
        },
        {
          x: "bus",
          y: 174,
        },
        {
          x: "car",
          y: 260,
        },
        {
          x: "moto",
          y: 243,
        },
        {
          x: "bicycle",
          y: 94,
        },
        {
          x: "horse",
          y: 83,
        },
        {
          x: "skateboard",
          y: 215,
        },
        {
          x: "others",
          y: 13,
        },
      ],
    },
    {
      id: "us",
      color: "hsl(71, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 8,
        },
        {
          x: "helicopter",
          y: 222,
        },
        {
          x: "boat",
          y: 165,
        },
        {
          x: "train",
          y: 27,
        },
        {
          x: "subway",
          y: 9,
        },
        {
          x: "bus",
          y: 18,
        },
        {
          x: "car",
          y: 187,
        },
        {
          x: "moto",
          y: 86,
        },
        {
          x: "bicycle",
          y: 142,
        },
        {
          x: "horse",
          y: 21,
        },
        {
          x: "skateboard",
          y: 277,
        },
        {
          x: "others",
          y: 206,
        },
      ],
    },
    {
      id: "germany",
      color: "hsl(53, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 70,
        },
        {
          x: "helicopter",
          y: 71,
        },
        {
          x: "boat",
          y: 7,
        },
        {
          x: "train",
          y: 215,
        },
        {
          x: "subway",
          y: 111,
        },
        {
          x: "bus",
          y: 119,
        },
        {
          x: "car",
          y: 203,
        },
        {
          x: "moto",
          y: 61,
        },
        {
          x: "bicycle",
          y: 192,
        },
        {
          x: "horse",
          y: 166,
        },
        {
          x: "skateboard",
          y: 55,
        },
        {
          x: "others",
          y: 116,
        },
      ],
    },
    {
      id: "norway",
      color: "hsl(317, 70%, 50%)",
      data: [
        {
          x: "plane",
          y: 173,
        },
        {
          x: "helicopter",
          y: 251,
        },
        {
          x: "boat",
          y: 171,
        },
        {
          x: "train",
          y: 271,
        },
        {
          x: "subway",
          y: 265,
        },
        {
          x: "bus",
          y: 133,
        },
        {
          x: "car",
          y: 4,
        },
        {
          x: "moto",
          y: 96,
        },
        {
          x: "bicycle",
          y: 85,
        },
        {
          x: "horse",
          y: 255,
        },
        {
          x: "skateboard",
          y: 137,
        },
        {
          x: "others",
          y: 285,
        },
      ],
    },
  ];

  return (
    <div className="in-outcome-statistics">
      <ResponsiveLine
        className="in-outcome-statistics__chart"
        data={data}
        margin={{ top: 10, right: 10, bottom: 50, left: 50 }}
        xScale={{ type: "point" }}
        yScale={{
          type: "linear",
          min: "auto",
          max: "auto",
          stacked: true,
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
