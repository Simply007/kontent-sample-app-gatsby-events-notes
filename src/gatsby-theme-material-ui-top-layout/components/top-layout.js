import React, { useState } from "react";
import ThemeTopLayout from "gatsby-theme-material-ui-top-layout/src/components/top-layout";
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import IconButton from '@material-ui/core/IconButton';
import Drawer from '@material-ui/core/Drawer';
import Typography from '@material-ui/core/Typography';
import MenuItem from '@material-ui/core/MenuItem';
import MenuIcon from '@material-ui/icons/Menu';
import Divider from '@material-ui/core/Divider';
import { navigate } from "gatsby";

const TopLayout = ({ children, theme }) => {
  const [open, setOpen] = useState(false);

  const handleToggle = () => setOpen(!open);

  const selectMenuItem = (path) => {
    setOpen(false);
    // navigate(path);
    alert('Not implemented yet! :-)')
  }

  return (
    <ThemeTopLayout theme={theme}>
      <AppBar position="static">
        <Divider />
        <Toolbar>
          <IconButton edge="start" aria-label="menu">
            <MenuIcon onClick={handleToggle} />
          </IconButton>
          <Typography variant="h6" onClick={() => selectMenuItem('/')} style={{cursor: "pointer"}}>
            Conferences & Meetups
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer open={open} onClose={handleToggle}>
        <MenuItem onClick={() => selectMenuItem('conferences')}>Conferences</MenuItem>
        <MenuItem onClick={() => selectMenuItem('meetups')}>Meet Ups</MenuItem>
        <MenuItem onClick={() => selectMenuItem('people')}>People</MenuItem>
        <MenuItem onClick={() => selectMenuItem('workshops')}>Workshops</MenuItem>
        <MenuItem onClick={() => selectMenuItem('pesentations')}>Presentations</MenuItem>
      </Drawer>
      {children}
    </ThemeTopLayout>
  );
}

export default (TopLayout);