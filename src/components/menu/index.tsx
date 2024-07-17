import { useState } from "react";
import { AppBar, Toolbar, Button, Box } from "@mui/material";

interface IPropType {
  handleMenu: (arg0: string) => void;
}
const HorizontalMenuBar = (props: IPropType) => {
  const { handleMenu } = props;
  const [activeMenu, setActiveMenu] = useState<string | null>(null);

  const handleMenuClick = (menu: string) => {
    setActiveMenu(menu);
    handleMenu(menu);
  };

  const menuItems = ["Employee", "Task", "Employee Task"];

  return (
    <AppBar position="static">
      <Toolbar>
        <Box sx={{ display: "flex" }}>
          {menuItems.map((item) => (
            <Button
              key={item}
              color={activeMenu === item ? "secondary" : "inherit"}
              onClick={() => handleMenuClick(item)}
            >
              {item}
            </Button>
          ))}
        </Box>
      </Toolbar>
    </AppBar>
  );
};

export default HorizontalMenuBar;
