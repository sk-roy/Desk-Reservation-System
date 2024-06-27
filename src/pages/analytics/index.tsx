import React from "react";
import Layout from "../../layout";
import { Box, Button, Divider, Typography, MenuItem, Select, FormControl } from "@mui/material";
import GiftIcon from "../../components/images/AnalyticsPage/AnalyticsGift.svg";
import UserIcon from "../../components/images/AnalyticsPage/AnalyticsUserIcon.svg";
import ReservationIcon from "../../components/images/AnalyticsPage/AnalyticsReservationIcon.svg";
import UtilisationIcon from "../../components/images/AnalyticsPage/AnalyticsUtilisationIcon.svg";
import ArrowUpwardIcon from '@mui/icons-material/ArrowUpward';
import ArrowDownwardIcon from '@mui/icons-material/ArrowDownward';
import BarChart from "./BarChart";
import PieChart from "./PieChart";
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import AreaChart from "./AreaChart";
import theme from "../../theme";
import { green } from "@mui/material/colors";
import Sidebar from "../../components/sidebar";
import { SelectDeptProps, StringComponentProps, UserCardProps } from "../../components/interface";


  
const SelectDept: React.FC<SelectDeptProps> = ({ department }) => {
    const renderValue = (value: any) => {
        return value ? value : department;
    };

    return (
        <FormControl>
        <Select
            renderValue={renderValue}
            displayEmpty
            sx={{
            height: '38px',
            width: '252px',
            borderRadius: '6px',
            paddingTop: '9px',
            paddingRight: '16px',
            paddingBottom: '9px',
            paddingLeft: '16px',
            gap: '6px',
            bgcolor: '#EEF3FA',
            color: '#4D667C',
            }}
        >
            <MenuItem value={'Human Research'}>Human Research</MenuItem>
        </Select>
        </FormControl>
    );
};
  

const HeaderAnalysis = () => {
    return (   
        <>  
            <Box  // Header1
            display="flex"
            flexDirection="column"
            height="72"
            width="100%"
            paddingBottom="8px"
            gap="6px">
                <Typography className="Bold 24">
                    Analytics
                </Typography>

                <Typography className="Medium 16">
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
                <SelectDept department="Select Department"/>
                <SelectDept department="Select Date Range"/>
                <SelectDept department="Select Weekdays"/>
                <SelectDept department="Select Floor"/>
                <Button
                style={{
                    width: "100px",
                    height: "38px",
                    borderRadius: "6px",
                    backgroundColor: "#2E4AAE",
                    textTransform: "none",
                }}>                                                    
                    <Typography
                    fontSize="13px"
                    fontWeight={600}
                    color="white">
                        Apply Filter
                    </Typography>
                </Button>            
            </Box>
        </>   
    );
}

const BodyPart1Analysis = () => {
    return (
        <>
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
                        className="Bold 16"
                        color="#E9974A">
                            3 Holidays this month
                        </Typography>
                    </Box>
                    <Button  // Update Hol
                        sx={{                            
                        height: "30px",
                        width: "114px",
                        borderRadius: "6px",
                        backgroundColor: "#2E4AAE",
                        textTransform: "none",
                    }}>
                        <Typography
                        fontSize={12}
                        fontWeight={600}
                        color="#FFFFFF">
                            Update Holidays
                        </Typography>
                    </Button>
                </Box>
        </>
    );
}



