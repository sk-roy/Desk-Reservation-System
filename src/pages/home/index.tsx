import { Box, Button, Divider, Grid, IconButton, MenuItem, Select, Typography } from "@mui/material";
import CloseIcon from '@mui/icons-material/Close';
import React from "react";
import Layout from "../../layout";
import GoToOfficeImg from "../../components/images/Group 33.svg";
import FilterByMonthSelect from "./FilterByMonthSelect";
import HomeChart from "./HomeChart";
import { ReservationList } from "../../assets/data";
import theme from "../../theme";




interface Reservation {
  date: string;
  desk: number;
  room: number;
  floor: number;
}

interface ReservationProps {
  reservation: Reservation;
}

const FirstReservation: React.FC<ReservationProps> = ({ reservation }) => {
  return (
      <Box  // first reservation        
        sx={{
            '&:hover .cancel-button-first': {
                visibility: 'visible',
          },
        }}
        display="flex"
        flexDirection="row"
        justifyContent="space-between"
        bgcolor="#2E4AAE"
        boxShadow= "0px 6px 24px 0px #3355CF66"
        height="112px"
        width="100%"
        borderRadius="8px"
        paddingLeft="16px"
        paddingTop="18px"
        paddingRight="16px"
        paddingBottom="18px">

          <Box  
          display="flex"
          flexDirection="column"
          // bgcolor="#FFFFFF"
          // boxShadow= "0px 2px 4px 0px #3A414F0F"
          // border= "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)"
          // height="112px"
          // width="100%"
          gap="12px">
            <Box
            display="flex"
            flexDirection="column"
            justifyContent="space-between">
              <Typography
              fontSize="12px"
              fontWeight={600}
              color="#FFFFFF">
                {reservation.date}
              </Typography>
              <Typography
              fontSize="16px"
              fontWeight={700}
              color="#FFFFFF">
                Desk {reservation.floor * 100 + reservation.room} -0{reservation.desk}
              </Typography>
          </Box>

          <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          gap="6px">

            <Box // Floor 2
            borderRadius="6px"
            border= "1px solid var(--Greyscale-Grey-2, #8092A3)"
            bgcolor="transparent"
            justifyContent="center"
            paddingLeft="6px"
            paddingRight="6px"
            paddingTop="2px"
            paddingBottom="2px"
            >
              <Typography
              color="#B4C5D9"
              fontSize="12px"
              fontWeight={600}
              lineHeight="18px"
              height="18px"
              border="1px">
                Floor {reservation.floor}
              </Typography>
          </Box>

            <Box   //Room 205
            borderRadius="6px"
            border= "1px solid var(--Greyscale-Grey-2, #8092A3)"
            bgcolor="transparent"
            justifyContent="center"
            paddingLeft="6px"
            paddingRight="6px"
            paddingTop="2px"
            paddingBottom="2px"
            >
            <Typography
            color="#B4C5D9"
            fontSize="12px"
            fontWeight={600}
            lineHeight="18px"
            height="18px"
            border="1px">
              Room {reservation.room}
            </Typography>
            </Box>

            <Box // Desk 07
            borderRadius="6px"
            border= "1px solid var(--Greyscale-Grey-2, #8092A3)"
            bgcolor="transparent"
            justifyContent="center"
            paddingLeft="6px"
            paddingRight="6px"
            paddingTop="2px"
            paddingBottom="2px"
            >
            <Typography
            color="#B4C5D9"
            fontSize="12px"
            fontWeight={600}
            lineHeight="18px"
            height="18px"
            border="1px">
              Desk {reservation.desk}
            </Typography>
            </Box>
                </Box>
            </Box>

            <Box   // Cancel Button
            display="flex"
            flexDirection="row"
            alignItems="center">
            <IconButton
                className="cancel-button-first"
                sx={{
                    visibility: 'hidden',
                    fontSize: "14px",
                    bgcolor: "transparent",
                    color: "#FFFFFF",
                    padding: "8px",
                    borderRadius: "6px",
                    gap: "2px",
                    border: "1px solid #FFFFFF",
                }}>   
                <CloseIcon 
                sx={{
                    fontSize: "14px",
                    bgcolor: "transparent",
                    color: "#FFFFFF",
                }}/>
                Cancel
            </IconButton>
            </Box>
        </Box>
    );

}


