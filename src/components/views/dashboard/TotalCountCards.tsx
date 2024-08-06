import React from "react";
import {
  Grid,
  Typography,
  Paper,
  useMediaQuery,
  useTheme,
} from "@mui/material";

import Cancelled from "components/assets/images/Cancelled.webp";
import Delivered from "components/assets/images/Delivered.webp";
import Revenue from "components/assets/images/Revenue.webp";
import Order from "components/assets/images/Orders.webp";

interface StatCardProps {
  icon: string; // changed to string for image src
  label: string;
  value: string;
  change: string;
  isPositive: boolean;
  iconBgColor: string;
}

const StatCard: React.FC<StatCardProps> = ({
  icon,
  label,
  value,
  change,
  isPositive,
  iconBgColor,
}) => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Paper
      sx={{
        p: 2,
        backgroundColor: "#2c2e35",
        color: "white",
        borderRadius: 2,
      }}
    >
      <Grid
        container
        alignItems="center"
        justifyContent="center"
        sx={{
          width: isSmallScreen ? 45 : 60,
          height: isSmallScreen ? 45 : 60,
          borderRadius: "20%",
          backgroundColor: iconBgColor,
          mb: 1,
        }}
      >
        <img
          src={icon}
          alt={label}
          style={{ width: isSmallScreen ? 30 : 40 }}
        />
      </Grid>
      <Grid container direction="column">
        <Typography
          variant="h6"
          sx={{ mt: isSmallScreen ? 0.5 : 1, opacity: 0.7 }}
        >
          {label}
        </Typography>
        <Grid container mt={2} justifyContent={"space-between"}>
          <Typography
            variant={isSmallScreen ? "h4" : "h3"}
            sx={{ fontWeight: "800" }}
          >
            {value}
          </Typography>
          <Typography
            variant="subtitle1"
            sx={{
              color: isPositive ? "green" : "red",
              fontWeight: "800",
              display: "flex",
              alignItems: "center",
            }}
          >
            {isPositive ? (
              <span style={{ marginRight: 4 }}>▲</span>
            ) : (
              <span style={{ marginRight: 4 }}>▼</span>
            )}
            {change}
          </Typography>
        </Grid>
      </Grid>
    </Paper>
  );
};

const DashboardStats: React.FC = () => {
  const theme = useTheme();
  const isSmallScreen = useMediaQuery(theme.breakpoints.down("sm"));

  return (
    <Grid
      container
      spacing={2}
      direction={isSmallScreen ? "column" : "row"}
      wrap="wrap"
    >
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          icon={Order}
          label="Total Orders"
          value="75"
          change="3%"
          isPositive={true}
          iconBgColor="#293368"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          icon={Delivered}
          label="Total Delivered"
          value="70"
          change="3%"
          isPositive={false}
          iconBgColor="#165246"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          icon={Cancelled}
          label="Total Cancelled"
          value="05"
          change="3%"
          isPositive={true}
          iconBgColor="#5f3237"
        />
      </Grid>
      <Grid item xs={12} sm={6} md={3}>
        <StatCard
          icon={Revenue}
          label="Total Revenue"
          value="$12k"
          change="3%"
          isPositive={false}
          iconBgColor="rgba(91,42,74,255)"
        />
      </Grid>
    </Grid>
  );
};

export default DashboardStats;
