import { styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Activity from "components/views/dashboard/Activity";
import NetProfit from "components/views/dashboard/NetProfit";
import Feedback from "components/views/dashboard/Feedback";
import Order from "components/views/dashboard/Order";
import TotalCountCards from "components/views/dashboard/TotalCountCards";
import List from "components/views/dashboard/List";
const Item = styled(Paper)(({ theme }) => ({
  color: theme.palette.text.secondary,
  background: theme.palette.secondary.light,
  padding: 10,
}));

export default function BasicGrid() {
  return (
    <Grid container spacing={2} mt={2}>
      <Grid item md={8} xs={12}>
        <TotalCountCards />
      </Grid>
      <Grid item md={4} xs={12}>
        <Item>
          <NetProfit />
        </Item>
      </Grid>
      <Grid item md={8} xs={12}>
        <Item>
          <Activity />
        </Item>
      </Grid>
      <Grid item md={4} xs={12}>
        <Item>
          <List />
        </Item>
      </Grid>
      <Grid item md={8} xs={12}>
        <Item>
          <Order />
        </Item>
      </Grid>
      <Grid item md={4} xs={12}>
        <Item>
          <Feedback />
        </Item>
      </Grid>
    </Grid>
  );
}