const NextReservation: React.FC<ReservationProps> = ({reservation}) => {
  return (    
      
      <Box
      sx={{
          '&:hover': {
            borderColor: '#2E4AAE', 
          },
          '&:hover .cancel-button': {
              visibility: 'visible',
        },
      }}
      
      display="flex"
      flexDirection="row"
      justifyContent="space-between"
      bgcolor="#FFFFFF"
      boxShadow= "0px 2px 4px 0px #3A414F0F"
      border= "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)"
      height="112px"
      width="100%"
      borderRadius="8px"
      paddingLeft="16px"
      paddingTop="18px"
      paddingRight="16px"
      paddingBottom="18px">

          <Box  
          display="flex"
          flexDirection="column"
          // bgcolor="#FFFFFF"
          // boxShadow= "0px 2px 4px 0px #3A414F0F"
          // border= "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)"
          // height="112px"
          // width="100%"
          gap="12px">
              <Box
              display="flex"
              flexDirection="column"
              justifyContent="space-between">
                  <Typography
                  fontSize="12px"
                  fontWeight={600}
                  color="#2E4AAE">
                    {reservation.date}
                  </Typography>
                  <Typography
                  fontSize="16px"
                  fontWeight={700}
                  color="#212B36">                    
                    Desk {reservation.floor * 100 + reservation.room} -0{reservation.desk}
                  </Typography>
              </Box>

              <Box
              display="flex"
              flexDirection="row"
              justifyContent="flex-start"
              gap="6px">

                  <Box // Floor 2
                  borderRadius="6px"
                  bgcolor="#E8EDF5"
                  justifyContent="center"
                  paddingLeft="6px"
                  paddingRight="6px"
                  paddingTop="2px"
                  paddingBottom="2px"
                  >
                  <Typography
                  color="#4D667C"
                  fontSize="12px"
                  fontWeight={600}
                  lineHeight="18px"
                  height="18px"
                  border="1px">
                    Floor {reservation.floor}
                  </Typography>
                  </Box>

                  <Box   //Room 205
                  borderRadius="6px"
                  bgcolor="#E8EDF5"
                  justifyContent="center"
                  paddingLeft="6px"
                  paddingRight="6px"
                  paddingTop="2px"
                  paddingBottom="2px"
                  >
                  <Typography
                  color="#4D667C"
                  fontSize="12px"
                  fontWeight={600}
                  lineHeight="18px"
                  height="18px"
                  border="1px">
                    Room {reservation.room}
                  </Typography>
                  </Box>

                  <Box // Desk 07
                  borderRadius="6px"
                  bgcolor="#E8EDF5"
                  justifyContent="center"
                  paddingLeft="6px"
                  paddingRight="6px"
                  paddingTop="2px"
                  paddingBottom="2px"
                  >
                  <Typography
                  color="#4D667C"
                  fontSize="12px"
                  fontWeight={600}
                  lineHeight="18px"
                  height="18px"
                  border="1px">
                    Desk {reservation.desk}
                  </Typography>
                  </Box>                    
              </Box>
          </Box>

          <Box   // Cancel Button
          display="flex"
          flexDirection="row"
          alignItems="center">
          <IconButton
              className="cancel-button"
              sx={{
                  visibility: 'hidden',
                  fontSize: "14px",
                  bgcolor: "#E8EDF5",
                  color: "#4D667C",
                  padding: "8px",
                  borderRadius: "6px",
                  gap: "2px"
              }}>   
              <CloseIcon 
              sx={{
                  fontSize: "14px",
                  bgcolor: "#E8EDF5",
                  color: "#4D667C",
              }}/>
              Cancel
          </IconButton>
          </Box>
      </Box>
  );
}