const UserCard: React.FC<UserCardProps> = ({text, data, data2}) => {
    return (        
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
            src={(text === 'USER') ? UserIcon : (text === 'RESERVATION') ? ReservationIcon : UtilisationIcon}
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
                    {text}
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
                        {data}
                    </Typography>                                    
                    <Box
                    display="flex"
                    flexDirection="row"
                    height="22px"
                    width="56px"
                    gap="4px">
                        {data2 >= 0 && <Box
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
                        </Box>}

                        
                        {data2 < 0 && <Box
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
                        </Box>}

                        {text !== "UTILISATION" && 
                        (data2 >= 0 && <Typography
                        paddingTop="2px"
                        className="Bold 12"
                        color= "var(--Alert-Green, #2CA066)">
                            +{data2}%
                        </Typography>)}
                        
                        {text !== "UTILISATION" && 
                        (data2 < 0 && <Typography
                        paddingTop="2px"
                        className="Bold 12"
                        color= "var(--Alert-Red, #D34040)">
                            {data2}%
                        </Typography>)}

                    </Box>                                       
                </Box>
            </Box>

        </Box>
    );
}

const BodyPart2Analysis = () => {
    return (
        <>            
            <Box   // Body 2
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            height="100px"
            width="100%"
            gap="20px">
                <UserCard text="USER" data2={34} data={75}/>
                <UserCard text="RESERVATION" data2={-12} data={725}/>
                <UserCard text="UTILISATION" data2={24} data={715}/>
            </Box>
        </>
    );
}

const BodyPart3ChartsAnalysis = () => {
    return (
        <>            
            <Box   // Body 3
            display="flex"
            flexDirection="row"
            justifyContent="space-between"
            height="446px"
            width="100%"
            gap="20px"
            >                    
                <Box  // Users By Weekdays
                display="flex"
                flexDirection="column"
                justifyContent="space-between"
                // height="446px"
                width="65%"
                maxWidth="65%"
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
                    </Box>                            
                    
                    <BarChart/>
                    <WeekBar/>

                </Box>
                <Box  // Pie Chart
                display="flex"
                flexDirection="column"
                justifyContent="start"
                // height="446px"
                width="35%"
                maxWidth="35%"
                color="#FFFFFF"
                border= "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)"
                borderRadius="8px"
                padding="24px"
                gap="80px"
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
                            Utilisation by Floor
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
                    </Box>   

                    <PieChart/>
                </Box>
            </Box>
        </>
    );
}


const ButtonUserTimeLine: React.FC<StringComponentProps> = ({text}) => {
    return (    
        <Button
        sx= {{
            height: "30px",
            borderRadius: "6px",
            py: "6px",
            px: "12px",
            color: "#4D667C",
            bgcolor: "#EEF3FA",
            textTransform: "none",
        }}>
            <Typography className="Semi Bold 12">{text}</Typography>
        </Button>
    );
}

const WeekBar = () => {
    return (        
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
            htmlColor={theme.palette.grey[300]}
            sx={{
                height: "18px",
                width: "18px",
                borderRadius: "20px",
                border: "1px solid var(--Offwhite-Offwhite-4, #C7D3E1)",
                padding: "3px",
                bgcolor: "#F9FAFB",
            }}/>

            <Typography
            className="Semi Bold 12"
            color={theme.palette.grey[300]}>
                Week 1, Jan 2024
            </Typography>
            <Typography
            className="Semi Bold 12"
            color={theme.palette.grey[300]}>
                Week 2, Jan 2024
            </Typography>

            <ArrowForwardIcon            
            htmlColor={theme.palette.grey[300]}
            sx={{
                height: "18px",
                width: "18px",
                borderRadius: "20px",
                border: "1px solid var(--Offwhite-Offwhite-4, #C7D3E1)",
                padding: "3px",
                bgcolor: "#F9FAFB",
            }}/>
        </Box> 
    );
}

const FooterAnalysis: React.FC<UserCardProps> = ({text, data, data2}) => {
    return (
        <Box   // Total Booking
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        height="64px"
        width="306px"
        gap="20px">
            <img
            src={(text === 'Total Booking') ? UserIcon : (text === 'Total Attendence') ? ReservationIcon : UtilisationIcon}
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
            width="245px"
            height="100%"
            gap="4px">
                <Typography
                className="Bold 16"
                color="#6C859B">
                    {text}
                </Typography>
                <Box
                display="flex"
                flexDirection="row"
                justifyContent="flex-start"
                alignItems="center"
                height="36px"
                width="254px"
                gap="10px">
                    {text !== 'UTILISATION' && <Typography
                    className="Bold 24"
                    color="#212B36">
                        {data}
                    </Typography>}     
                    {text === 'UTILISATION' && <Typography
                    className="Bold 24"
                    color="#212B36">
                        {data}%
                    </Typography>}                                
                </Box>
            </Box>    
        </Box>
    );
}


