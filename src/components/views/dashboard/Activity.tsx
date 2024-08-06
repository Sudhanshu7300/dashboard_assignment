import React from "react";
import {
  Select,
  MenuItem,
  SelectChangeEvent,
  Typography,
  Grid,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import Chart from "react-apexcharts";
import { ApexOptions } from "apexcharts";

// Define the type for the series data
interface SeriesData {
  name: string;
  data: number[];
}

const SalesOverview: React.FC = () => {
  // select
  const [month, setMonth] = React.useState<string>("1");

  const handleChange = (event: SelectChangeEvent<string>) => {
    setMonth(event.target.value);
  };

  // chart color
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const secondary = theme.palette.secondary.main;

  // chart options
  const optionscolumnchart: ApexOptions = {
    chart: {
      type: "bar",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: true,
      },
      height: 370,
    },
    colors: [primary, secondary],
    plotOptions: {
      bar: {
        horizontal: false,
        barHeight: "60%",
        columnWidth: "42%",
        borderRadius: 6,
        borderRadiusApplication: "end",
        borderRadiusWhenStacked: "all",
      },
    },
    stroke: {
      show: true,
      width: 5,
      lineCap: "butt",
      colors: ["transparent"],
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    grid: {
      borderColor: "rgba(0,0,0,0.1)",
      strokeDashArray: 3,
      xaxis: {
        lines: {
          show: false,
        },
      },
    },
    yaxis: {
      tickAmount: 4,
    },
    xaxis: {
      categories: [
        "16/08",
        "17/08",
        "18/08",
        "19/08",
        "20/08",
        "21/08",
        "22/08",
        "23/08",
      ],
      axisBorder: {
        show: false,
      },
    },
    tooltip: {
      fillSeriesColor: false,
    },
  };

  const seriescolumnchart: SeriesData[] = [
    {
      name: "Earnings this month",
      data: [355, 390, 300, 350, 390, 180, 355, 390],
    },
    {
      name: "Expense this month",
      data: [280, 250, 325, 215, 250, 310, 280, 250],
    },
  ];

  return (
    <>
      <Grid container justifyContent={"space-between"}>
        <Typography variant="h5"> Activity </Typography>
        <Select
          labelId="month-dd"
          id="month-dd"
          value={month}
          size="small"
          sx={{ color: "#fff" }}
          onChange={handleChange}
        >
          <MenuItem value="1">March 2023</MenuItem>
          <MenuItem value="2">April 2023</MenuItem>
          <MenuItem value="3">May 2023</MenuItem>
        </Select>
      </Grid>
      <Chart
        options={optionscolumnchart}
        series={seriescolumnchart}
        type="bar"
        height="176px"
        style={{ marginTop: "10px" }}
      />
    </>
  );
};

export default SalesOverview;
