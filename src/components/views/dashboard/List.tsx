import React from "react";
import {
  Box,
  Typography,
  List,
  ListItem,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import {
  FaBullseye,
  FaHamburger,
  FaUtensils,
  FaChevronRight,
} from "react-icons/fa";

interface ListItemData {
  icon: React.ReactNode;
  text: string;
  iconBgColor: string;
}

const items: ListItemData[] = [
  {
    icon: <FaBullseye color="white" size={24} />,
    text: "Goals",
    iconBgColor: "#E74C3C",
  },
  {
    icon: <FaHamburger color="white" size={24} />,
    text: "Popular Dishes",
    iconBgColor: "#3498DB",
  },
  {
    icon: <FaUtensils color="white" size={24} />,
    text: "Menus",
    iconBgColor: "#1ABC9C",
  },
];

const MenuList: React.FC = () => {
  return (
    <List>
      {items.map((item, index) => (
        <ListItem
          key={index}
          sx={{ display: "flex", alignItems: "center", mb: 2 }}
        >
          <ListItemIcon>
            <Box
              sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 40,
                height: 40,
                borderRadius: "50%",
                backgroundColor: item.iconBgColor,
                mr: 2,
              }}
            >
              {item.icon}
            </Box>
          </ListItemIcon>
          <ListItemText
            primary={
              <Typography variant="body1" color="white">
                {item.text}
              </Typography>
            }
          />
          <FaChevronRight color="grey" />
        </ListItem>
      ))}
    </List>
  );
};

export default MenuList;
