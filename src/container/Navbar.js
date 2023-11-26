import React, { useState } from 'react';
import { useNavigate } from "react-router-dom";
import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import IconButton from '@mui/material/IconButton';
import MenuItem from '@mui/material/MenuItem';
import AdbIcon from '@mui/icons-material/Adb';
import MenuIcon from '@mui/icons-material/Menu';
import ListItemButton from '@mui/material/ListItemButton';
const ServerEndPoint = "http://localhost:8000/api/";

const styles = {
  buttonNav: {
    my: 2,
    ml: 3,
    color: 'white',
    display: 'block',
    fontSize: "15px",
    "&:active": {
      borderBottom: "2px solid #0B36A2DE",
      borderBottomLeftRadius: "0px",
      borderBottomRightRadius: "0px"
    },
    "&:focus": {
      borderBottom: "2px solid white",
      borderBottomLeftRadius: "0px",
      borderBottomRightRadius: "0px"
    }

  }
};

function Navbar() {

  const navigate = useNavigate();
  const [anchorElUser, setAnchorElUser] = useState(null);
  const [anchorElNav, setAnchorElNav] = useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };
  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget);
  };
  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };
  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };
  return (
    <AppBar position='static' sx={{
      backgroundColor: "rgb(7 99 177)", boxShadow: "rgb(0 0 0 / 0%)", padding: 0, backdropFilter: "blur(8px)", zIndex: 1100, zIndex: (theme) => theme.zIndex.drawer + 1
    }}>
      <Container maxWidth="xxl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CARVEL
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: 'flex', md: 'none' } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: 'bottom',
                horizontal: 'left',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'left',
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: 'block', md: 'none' },
              }}
            >

              <MenuItem onClick={handleCloseNavMenu}>
                <ListItemButton onClick={() => navigate("KVKK")}>
                  <Typography textAlign="center" >KVKK Metni</Typography>
                </ListItemButton>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <ListItemButton onClick={() => navigate("/PrivacyPolicy")}>
                  <Typography textAlign="center" >Gizlilik Politikası</Typography>
                </ListItemButton>
              </MenuItem>
              <MenuItem onClick={handleCloseNavMenu}>
                <ListItemButton onClick={() => navigate("/UserDelete")}>
                  <Typography textAlign="center"  >  Kullanıcı Sil</Typography>
                </ListItemButton>
              </MenuItem>
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            CARVEL
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: 'none', md: 'flex' } }}>
            <Button
              variant='text'
              sx={styles.buttonNav}
              onClick={() => navigate("/KVKK")}
            >
              KVKK Metni

            </Button>

            <Button

              variant='text'
              sx={styles.buttonNav}
              onClick={() => navigate("/PrivacyPolicy")}
            >
              Gizlilik Politikası

            </Button>
            <Button

              variant='text'
              sx={styles.buttonNav}
              onClick={() => navigate("/UserDelete")}
            >
              Kullanıcı Silme
            </Button>
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Menu
              sx={{ mt: '45px' }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              keepMounted
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right',
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <MenuItem onClick={handleCloseUserMenu}>
                <ListItemButton>
                  <Typography textAlign="center">HelloWorld</Typography>
                </ListItemButton>
              </MenuItem>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  )
}

export default Navbar