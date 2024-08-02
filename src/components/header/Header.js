import React, {useState} from "react";
import {Box , AppBar, Toolbar, Container, Typography, MenuItem, Drawer } from "@mui/material"
import MenuIcon from "@mui/icons-material/Menu";
import { BsCart3 } from 'react-icons/bs';
import logo from '../../Images/logo_L_nobg.png';
import "./header.css"


export default function Header() {
  const [open, setOpen] = useState(false);
  const toggleDrawer = (newOpen) => () => {
    setOpen(newOpen);
  };

  return (
    <div>
      <AppBar position="fixed" sx={{ bgcolor: "transparent"}}>
        <Container maxWidth="lg">
          <Toolbar sx={{ display: "flex", alignItems: "center", justifyContent: "space-between" }}>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <img className="logo" src={logo} alt="logo" />
            </Box>
            <Box sx={{ display: { xs: "none", md: "flex" }, gap: 2 }}>
              <MenuItem>
                <Typography variant="body2" color="text.primary">Trang chủ</Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant="body2" color="text.primary">Sản phẩm</Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant="body2" color="text.primary">Blog</Typography>
              </MenuItem>
              <MenuItem>
                <Typography variant="body2" color="text.primary">Liên hệ</Typography>
              </MenuItem>
            </Box>
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <BsCart3 style={{ fontSize: '1.5rem', marginLeft: 2 }} />
            </Box>
            <Box sx={{ display: { sm: "flex", md: "none" } }}>
              <MenuIcon onClick={toggleDrawer(true)} />
              <Drawer anchor="right" open={open} onClose={toggleDrawer(false)}>
                <Box sx={{ width: 250 }}>
                  <MenuItem>
                    <Typography variant="body2">Trang chủ</Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography variant="body2">Sản phẩm</Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography variant="body2">Blog</Typography>
                  </MenuItem>
                  <MenuItem>
                    <Typography variant="body2">Liên hệ</Typography>
                  </MenuItem>
                </Box>
              </Drawer>
            </Box>
          </Toolbar>
        </Container>
      </AppBar>
    </div>
  );
}