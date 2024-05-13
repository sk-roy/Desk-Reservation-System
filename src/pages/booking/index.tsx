import React, { useState } from "react";
import Layout from "../../layout";
import { Box, MenuItem, Select, Typography } from "@mui/material";
import DateRangeFilter from "./DateRangeFilter";
import EnhancedTable from "./EnhancedTable";
import DataTable from "./DataTable";


const Booking = () => {

    return (
        <Layout>
            <Box 
            display='flex'
            flexDirection='column'
            // alignItems='flex-start'
            justifyContent='space-between'
            // spacing={1
            paddingLeft="32px"
            paddingTop="32px"
            paddingRight="32px"
            width="1220px"
            height='900px'
            gap="12px"
            >
                <Box    // Header
                display="flex"
                flexDirection="column"
                alignItems='space-between'
                // height="214px"
                gap='6px'
                >
                    <Box // Frame 45 - Booking
                    display="flex"
                    flexDirection="column"
                    height="72px"
                    width="1156px"
                    paddingBottom="8px"
                    gap="6px"
                    >          
                        <Typography
                        sx={{ 
                            fontWeight: '700',
                            fontSize: '24px' }}
                        color="#212B36"
                        fontFamily="Inter"
                        component="div"
                        >
                            Bookings
                        </Typography>
                        
                        <Typography
                        sx={{ 
                            fontWeight: '500',
                            fontSize: '16px' }}
                            color="#4D667C"
                            fontFamily="Inter"
                            component="div"
                        >
                            35 bookings this month
                        </Typography>
                    </Box>  
                    
                    <Box   // Booking action bar
                    display="flex"
                    flexDirection="row"
                    width="1156px"
                    gap="32px"
                    alignItems="space-between"
                    // bgcolor="gray"
                    // justifyContent='space-between'
                    >
                        <Box   // select date to filter - this month
                        display="flex"
                        flexDirection="row"
                        width="992px"
                        gap="10px"
                        alignItems="space-between"
                        >   
                            <DateRangeFilter /> 

                            <Select // dropdown
                            defaultValue={2}
                            style={{  
                                width: "140px",
                                height: "38px",
                                borderRadius: "6px",
                                border: "1px",
                                fontSize: "13px",
                                paddingLeft: "9px",
                                paddingTop: "16px",
                                paddingRight: "9px",
                                paddingBottom: "18px",
                                color: "#6C859B",
                            }}>
                                <MenuItem value={1}>This Week</MenuItem>
                                <MenuItem value={2}>This Month</MenuItem>
                                <MenuItem value={3}>Next 3 Months</MenuItem>
                                <MenuItem value={4}>Last Week</MenuItem>
                                <MenuItem value={5}>Last Month</MenuItem>
                                <MenuItem value={6}>Last 3 Months</MenuItem>
                            </Select>
                        </Box>
                        <Box>                                
                            <button   // Book-A-Car button
                            style={{
                                backgroundColor: "#2E4AAE",
                                fontSize: "14px",
                                fontWeight: "600",
                                color: "#FFFFFF",
                                paddingLeft: "14px",
                                paddingRight: "14px",
                                paddingTop: "7px",
                                paddingBottom: "7px",
                                borderRadius: "8px",
                                borderColor: "transparent",
                            }}>  
                                Book A Car
                            </button>
                        </Box>
                    </Box>
                </Box>
                <Box
                    height='1000px'
                >
                    <EnhancedTable/>
                </Box>
            </Box>
        </Layout>
    );
}

export default Booking;