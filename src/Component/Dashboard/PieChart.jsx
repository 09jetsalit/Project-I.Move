import * as React from "react";
import { PieChart, pieArcLabelClasses } from "@mui/x-charts/PieChart";
import { Box } from "@mui/material";
import { customContext } from "../../Page/Dashboard";
import { getPieData } from "../../Data/dashboardData";

// const data = [
//   { id: 1, value: 15, label: "swimming" },
//   { id: 2, value: 20, label: "walking" },
//   { id: 3, value: 40, label: "badminton" },
//   { id: 4, value: 30, label: "cycling" },
//   { id: 5, value: 10, label: "running" },
// ];

const PieChartComponent = () => {
  const { data } = React.useContext(customContext);
  const pieData = getPieData(data);
  const totalValue = pieData
    .map((activity) => activity.value)
    .reduce((total, value) => total + value, 0);
  const getArcLabel = (activity) => {
    const percent = activity.value / totalValue;
    return `${(percent * 100).toFixed(0)}%`;
  };
  return (
    <Box
      sx={{ display: "flex", flexDirection: "row", justifyContent: "center" }}
    >
      <PieChart
        series={[
          {
            data: pieData,
            innerRadius: 50,
            outerRadius: 100,
            cornerRadius: 5,
            arcLabel: getArcLabel,
          },
        ]}
        sx={{
          [`& .${pieArcLabelClasses.root}`]: {
            fill: "white",
            fontSize: 14,
          },
        }}
        width={400}
        height={200}
      />
    </Box>
  );
};
export default PieChartComponent;
