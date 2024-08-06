import React from "react";
import { useMediaQuery, Box, Drawer, useTheme, Grid } from "@mui/material";
import SidebarItems from "./SidebarItems";
import brandMark from "components/assets/images/fitpeo_logo.webp";
import Menu from "components/assets/images/menu.png";
interface ItemType {
  isCollapsed: boolean;
  isMobileSidebarOpen: boolean;
  onSidebarClose: (event: React.MouseEvent<HTMLElement>) => void;
  isSidebarOpen: boolean;
  setIsCollapsed: any;
}

const Sidebar = ({
  isCollapsed,
  isMobileSidebarOpen,
  setIsCollapsed,
  onSidebarClose,
  isSidebarOpen,
}: ItemType) => {
  const theme = useTheme();

  const [sidebarVariant, setSidebarVariant] = React.useState<
    "permanent" | "temporary"
  >("permanent");
  const lgUp = useMediaQuery((theme: any) => theme.breakpoints.up("lg"));
  const sidebarWidth = isCollapsed ? "65px" : "230px";
  const collapsedSidebarWidth = "80px";

  React.useEffect(() => {
    setSidebarVariant(lgUp ? "permanent" : "temporary");
  }, [lgUp]);

  const handleCollapseToggle = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <Box
      sx={{
        width: isCollapsed ? collapsedSidebarWidth : sidebarWidth,
        flexShrink: 0,
        zIndex: 100,
      }}
    >
      <Drawer
        anchor="left"
        open={lgUp ? isSidebarOpen : isMobileSidebarOpen}
        onClose={!lgUp ? onSidebarClose : undefined}
        variant={sidebarVariant}
        PaperProps={{
          sx: {
            width: sidebarWidth,
            boxSizing: "border-box",
            border: "0",
            overflow: "hidden",
            backgroundColor: theme.palette.secondary.main,
          },
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            position: "relative",
            height: "100%",
          }}
        >
          <Grid container mt={2}>
            <Grid item xs={isCollapsed ? 12 : 3} onClick={handleCollapseToggle}>
              <img
                height={40}
                width={40}
                alt="logo"
                src={Menu}
                style={{ marginLeft: "10px", cursor: "pointer" }}
              />
            </Grid>
            <Grid item xs={9}>
              {!isCollapsed && (
                <img
                  height={45}
                  style={{ marginLeft: "14px" }}
                  width={130}
                  alt="logo"
                  src={brandMark}
                />
              )}
            </Grid>
          </Grid>

          <Box mt={2}>
            <SidebarItems
              isCollapsed={isCollapsed}
              toggleMobileSidebar={handleCollapseToggle}
            />
          </Box>
        </Box>
      </Drawer>
    </Box>
  );
};

export default Sidebar;
