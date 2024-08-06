// ** React Imports
import { useState, SyntheticEvent, Fragment } from "react";

// ** MUI Imports
import { Box, Button, Badge, IconButton, Grid, useTheme } from "@mui/material";
import { styled } from "@mui/material/styles";
import MuiMenu, { MenuProps } from "@mui/material/Menu";
import MuiAvatar, { AvatarProps } from "@mui/material/Avatar";
import MuiMenuItem, { MenuItemProps } from "@mui/material/MenuItem";
import Typography, { TypographyProps } from "@mui/material/Typography";
import dayjs from "dayjs";

// ** Icons Imports
import { FaBell } from "react-icons/fa";
// ** Core Component

// ** Third Party Components
import notificationImg from "components/assets/images/notification.gif";

const renewalNotification = [
  {
    _id: "1",
    courseName: "Course One",
    coursePicture: "https://via.placeholder.com/40",
    courseUi: "Course UI 1",
    date: new Date().toISOString(),
  },
  {
    _id: "2",
    courseName: "Course Two",
    coursePicture: "https://via.placeholder.com/40",
    courseUi: "Course UI 2",
    date: new Date().toISOString(),
  },
  {
    _id: "3",
    courseName: "Course Three",
    coursePicture: "https://via.placeholder.com/40",
    courseUi: "Course UI 3",
    date: new Date().toISOString(),
  },
];

const Menu = styled(MuiMenu)<MenuProps>(({ theme }) => ({
  "& .MuiMenu-paper": {
    width: 380,
    overflow: "hidden",
    marginTop: theme.spacing(0),
    [theme.breakpoints.down("sm")]: {
      width: "100%",
    },
  },
  "& .MuiMenu-list": {
    padding: 0,
  },
}));

// ** Styled MenuItem component
const MenuItem = styled(MuiMenuItem)<MenuItemProps>(({ theme }) => ({
  paddingTop: theme.spacing(3),
  paddingBottom: theme.spacing(3),
  borderBottom: `1px solid ${theme.palette.divider}`,
}));

const styles = {
  maxHeight: 349,
  "& .MuiMenuItem-root:last-of-type": {
    border: 0,
  },
};

// ** Styled Avatar component
const Avatar = styled(MuiAvatar)<AvatarProps>({
  width: "2.375rem",
  height: "2.375rem",
  fontSize: "1.125rem",
});

// ** Styled component for the title in MenuItems
const MenuItemTitle = styled(Typography)<TypographyProps>(({ theme }) => ({
  fontWeight: 600,
  flex: "1 1 100%",
  overflow: "hidden",
  fontSize: "0.875rem",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
  marginBottom: theme.spacing(0.75),
}));

// ** Styled component for the subtitle in MenuItems
const MenuItemSubtitle = styled(Typography)<TypographyProps>({
  flex: "1 1 100%",
  overflow: "hidden",
  whiteSpace: "nowrap",
  textOverflow: "ellipsis",
});

const NotificationDropdown = () => {
  // ** States
  const [anchorEl, setAnchorEl] = useState<(EventTarget & Element) | null>(
    null
  );

  // ** Hook

  const handleDropdownOpen = (event: SyntheticEvent) => {
    setAnchorEl(event.currentTarget);
  };

  const handleDropdownClose = () => {
    setAnchorEl(null);
  };
  const theme = useTheme();

  return (
    <Fragment>
      <IconButton
        aria-haspopup="true"
        sx={{
          backgroundColor: theme.palette.secondary.light,
        }}
        onClick={handleDropdownOpen}
      >
        <Badge
          badgeContent={10}
          max={10}
          style={{ color: theme.palette.primary.main }}
        >
          <FaBell style={{ color: theme.palette.secondary.dark }} />
        </Badge>
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleDropdownClose}
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        transformOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <MenuItem disableRipple>
          <Box
            sx={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              width: "100%",
            }}
          >
            <Typography variant="h5" sx={{ fontWeight: 600 }} align="center">
              Notifications
            </Typography>
          </Box>
        </MenuItem>
        <Box
          sx={{
            ...styles,
            overflowY: "auto",
            overflowX: "hidden",
          }}
        >
          {renewalNotification?.length > 0 ? (
            <>
              {renewalNotification?.slice(0, 9)?.map((item: any, i: number) => {
                const started = item?.date;
                const startedDate = dayjs(started).format("DD-MM-YYYY");
                return (
                  <MenuItem key={i} onClick={handleDropdownClose}>
                    <Box
                      sx={{
                        width: "100%",
                        display: "flex",
                        alignItems: "center",
                      }}
                    >
                      <Avatar
                        alt={item?.courseName?.charAt(0)}
                        src={item?.coursePicture ?? item?.courseName?.charAt(0)}
                      />
                      <Box
                        sx={{
                          mx: 4,
                          flex: "1 1",
                          display: "flex",
                          overflow: "hidden",
                          flexDirection: "column",
                        }}
                      >
                        <MenuItemTitle>{item?.courseUi}🎉</MenuItemTitle>
                        <MenuItemSubtitle variant="body2">
                          {item?.courseName}
                        </MenuItemSubtitle>
                      </Box>
                      <Typography
                        variant="caption"
                        sx={{ color: "text.disabled" }}
                      >
                        {startedDate}
                      </Typography>
                    </Box>
                  </MenuItem>
                );
              })}
            </>
          ) : (
            <Grid
              container
              alignItems={"center"}
              sx={{ height: "300px" }}
              justifyContent={"center"}
            >
              <img
                src={notificationImg}
                alt="notification"
                width={150}
                height={150}
              />
              <Typography align="center" style={{ width: "100%" }}>
                No Notifications at the Moment!
              </Typography>
            </Grid>
          )}
        </Box>
        <MenuItem
          disableRipple
          sx={{
            py: 3.5,
            borderBottom: 0,
            borderTop: (theme) => `1px solid ${theme.palette.divider}`,
          }}
        >
          <Button fullWidth variant="contained" onClick={handleDropdownClose}>
            View All Notifications
          </Button>
        </MenuItem>
      </Menu>
    </Fragment>
  );
};

export default NotificationDropdown;
