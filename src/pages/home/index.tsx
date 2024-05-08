import { Box, Button, Divider, Grid, MenuItem, Select, Typography } from "@mui/material";
import React from "react";
import Layout from "../../layout";
import GoToOfficeImg from "../../components/images/Group 33.svg";
import { FirstReservation, NextReservation } from "./Reversations";
import FilterByMonthSelect from "./FilterByMonthSelect";
import HomeChart from "./HomeChart";

const Home = () => {
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
                    <button
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

                    }}>
                      Check Availability
                    </button>
                  </Box>  

                  <img    // Group33
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
                        color="#8092A3"
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

                  {/* <Box  display="flex" flexDirection="column" width="142px" borderRadius="4px" paddingLeft="8px" paddingRight="8px" paddingTop="5px" paddingBottom="5px" boxShadow= "0px 2px 14px 0px #3A414F29" gap="2px">
                    <Typography fontSize="10px" fontWeight={500} lineHeight="14px" color="#6C859B"> Mon, 05 Jan, 2024 </Typography>
                    <Typography fontSize="12px" fontWeight={700} lineHeight="18px" color="#2E4AAE"> Attendance: 126/205 </Typography>
                  </Box> */}
                  
                  <Box  // Area Chart
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
                      display: 'none', // Hide the scrollbar for Webkit browsers (Chrome, Safari)
                    },
                  }}>
                    <FirstReservation/>
                    <NextReservation/>
                    <NextReservation/>
                    <NextReservation/>
                    <NextReservation/>
                    <NextReservation/>
                    <NextReservation/>
                    <NextReservation/>
                    <NextReservation/>
                  </Box>
                </Grid>
                
                <Grid     // Upcoming reservation 3 - See All Reservations
                item xs={12}>
                    <button
                    style={{
                      color: "#4D667C",
                      width: "100%",
                      height: "38px",
                      backgroundColor: "#EEF3FA",
                      fontSize: "13px",
                      fontWeight: 600,
                      borderRadius: "6px",
                      borderColor: "transparent"
                    }}>
                      See All Reservations
                    </button>

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
