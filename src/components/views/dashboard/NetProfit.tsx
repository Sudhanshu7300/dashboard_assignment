import React from "react";
import Chart from "react-apexcharts";
import { useTheme } from "@mui/material/styles";
import { Grid, Stack, Typography, useMediaQuery } from "@mui/material";
import { ApexOptions } from "apexcharts";
import { FaArrowUp } from "react-icons/fa";

const NetProfit: React.FC = () => {
  const theme = useTheme();
  const primary = theme.palette.primary.main;
  const primarylight = "#ecf2ff";
  const isMobile = useMediaQuery(theme.breakpoints.down("sm"));

  const chartOptions: ApexOptions = {
    chart: {
      type: "donut",
      fontFamily: "'Plus Jakarta Sans', sans-serif;",
      foreColor: "#adb0bb",
      toolbar: {
        show: false,
      },
      height: 155,
    },
    colors: [primary, primarylight, "#F9F9FD"],
    plotOptions: {
      pie: {
        startAngle: 0,
        endAngle: 360,
        donut: {
          labels: {
            show: true,
            total: {
              show: true,
              label: "Goal",
              formatter: function (w: any) {
                const total = w.globals.seriesTotals.reduce(
                  (a: number, b: number) => a + b,
                  0
                );
                return `${total}%`;
              },
            },
          },
        },
      },
    },
    tooltip: {
      fillSeriesColor: false,
    },
    stroke: {
      show: false,
    },
    dataLabels: {
      enabled: false,
    },
    legend: {
      show: false,
    },
    responsive: [
      {
        breakpoint: 991,
        options: {
          chart: {
            width: 120,
          },
        },
      },
      {
        breakpoint: 800,
        options: {
          chart: {
            width: 180,
          },
        },
      },
      {
        breakpoint: 768,
        options: {
          chart: {
            width: 180,
          },
        },
      },
      {
        breakpoint: 576,
        options: {
          chart: {
            width: 180,
          },
        },
      },
    ],
  };

  const seriesData = [35, 10, 25];

  return (
    <>
      <Grid container spacing={3}>
        <Grid item xs={5} sm={5}>
          <Typography variant="h6" fontWeight="700">
            Net Profit
          </Typography>
          <Stack direction="row" spacing={1} mt={1} alignItems="center">
            <Typography variant="h2" fontWeight="700">
              $6759.25
            </Typography>
          </Stack>
        </Grid>
        <Grid
          item
          xs={12}
          sm={7}
          container
          justifyContent={isMobile ? "center" : "flex-start"}
        >
          <Chart
            options={chartOptions}
            series={seriesData}
            type="donut"
            height="165px"
          />
        </Grid>
      </Grid>
      <Grid container alignItems={"center"} justifyContent={"space-between"}>
        <Typography
          variant="subtitle1"
          sx={{
            color: "green",
            fontWeight: "800",
            display: "flex",
            alignItems: "center",
          }}
        >
          <FaArrowUp />
          <span style={{ marginLeft: 3 }}> 3% </span>
        </Typography>
        <Typography variant="body2" color={"text.secondary"}>
          *The values here has been rounded off.
        </Typography>
      </Grid>
    </>
  );
};

export default NetProfit;
