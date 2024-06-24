import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import MuiAppBar, { AppBarProps as MuiAppBarProps } from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import List from '@mui/material/List';
import CssBaseline from '@mui/material/CssBaseline';
import Typography from '@mui/material/Typography';
import Divider from '@mui/material/Divider';
import IconButton from '@mui/material/IconButton';
import MenuIcon from '@mui/icons-material/Menu';
import ChevronLeftIcon from '@mui/icons-material/ChevronLeft';
import ChevronRightIcon from '@mui/icons-material/ChevronRight';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import Home from '../../pages/home';
import { Link, RouterProvider, useLocation } from 'react-router-dom';
import { router, tablist } from '../../route';
import { LogoProps, SidebarProps } from '../interface';
import { Button } from '@mui/material';
import theme from '../../theme';
import logo from "../../assets/icons/logo.svg"


const drawerWidth = 240;


// const getDrawerWidth = () => {    
//     const defaultDrawerWidth = 240;
//     const [drawerWidth, setDrawerWidth] = React.useState(defaultDrawerWidth)
// }

const openedMixin = (theme: Theme): CSSObject => ({
  width: drawerWidth,
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.enteringScreen,
  }),
  overflowX: 'hidden',
});

const closedMixin = (theme: Theme): CSSObject => ({
  transition: theme.transitions.create('width', {
    easing: theme.transitions.easing.sharp,
    duration: theme.transitions.duration.leavingScreen,
  }),
  overflowX: 'hidden',
  width: `calc(${theme.spacing(7)} + 1px)`,
  [theme.breakpoints.up('sm')]: {
    width: `calc(${theme.spacing(8)} + 1px)`,
  },
});

const DrawerHeader = styled('div')(({ theme }) => ({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'flex-end',
  padding: theme.spacing(0, 1),
  // necessary for content to be below app bar
  ...theme.mixins.toolbar,
}));


const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    flexShrink: 0,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': openedMixin(theme),
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': closedMixin(theme),
    }),
  }),
);


export const Logo: React.FC<LogoProps> = ({collapsed}) => {
    return (  
             
        <div
        style={{ 
            display: "flex", 
            flexDirection: "row",
            justifyContent: "center",
            height: 60,
            maxHeight: 60,
            padding: "14px 0px 14px 0px",
        }}>
            <div 
            style={{
                display:'flex',
                flexDirection:'row',
                alignItems:"center",
            }}
            >
                <img
                src={logo}
                alt='enosis'/>
                
                {!collapsed && 
                ( <Typography
                style={{
                    fontWeight: 400,
                    fontSize: "18px",
                    margin: '2px',
                    color: theme.customTheme.Color.Primary.White,
                }}>
                    DRS
                </Typography>)}

                {!collapsed && 
                (<Typography                
                style={{
                    fontWeight: 400,
                    fontSize: "18px",
                    margin: '2px',
                    color: theme.customTheme.Color.OffWhite[5],
                    justifyItems: "center",

                }}> | </Typography>)}
                    
                {!collapsed && (<div 
                style={{
                    display: "flex", 
                    flexDirection: "column", 
                    justifyItems: "flex-start", 
                    margin: "5px"
                }} >                        
                    <Typography  
                    style={{ 
                        color: "#B4C5D9",
                        fontSize: 8
                    }}>
                        Desk Reservation
                    </Typography>
                    <Typography 
                    style={{ 
                        color: "#B4C5D9",
                        fontSize: 8,
                    }}>
                        System
                    </Typography>
                </div>)}
            </div>
        </div>
    );
}


export default function Sidebar({ children }: SidebarProps) {
  const theme = useTheme();
  const location = useLocation();
  const [open, setOpen] = React.useState(true);

  const toggleCollapse = () => {
    setOpen(!open);
  };

  const customTrigger = (
    <Button 
    onClick={toggleCollapse}
    style={{
      backgroundColor: "transparent",
      height: "22px",
      width: "22px",
      border: "transparent",
      padding: "2px",
    }}>
      {open ? <ChevronLeftIcon/> : <ChevronRightIcon/>}
    </Button>
  );

  return (
    <Box sx={{ display: 'flex' }}>
      <Drawer variant="permanent" open={open}>
        
        <Logo collapsed={!open}/>

        <List>
          {tablist.map((item, index) => (
            <ListItem 
            key={item.name} 
            disablePadding 
            sx={{ display: 'block' }}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}>
              <ListItemButton
                sx={{
                  minHeight: 48,
                  justifyContent: open ? 'initial' : 'center',
                  px: 2.5,
                }}
              >
                <ListItemIcon
                  sx={{
                    minWidth: 0,
                    mr: open ? 3 : 'auto',
                    justifyContent: 'center',
                  }}
                >
                  {item.icon}
                </ListItemIcon>
                <ListItemText primary={item.name} sx={{ opacity: open ? 1 : 0 }} />
              </ListItemButton>
            </ListItem>
          ))}
        </List>
        
        <Box 
            sx = {{ 
            position: "absolute",
            top: "35px",
            right: "-11px",
            zIndex: 1,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "22px", 
            width: "22px", 
            backgroundColor: theme.customTheme.Color.Primary.Dark, 
            borderRadius: "40px",
            border: "1px solid var(--Offwhite-Offwhite-1, #F9FAFB)"
            }}>
            {customTrigger}
        </Box>
        
      </Drawer>
      
        
      <Box component="main" sx={{ flexGrow: 1, p: 3, }}>
        {children}
      </Box>

      
    </Box>
  );
}
    