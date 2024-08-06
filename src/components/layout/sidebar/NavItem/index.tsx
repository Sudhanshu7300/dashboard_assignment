import React from "react";
import {
  ListItemIcon,
  ListItem,
  List,
  styled,
  ListItemText,
  useTheme,
  ListItemButton,
} from "@mui/material";
import Box, { BoxProps } from "@mui/material/Box";
import { Link, useLocation } from "react-router-dom";
import { IoIosArrowForward } from "react-icons/io";

type NavGroup = {
  id?: string;
  title?: string;
  icon?: any;
  href?: any;
  onClick?: React.MouseEvent<HTMLButtonElement, MouseEvent>;
};

interface NavItemProps {
  item: NavGroup;
  onClick: (event: React.MouseEvent<HTMLElement>) => void;
  isCollapsed: boolean;
}

const NavItem = ({ item, isCollapsed }: NavItemProps) => {
  const Icon = item.icon;
  const theme = useTheme();
  const itemIcon = <Icon stroke={1.5} />;
  const location = useLocation();
  const isNavLinkActive = location.pathname.startsWith(item.href);

  const ListItemStyled = styled(ListItem)(() => ({
    padding: 0,
    ".MuiButtonBase-root": {
      whiteSpace: "nowrap",
      marginBottom: "8px",
      color: isNavLinkActive
        ? theme.palette.primary.main
        : theme.palette.text.secondary,
      "&:hover": {
        backgroundColor: theme.palette.secondary.main,
        color: isNavLinkActive
          ? theme.palette.text.secondary
          : theme.palette.primary.main,
      },
      ".MuiListItemIcon-root": {
        color: isNavLinkActive
          ? theme.palette.primary.main
          : theme.palette.text.secondary,
      },
      "&:hover .MuiListItemIcon-root": {
        color: isNavLinkActive
          ? theme.palette.text.secondary
          : theme.palette.primary.main,
      },
      "&.Mui-selected": {
        "&:hover": {
          color: isNavLinkActive
            ? theme.palette.primary.main
            : theme.palette.text.secondary,
          fontWeight: isNavLinkActive ? "700" : "500",
          backgroundColor: theme.palette.secondary.main,
        },
        "&:hover .MuiListItemIcon-root": {
          color: isNavLinkActive
            ? theme.palette.primary.main
            : theme.palette.text.secondary,
        },
      },
    },
  }));

  const MenuItemTextMetaWrapper = styled(Box)<BoxProps>({
    width: "100%",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    transition: "opacity .25s ease-in-out",
    ...(true && { overflow: "hidden" }),
    fontWeight: isNavLinkActive ? "600" : "500",
    lineHeight: 1.6,
  });

  return (
    <List component="div" disablePadding key={item.id}>
      <ListItemStyled>
        <Box
          sx={{
            position: "absolute",
            left: 0,
            top: 0,
            bottom: 0,
            width: "5px",
            marginBottom: "8px",
            borderLeft: isNavLinkActive
              ? `5px solid ${theme.palette.primary.main}`
              : "none",
          }}
        />
        <ListItemButton
          component={Link}
          to={item.href}
          selected={isNavLinkActive}
        >
          <ListItemIcon
            sx={{
              minWidth: "36px",
              p: "3px 0",
              transition: "margin .25s ease-in-out",
              fontSize: "24px",
            }}
          >
            {itemIcon}
          </ListItemIcon>
          {!isCollapsed && (
            <ListItemText>
              <MenuItemTextMetaWrapper>
                {item.title}
                {isNavLinkActive && <IoIosArrowForward />}
              </MenuItemTextMetaWrapper>
            </ListItemText>
          )}
        </ListItemButton>
      </ListItemStyled>
    </List>
  );
};

export default NavItem;