const UserTimeline = () => {
    return (
        <>            
            <Box  
            display="flex"
            flexDirection="column"
            justifyContent="space-between"
            bgcolor="#FFFFFF"
            height="580px"
            width="100%"
            border= "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)"
            padding="24px"
            gap="20px"
            borderRadius="8px"
            boxShadow= "0px 2px 4px 0px #3A414F0F">
                <Box   // Body 4.1 - User timeline
                gap="20px"
                height="24px"
                display="flex"
                flexDirection="row"
                justifyContent="space-between">
                    <Box   
                    width="100%"
                    display="flex"
                    flexDirection="row"
                    justifyContent="space-between">
                        <Box   // Attendence 1.1.1
                        // width="506px"
                        gap="10px"
                        display="flex"
                        flexDirection="row">                      
                            <Typography
                            color={theme.palette.grey[400]}
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
                                color={theme.palette.grey[200]}
                                fontSize="12px"
                                fontWeight={500}
                                lineHeight="18px"
                                height="18px"
                                border="1px">
                                Last updated: 08 Feb, 2023
                                </Typography>
                            </Box>

                        </Box>
                        

                        <Box   // Buttons
                        gap="10px"
                        display="flex"
                        flexDirection="row"
                        justifyContent="flex-end">                      
                            
                            <Button
                            sx= {{
                                height: "30px",
                                width: "53px",
                                borderRadius: "6px",
                                py: "6px",
                                px: "12px",
                                color: "#FFFFFF",
                                bgcolor: "#2E4AAE",
                                textTransform: "none",
                            }}>
                                <Typography fontSize="12px">Total</Typography>
                            </Button>

                            <ButtonUserTimeLine text="Level 2" />
                            <ButtonUserTimeLine text="Level 3" />
                            <ButtonUserTimeLine text="Level 4" />
                            <ButtonUserTimeLine text="Level 5" />

                        </Box>
                    </Box>
                </Box>
                
                <Box  // Body 4.2 - Area Chart
                height="100%"
                width="100%">
                    <AreaChart/>
                </Box>  
                
                <WeekBar/>

                <Box   // Body 4.4
                display="flex"
                flexDirection="row"
                justifyContent="space-between"
                height="96px"
                width="100%"
                bgcolor="#FFFFFF"
                border= "1px solid var(--Offwhite-Offwhite-4, #C7D3E1)"
                borderRadius="10px"
                padding="16px"
                gap="38px"
                >       
                    <FooterAnalysis text='Total Booking' data={75} data2={1}/>    
                    <Divider orientation="vertical" flexItem /> 
                    <FooterAnalysis text='Total Attendence' data={75} data2={1}/>  
                    <Divider orientation="vertical" flexItem /> 
                    <FooterAnalysis text='UTILISATION' data={75} data2={1}/>   
                </Box> 
            </Box>
        </>
    );
}



const Analytics = () => {
    return (
        <Sidebar>
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
                    <HeaderAnalysis/>
                </Box>
                
                <Box   
                display="flex"
                flexDirection="column"
                height="1280px"
                width="100%"
                top="198px"
                left="220px"
                py="24px"
                px="32px"
                gap="20px">
                    <BodyPart1Analysis/>
                    <BodyPart2Analysis/>
                    <BodyPart3ChartsAnalysis/>
                    <UserTimeline/>  {/* Body Part 4 */}
                </Box>
            </Box>
        </Sidebar>
    );
}

export default Analytics;
