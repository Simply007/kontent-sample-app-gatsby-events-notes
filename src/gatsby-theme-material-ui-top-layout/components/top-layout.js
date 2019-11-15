import React, { useState } from "react";
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import {navigate} from "gatsby";


const TopLayout = ({ children, theme }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  return (
    <ThemeTopLayout theme={theme}>
      <AppBar position="static">
        <Toolbar>
          <IconButton edge="start" aria-label="menu">
            <MenuIcon onClick={handleToggle} />
          </IconButton>
          <Typography variant="h6">
            Conferences & Meetups
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={handleToggle}>
        <MenuItem onClick={navigate('conferences')}>Conferences</MenuItem>
        <MenuItem onClick={navigate('meetups')}>Meet Up</MenuItem>
        <MenuItem onClick={navigate('people')}>People</MenuItem>
        <MenuItem onClick={navigate('workshops')}>Workshops</MenuItem>
        <MenuItem onClick={navigate('pesentations')}>Presentations</MenuItem>
      </Drawer>
      {children}
    </ThemeTopLayout>
  );
}

export default TopLayout;