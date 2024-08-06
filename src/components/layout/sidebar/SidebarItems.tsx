import React from "react";
import { Box, List } from "@mui/material";
import NavItem from "./NavItem";
import Menuitems from "./MenuItems";

interface SidebarItemsProps {
  toggleMobileSidebar: (event: React.MouseEvent<HTMLElement>) => void;
  isCollapsed: boolean;
}

const SidebarItems = ({
  isCollapsed,
  toggleMobileSidebar,
}: SidebarItemsProps) => {
  return (
    <>
      <List component="div" sx={{ flex: 1 }}>
        {Menuitems.slice(0, -1).map((item) => (
          <NavItem
            item={item}
            key={item.id}
            isCollapsed={isCollapsed}
            onClick={toggleMobileSidebar}
          />
        ))}
      </List>
      <Box
        sx={{
          position: "absolute",
          bottom: 0,
        }}
      >
        <NavItem
          item={Menuitems[Menuitems.length - 1]}
          isCollapsed={isCollapsed}
          onClick={toggleMobileSidebar}
        />
      </Box>
    </>
  );
};

export default SidebarItems;
