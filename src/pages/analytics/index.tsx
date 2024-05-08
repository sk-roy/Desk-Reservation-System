import React from "react";
import Layout from "../../layout";
import { Box, MenuItem, Select, Typography, makeStyles } from "@mui/material";
import GiftIcon from "../../components/images/AnalyticsPage/AnalyticsGift.svg";
import UserIcon from "../../components/images/AnalyticsPage/AnalyticsUserIcon.svg";
import ReservationIcon from "../../components/images/AnalyticsPage/AnalyticsReservationIcon.svg";
import UtilisationIcon from "../../components/images/AnalyticsPage/AnalyticsUtilisationIcon.svg";
import UserPer from "../../components/images/AnalyticsPage/AnalyticsUserPer.svg";
import ReservationPer from "../../components/images/AnalyticsPage/AnalyticsReservationPer.svg";
import UtilisationPer from "../../components/images/AnalyticsPage/AnalyticsUtilisationPer.svg";
import HomeChart from "../home/HomeChart";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";


const Analytics = () => {
    return (
        <Layout>
            <Box
            display="flex"
            flexDirection="column">
                <Box    // Header
                display="flex"
                flexDirection="column"
                height="198px"
                width="100%"
                paddingTop="32px"
                paddingRight="32px"
                paddingBottom="24px"
                paddingLeft="32px"
                gap="16px"
                bgcolor="#FFFFFF"
                borderBottom="1px solid var(--Offwhite-Offwhite-3, #E8EDF5)"
                boxShadow= "0px 2px 4px 0px #3A414F0F"
                >
                    <Box  // Header1
                    display="flex"
                    flexDirection="column"
                    height="72"
                    width="100%"
                    paddingBottom="8px"
                    gap="6px">
                        <Typography
                        fontSize="24px"
                        fontWeight={700}
                        lineHeight="34px"
                        color="#212B36">
                            Analytics
                        </Typography>

                        <Typography
                        fontSize="16px"
                        fontWeight={500}
                        lineHeight="24px"
                        color="#4D667C">
                            154 Reservation this month
                        </Typography>

                    </Box>

                    <Box  // Header2 - Buttons
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    height="54px"
                    width="100%"
                    p="8px"
                    gap="8px"                  
                    border= "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)"
                    boxShadow= "0px 1px 4px 0px #4C577314"
                    >
                        <Select
                        sx={{
                            height: "38px",
                            width: "252px",
                            borderRadius: "6px",
                            paddingTop: "9px",
                            paddingRight: "16px",
                            paddingBottom: "9px",
                            paddingLeft: "16px",
                            gap: "6px",
                            bgcolor: "#EEF3FA",
                            color: "#4D667C",
                        }}>                                                    
                            <MenuItem value={1}>Human Research</MenuItem>
                            <MenuItem value={2}>Admin</MenuItem>
                            <MenuItem value={3}>Product</MenuItem>
                        </Select>
                        <Select
                        sx={{
                            height: "38px",
                            width: "252px",
                            borderRadius: "6px",
                            paddingTop: "9px",
                            paddingRight: "16px",
                            paddingBottom: "9px",
                            paddingLeft: "16px",
                            gap: "6px",
                            bgcolor: "#EEF3FA",
                            color: "#4D667C",
                        }}>                                                    
                            <MenuItem value={1}>Human Research</MenuItem>
                            <MenuItem value={2}>Admin</MenuItem>
                            <MenuItem value={3}>Product</MenuItem>
                        </Select>
                        <Select
                        sx={{
                            height: "38px",
                            width: "252px",
                            borderRadius: "6px",
                            paddingTop: "9px",
                            paddingRight: "16px",
                            paddingBottom: "9px",
                            paddingLeft: "16px",
                            gap: "6px",
                            bgcolor: "#EEF3FA",
                            color: "#4D667C",
                        }}>                                                    
                            <MenuItem value={1}>Human Research</MenuItem>
                            <MenuItem value={2}>Admin</MenuItem>
                            <MenuItem value={3}>Product</MenuItem>
                        </Select>
                        <Select
                        sx={{
                            height: "38px",
                            width: "252px",
                            borderRadius: "6px",
                            paddingTop: "9px",
                            paddingRight: "16px",
                            paddingBottom: "9px",
                            paddingLeft: "16px",
                            gap: "6px",
                            bgcolor: "#EEF3FA",
                            color: "#4D667C",
                        }}>                                                    
                            <MenuItem value={1}>Human Research</MenuItem>
                            <MenuItem value={2}>Admin</MenuItem>
                            <MenuItem value={3}>Product</MenuItem>
                        </Select>
                        <button
                        style={{
                            width: "100px",
                            height: "38px",
                            borderRadius: "6px",
                            // paddingTop: "9px",
                            // paddingRight: "18px",
                            // paddingBottom: "9px",
                            // paddingLeft: "18px",
                            backgroundColor: "#2E4AAE",
                        }}>                                                    
                            <Typography
                            fontSize="13px"
                            fontWeight={600}
                            color="white">
                                Apply Filter
                            </Typography>
                        </button>

                    
                    </Box>
                </Box>
                
                <Box    // Body
                display="flex"
                flexDirection="column"
                height="1130px"
                width="100%"
                top="198px"
                left="220px"
                py="24px"
                px="32px"
                gap="20px">
                    <Box   // Body 1
                    display="flex"
                    flexDirection="row"
                    justifyContent="center"
                    height="54px"
                    width="100%"
                    borderRadius="8px"
                    py="12px"
                    px="20px"
                    gap="16px"
                    bgcolor="#E9974A29">
                        <Box
                        display="flex"
                        flexDirection="row"
                        height={28}
                        // width={203}
                        gap="8px">
                            <img
                            src={GiftIcon}
                            alt="Gift"
                            height={28}
                            width={28}/>
                            
                            <Typography
                            fontSize={16}
                            fontWeight={700}
                            color="#E9974A">
                                3 Holidays this month
                            </Typography>
                        </Box>
                        <button  // Update Hol
                            style={{                            
                            height: "30px",
                            width: "114px",
                            borderRadius: "6px",
                            backgroundColor: "#2E4AAE",
                        }}>
                            <Typography
                            fontSize={12}
                            fontWeight={600}
                            color="#FFFFFF">
                                Update Holidays
                            </Typography>
                        </button>
                    </Box>

                    <Box   // Body 2
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    height="100px"
                    width="100%"
                    gap="20px">
                        <Box   // USER
                        display="flex"
                        flexDirection="row"
                        justifyContent="flex-start"
                        height="100%"
                        width="33.33%"
                        borderRadius="8px"
                        border="1px solid var(--Offwhite-Offwhite-3, #E8EDF5)"
                        padding="20px"
                        gap="18px"
                        color="#FFFFFF"
                        boxShadow= "0px 2px 4px 0px #3A414F0F">
                            <img
                            src={UserIcon}
                            alt="User"
                            height="60px"
                            width="60px"
                            style={{
                                borderRadius: "12px",
                                borderColor: "black",
                                border: "2px",
                            }}
                            />
                            <Box
                            display="flex"
                            flexDirection="column"
                            width="254"
                            height="100%"
                            gap="4px">
                                <Typography
                                fontSize="12px"
                                fontWeight={700}
                                color="#4D667C">
                                    USERS
                                </Typography>
                                <Box
                                display="flex"
                                flexDirection="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                height="36px"
                                width="254px"
                                gap="10px">
                                    <Typography
                                    fontSize="30px"
                                    fontWeight={700}
                                    color="#212B36">
                                        75
                                    </Typography>                                    
                                    <Box
                                    display="flex"
                                    flexDirection="row"
                                    height="22px"
                                    width="56px"
                                    gap="4px">
                                        <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        height= "22px"
                                        width= "22px"
                                        borderRadius="14px"
                                        padding="4px"
                                        bgcolor= "#2CA06626">
                                            <ArrowUpwardIcon
                                            sx={{
                                                height: "14px",
                                                width: "14px",
                                                color: "#2CA066",
                                            }}/>
                                        </Box>
                                        <Typography
                                        paddingTop="2px"
                                        fontSize="12px"
                                        fontWeight={700}
                                        lineHeight="18px"
                                        color= "var(--Alert-Green, #2CA066)">
                                            +34%
                                        </Typography>

                                    </Box>                                       
                                </Box>
                            </Box>

                        </Box>
                        <Box   // RESERVATION
                        display="flex"
                        flexDirection="row"
                        justifyContent="flex-start"
                        height="100%"
                        width="33.33%"
                        borderRadius="8px"
                        border="1px solid var(--Offwhite-Offwhite-3, #E8EDF5)"
                        padding="20px"
                        gap="18px"
                        color="#FFFFFF"
                        boxShadow= "0px 2px 4px 0px #3A414F0F">
                            <img
                            src={ReservationIcon}
                            alt="User"
                            height="60px"
                            width="60px"
                            style={{
                                borderRadius: "12px",
                                borderColor: "black",
                                border: "2px",
                            }}
                            />
                            <Box
                            display="flex"
                            flexDirection="column"
                            width="254"
                            height="100%"
                            gap="4px">
                                <Typography
                                fontSize="12px"
                                fontWeight={700}
                                color="#4D667C">
                                    RESERVATION
                                </Typography>
                                <Box
                                display="flex"
                                flexDirection="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                height="36px"
                                width="254px"
                                gap="10px">
                                    <Typography
                                    fontSize="30px"
                                    fontWeight={700}
                                    color="#212B36">
                                        214
                                    </Typography>
                                    <Box
                                    display="flex"
                                    flexDirection="row"
                                    height="22px"
                                    width="56px"
                                    gap="4px">
                                        <Box
                                        display="flex"
                                        flexDirection="column"
                                        alignItems="center"
                                        height= "22px"
                                        width= "22px"
                                        borderRadius="14px"
                                        padding="4px"
                                        bgcolor= "#D340401A">
                                            <ArrowDownwardIcon
                                            sx={{
                                                height: "14px",
                                                width: "14px",
                                                color: "#D34040",
                                            }}/>
                                        </Box>
                                        <Typography
                                        paddingTop="2px"
                                        fontSize="12px"
                                        fontWeight={700}
                                        lineHeight="18px"
                                        color= "var(--Alert-Red, #D34040)">
                                            -12%
                                        </Typography>

                                    </Box>                                  
                                </Box>
                            </Box>

                        </Box>
                        <Box   // UTILISATION
                        display="flex"
                        flexDirection="row"
                        justifyContent="flex-start"
                        height="100%"
                        width="33.33%"
                        borderRadius="8px"
                        border="1px solid var(--Offwhite-Offwhite-3, #E8EDF5)"
                        padding="20px"
                        gap="18px"
                        color="#FFFFFF"
                        boxShadow= "0px 2px 4px 0px #3A414F0F">
                            <img
                            src={UtilisationIcon}
                            alt="Utilisation"
                            height="60px"
                            width="60px"
                            style={{
                                borderRadius: "12px",
                                borderColor: "black",
                                border: "2px",
                            }}
                            />
                            <Box
                            display="flex"
                            flexDirection="column"
                            width="254"
                            height="100%"
                            gap="4px">
                                <Typography
                                fontSize="12px"
                                fontWeight={700}
                                color="#4D667C">
                                    UTILISATION
                                </Typography>
                                <Box
                                display="flex"
                                flexDirection="row"
                                justifyContent="flex-start"
                                alignItems="center"
                                height="36px"
                                width="254px"
                                gap="10px">
                                    <Typography
                                    fontSize="30px"
                                    fontWeight={700}
                                    color="#212B36">
                                        72%
                                    </Typography>

                                    <Box
                                    display="flex"
                                    flexDirection="column"
                                    alignItems="center"
                                    height= "22px"
                                    width= "22px"
                                    borderRadius="14px"
                                    padding="4px"
                                    bgcolor= "#2CA06626">
                                        <ArrowUpwardIcon
                                        sx={{
                                            height: "14px",
                                            width: "14px",
                                            color: "#2CA066",
                                        }}/>
                                    </Box>
                                </Box>
                            </Box>

                        </Box>
                    </Box>

                    <Box   // Body 3
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between"
                    height="346px"
                    width="100%"
                    gap="20px"
                    >
                        
                        <Box  // Users By Weekdays
                        display="flex"
                        flexDirection="column"
                        justifyContent="space-between"
                        height="346px"
                        width="65%"
                        borderRadius="8px"
                        padding="24px"
                        gap="18px"
                        color="#FFFFFF"
                        border= "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)"
                        boxShadow= "0px 2px 4px 0px #3A414F0F">
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
                                    Users By Weekdays
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
                                
                                {/* <FilterByMonthSelect/>  */}
                            </Box>                            
                            
                            <Box height="200px">
                                <BarChart/>
                            </Box>


                            
                            <Box   // Body 4.3
                            display="flex"
                            justifyContent="space-between"
                            flexDirection="row"
                            height="34px"
                            bgcolor="#E8EDF5"
                            width="100%"
                            borderRadius="6px"
                            padding="8px"
                            gap="8px">
                                <ArrowBackIcon
                                sx={{
                                    height: "18px",
                                    width: "18px",
                                    borderRadius: "20px",
                                    border: "1px solid var(--Offwhite-Offwhite-4, #C7D3E1)",
                                    padding: "3px",
                                    bgcolor: "#F9FAFB",
                                }}/>

                                <Typography
                                fontSize="12px"
                                fontWeight={600}
                                lineHeight="18px"
                                color="#6C859B"
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                }}
                                width="513px">
                                    Week 1, Jan 2024
                                </Typography>
                                <Typography
                                fontSize="12px"
                                fontWeight={600}
                                lineHeight="18px"
                                color="#6C859B"
                                sx={{
                                    display: "flex",
                                    flexDirection: "row",
                                    justifyContent: "center",
                                }}
                                width="513px">
                                    Week 2, Jan 2024
                                </Typography>

                                <ArrowForwardIcon
                                sx={{
                                    height: "18px",
                                    width: "18px",
                                    borderRadius: "20px",
                                    border: "1px solid var(--Offwhite-Offwhite-4, #C7D3E1)",
                                    padding: "3px",
                                    bgcolor: "#F9FAFB",
                                }}/>
                            </Box> 

                        </Box>
                        <Box  // Pie Chart
                        display="flex"
                        flexDirection="column"
                        height="346px"
                        width="35%"
                        color="#FFFFFF"
                        border= "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)"
                        borderRadius="8px"
                        padding="24px"
                        gap="32px"
                        boxShadow= "0px 2px 4px 0px #3A414F0F">
                            Pie Chart
                        </Box>
                    </Box>

                    <Box   // Body 4
                    display="flex"
                    flexDirection="column"
                    justifyContent="space-between"
                    bgcolor="#FFFFFF"
                    height="526px"
                    width="100%"
                    border= "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)"
                    padding="24px"
                    gap="20px"
                    boxShadow= "0px 2px 4px 0px #3A414F0F">
                        <Box   // Body 4.1 - User timeline
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
                                Users Timeline
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
                            
                            {/* <FilterByMonthSelect/>  */}
                        </Box>
                        
                        <Box  // Body 4.2 - Area Chart
                        height="296px"
                        width="100%">
                            <AreaChart/>
                        </Box>  
                        <Box   // Body 4.3
                        display="flex"
                        justifyContent="space-between"
                        flexDirection="row"
                        height="34px"
                        bgcolor="#E8EDF5"
                        width="100%"
                        borderRadius="6px"
                        padding="8px"
                        gap="8px">
                            <ArrowBackIcon
                            sx={{
                                height: "18px",
                                width: "18px",
                                borderRadius: "20px",
                                border: "1px solid var(--Offwhite-Offwhite-4, #C7D3E1)",
                                padding: "3px",
                                bgcolor: "#F9FAFB",
                            }}/>

                            <Typography
                            fontSize="12px"
                            fontWeight={600}
                            lineHeight="18px"
                            color="#6C859B"
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                            }}
                            width="513px">
                                Week 1, Jan 2024
                            </Typography>
                            <Typography
                            fontSize="12px"
                            fontWeight={600}
                            lineHeight="18px"
                            color="#6C859B"
                            sx={{
                                display: "flex",
                                flexDirection: "row",
                                justifyContent: "center",
                            }}
                            width="513px">
                                Week 2, Jan 2024
                            </Typography>

                            <ArrowForwardIcon
                            sx={{
                                height: "18px",
                                width: "18px",
                                borderRadius: "20px",
                                border: "1px solid var(--Offwhite-Offwhite-4, #C7D3E1)",
                                padding: "3px",
                                bgcolor: "#F9FAFB",
                            }}/>
                        </Box> 
                        <Box   // Body 4.4
                        height="96px"
                        bgcolor="gray"
                        >
                            Body 4.4
                        </Box> 
                    </Box>
                </Box>
            </Box>
        </Layout>
    );
}

export default Analytics;