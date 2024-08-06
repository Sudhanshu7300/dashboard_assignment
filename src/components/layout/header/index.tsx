import React from "react";
import {
  AppBar,
  Grid,
  styled,
  IconButton,
  useTheme,
  Typography,
} from "@mui/material";
import PropTypes from "prop-types";
// components
import Profile from "./Profile";
import { LuMenu } from "react-icons/lu";
import { IoSettingsOutline } from "react-icons/io5";
import { CiMail } from "react-icons/ci";
import NotificationDropdown from "./NotificationDropdown";

interface ItemType {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
}

const Header = ({ toggleMobileSidebar }: ItemType) => {
  const theme = useTheme();

  const AppBarStyled = styled(AppBar)(({ theme }) => ({
    boxShadow: "none",
    background: theme.palette.secondary.main,
    transition: "none",
    padding: "12px",
    color: theme.palette.text.primary,
    zIndex: 1,
  }));

  return (
    <AppBarStyled position="sticky">
      <Grid container alignItems="center" justifyContent="space-between">
        <Grid item>
          <IconButton
            aria-label="menu"
            onClick={toggleMobileSidebar}
            sx={{
              display: {
                xs: "flex",
                lg: "none",
              },
              backgroundColor: theme.palette.secondary.light,
              color: theme.palette.secondary.dark,
            }}
          >
            <LuMenu size={22} />
          </IconButton>
        </Grid>

        <Grid item>
          <Grid
            container
            spacing={1}
            alignItems="center"
            justifyContent="flex-end"
          >
            <Grid item>
              <IconButton
                aria-haspopup="true"
                sx={{
                  backgroundColor: theme.palette.secondary.light,
                }}
              >
                <CiMail style={{ color: theme.palette.secondary.dark }} />
              </IconButton>
            </Grid>
            <Grid item>
              <IconButton
                sx={{
                  backgroundColor: theme.palette.secondary.light,
                }}
              >
                <IoSettingsOutline
                  style={{ color: theme.palette.secondary.dark }}
                />
              </IconButton>
            </Grid>
            <Grid item>
              <NotificationDropdown />
            </Grid>
            <Grid item>
              <Profile />
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </AppBarStyled>
  );
};

Header.propTypes = {
  toggleMobileSidebar: PropTypes.func.isRequired,
};

export default Header;
