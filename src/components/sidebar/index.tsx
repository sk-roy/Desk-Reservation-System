import * as React from 'react';
import { styled, useTheme, Theme, CSSObject } from '@mui/material/styles';
import Box from '@mui/material/Box';
import MuiDrawer from '@mui/material/Drawer';
import List from '@mui/material/List';
import Typography from '@mui/material/Typography';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link, useLocation } from 'react-router-dom';
import { tablist } from '../../route';
import { LogoProps, SidebarProps } from '../interface';
import { Button } from '@mui/material';
import theme from '../../theme';
import logo from "../../assets/icons/logo.svg"
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';


const drawerWidth = 210;

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

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
  ({ theme, open }) => ({
    width: drawerWidth,
    backgroundColor: theme.customTheme.Color.Primary.Dark,
    whiteSpace: 'nowrap',
    boxSizing: 'border-box',
    ...(open && {
      ...openedMixin(theme),
      '& .MuiDrawer-paper': {
        ...openedMixin(theme),
        backgroundColor: theme.customTheme.Color.Primary.Dark,
      },
    }),
    ...(!open && {
      ...closedMixin(theme),
      '& .MuiDrawer-paper': {
        ...closedMixin(theme),
        backgroundColor: theme.customTheme.Color.Primary.Dark,
      },
    }),
  }),
);


const Logo: React.FC<LogoProps> = ({collapsed}) => {
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

  return (
  <Box sx={{ display: 'flex', position: 'relative' }}>
    <Drawer variant="permanent" open={open} sx={{ zIndex: 2 }}>
      <Logo collapsed={!open} />
  
      <List>
        {tablist.map((item, index) => (
          <ListItem 
            key={item.name} 
            disablePadding 
            sx={{ display: 'block' }}
            component={Link}
            to={item.path}
            selected={location.pathname === item.path}
          >
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
              <ListItemText 
                primary={item.name} 
                className='Medium 13'
                sx={{ 
                  opacity: open ? 1 : 0, 
                  color: theme.customTheme.Color.OffWhite[5],
                }} 
              />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
  
    </Drawer>
  
    <Box sx={{ flexGrow: 1, position: 'relative' }}>
      <Box component="main" sx={{zIndex: 1 }}>
        {children}
      </Box>

      <Box  
      sx={{ 
        position: "absolute",
        top: "35px",
        left: -11,
        zIndex: 3,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "22px", 
        width: "22px", 
        backgroundColor: theme.customTheme.Color.Primary.Dark, 
        borderRadius: "40px",
        border: "1px solid var(--Offwhite-Offwhite-1, #F9FAFB)"
      }}
    >
      <Button 
        onClick={toggleCollapse}
        style={{
          backgroundColor: "transparent",
          height: "22px",
          width: "22px",
          border: "transparent",
          padding: "2px",
        }}
      >
        {open ? <ArrowBackIcon sx={{color: theme.customTheme.Color.grey[3], height: "14px", width: "14px"}}/> 
              : <ArrowForwardIcon sx={{color: theme.customTheme.Color.grey[3], height: "14px", width: "14px"}}/>}
      </Button>
    </Box>
  </Box>
      
    </Box>
  );
}
    