const Home: React.FC = () => {
    return (
      <Layout>
          <Grid 
          container 
          padding="32px" 
          spacing="16px">
            <Grid    // Welcome
            item 
            xs={12} >   
              <Box
              display="flex"
              flexDirection="column"
              paddingBottom="8px"
              height="72px">
                <Typography
                color="#212B36"
                fontSize="24px"
                fontWeight={700}
                lineHeight="34px"
                height="34px">
                  ✋🏼 Welcome Back
                </Typography>
                <Typography
                color="#4D667C"
                fontSize="16px"
                fontWeight={500}
                lineHeight="24px"
                height="24px">
                  You are working from 🏠 home today
                </Typography>
              </Box>
            </Grid>

            <Grid // Ready to come office - Upcoming reservation
            item
            container
            xs={12}
            spacing="20px">
              <Grid  // Ready to come office - Attendence by reservation
              item
              xs={7.5}>
                <Box
                display="flex"
                flexDirection="column"
                height="748px"
                gap="20px">
                  <Box  // Ready to come office             
                  sx={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-around",
                    backgroundImage: 'linear-gradient(264.35deg, #2D80E2 -3.28%, #2456A0 103.35%)',
                    boxShadow: '0px 5px 34px 0px #2D7DDD7A',
                    height: "226px",
                    borderRadius: "8px",
                    paddingLeft: "28px",
                    paddingTop: "32px",
                    paddingRight: "28px",
                    paddingBottom: "32px",
                  }}>
                    <Box    // Frame15
                    width="294px"
                    height="138px"
                    display="flex"
                    flexDirection="column"
                    gap="28px"
                    > 
                      <Box //Frame13
                        display="flex"
                        height="72"
                        flexDirection="column"
                        gap="8px"
                      >                   
                        <Typography
                        color="#FFFFFF"
                        fontSize="16px"
                        fontWeight={700}
                        lineHeight="24px"
                        height="24px">
                          Ready to Come at Office?
                        </Typography>
                        <Typography
                        color="#C7D3E1"
                        fontSize="13px"
                        fontWeight={500}
                        lineHeight="20px"
                        height="40px">
                          Let’s check desk availability and reserve a suitable desk for you
                        </Typography>
                      </Box>
                      <Button
                      style={{
                        color: "#2E4AAE",
                        fontSize: "13px",
                        fontWeight: 600,
                        height: "38px",
                        width: "146px",
                        borderRadius: "6px",
                        border: "1px",
                        backgroundColor: "#FFFFFF",
                        boxShadow: "0px 1px 4px 0px #4C577314",
                        textTransform: "none",
                      }}>
                        Check Availability
                      </Button>
                    </Box>  

                    <img    // Group33
                    alt="grp33"
                    src={GoToOfficeImg}
                    height="170px"
                    width="274px">
                    </img>
                  </Box>

                  <Box // Attendence by reservation
                  bgcolor="#FFFFFF"
                  height="502px"
                  borderRadius="8px"
                  border="1px solid var(--Offwhite-Offwhite-3, #E8EDF5)"
                  padding="24px"
                  gap="24px"
                  boxShadow= "0px 2px 4px 0px #3A414F0F"
                  display="flex"
                  flexDirection="column">
                    <Box   // Attendence 1
                    gap="20px"
                    height="24px"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between">
                      <Box   // Attendence 1.1.1
                      width="506px"
                      gap="10px"
                      display="flex"
                      flexDirection="row">                      
                        <Typography
                        color="#4D667C"
                        fontSize="16px"
                        fontWeight={700}
                        lineHeight="24px"
                        height="24px">
                          Attendance by Reservation
                        </Typography>

                        <Box    // Attendence 1.1.2
                        height="22px"
                        // width="168px"
                        borderRadius="6px"
                        border= "1px solid var(--Offwhite-Offwhite-4, #C7D3E1)"
                        bgcolor="#F9FAFB"
                        justifyContent="center"
                        paddingLeft="4px"
                        paddingRight="4px"
                        >
                          <Typography
                          color={theme.palette.grey[400]}
                          fontSize="12px"
                          fontWeight={500}
                          lineHeight="18px"
                          height="18px"
                          border="1px">
                            Last updated: 08 Feb, 2023
                          </Typography>
                        </Box>

                      </Box>
                      
                      <FilterByMonthSelect/> 
                    </Box>
                    
                    <Box  // Attendence 2 - Area Chart
                    height="296px"
                    width="100%">
                      <HomeChart/>
                    </Box>
                    
                    <Box   // Attendence 3
                    height="86px"
                    bgcolor="#E8EDF5"
                    borderRadius="10px"
                    paddingLeft="18px"
                    paddingTop="20px"
                    paddingRight="18px"
                    paddingBottom="20px"
                    gap="40px"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between">
                      <Box
                      display="flex"
                      flexDirection="column"
                      width="144px"
                      height="50px">
                        <Typography
                        fontSize="13px"
                        fontWeight={600}
                        color="#6C859B">
                          Total Booking
                        </Typography>

                        <Typography
                        fontSize="18px"
                        fontWeight={600}
                        color="#212B36">
                          32
                        </Typography>
                      </Box>        
                      <Divider orientation="vertical" flexItem />                    
                      <Box
                      display="flex"
                      flexDirection="column"
                      width="144px"
                      height="50px">
                        <Typography
                        fontSize="13px"
                        fontWeight={600}
                        color="#6C859B">
                          Total Attencence
                        </Typography>
                        
                        <Typography
                        fontSize="18px"
                        fontWeight={600}
                        color="#212B36">
                          25
                        </Typography>
                      </Box>
                      <Divider orientation="vertical" flexItem />
                      <Box
                      display="flex"
                      flexDirection="column"
                      width="144px"
                      height="50px">
                        <Typography
                        fontSize="13px"
                        fontWeight={600}
                        color="#6C859B">
                          Utilisation
                        </Typography>
                        
                        <Typography
                        fontSize="18px"
                        fontWeight={600}
                        color="#212B36">
                          82%
                        </Typography>
                      </Box>
                    </Box>
                  </Box>
                </Box>              
              </Grid>
              
              <Grid  // Upcoming reservation
              item
              xs={4.5}>
                <Grid container
                sx={{
                  height: "748px",
                  borderRadius: "8px",
                  padding: "24px",
                  gap: "20px",
                  bgcolor: "#FFFFFF",
                  border: "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)",
                  boxShadow: "0px 2px 4px 0px #3A414F0F",
                }}>
                  <Grid  // Upcoming reservation 1
                  item xs={12}>
                    <Box
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    height="24px">
                      <Typography
                      fontSize="16px"
                      fontWeight={700}
                      color="#4D667C">
                        Upcoming Reservation
                      </Typography>   

                      <FilterByMonthSelect/>
                    </Box>
                  </Grid>

                  <Grid    // Upcoming reservation 2     
                  item xs={12}>
                    <Box 
                    height="598px"
                    width="100%"
                    gap="12px"
                    display="flex"
                    flexDirection="column"
                    sx={{
                      overflow: 'auto', // Hide the scrollbar
                      '&::-webkit-scrollbar': {
                        display: 'none',
                      },
                    }}>

                      {ReservationList.map((reservation, index) => {
                        if (index === 0) {
                          return <FirstReservation key={index} reservation={reservation} />;
                        } else {
                          return <NextReservation key={index} reservation={reservation} />;
                        }
                      })}

 
                    </Box>
                  </Grid>
                  
                  <Grid     // Upcoming reservation 3 - See All Reservations
                  item xs={12}>
                      <Button
                      sx={{
                        color: "#4D667C",
                        width: "100%",
                        height: "38px",
                        backgroundColor: "#EEF3FA",
                        fontSize: "13px",
                        fontWeight: 600,
                        borderRadius: "6px",
                        borderColor: "transparent",
                        textTransform: "none",
                      }}>
                        See All Reservations
                      </Button>

                  <Grid/>
                </Grid>
              </Grid>
            </Grid>
          </Grid>
        </Grid>
    </Layout>
  );
};

export default Home;
