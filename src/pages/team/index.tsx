import { Box, Button, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Layout from "../../layout";
import theme from "../../theme";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import { TeamData } from "../../assets/data";
import MailOutlinedIcon from '@mui/icons-material/MailOutlined';


const Header = () => {
    return (
        <Box 
        height= "118px"
        display= "flex"
        flexDirection= "column"
        borderBottom= "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)"
        padding= "32px"
        gap= "12px"
        bgcolor= "#FFFFFF"
        boxShadow= {theme.shadows[1]}
        >
            <Typography className="Bold 24" color="#212B36">
                DRS Tech Team
            </Typography>
            <Typography className="Medium 16" color={theme.palette.grey[400]}>
                Total: 17 People
            </Typography>
        </Box>
    );
}

interface Person {
    name: string;
    designation: string;
    email: string;
    image: string;
}

interface PersonProps {
    member: Person;
}

const PersonCard: React.FC<PersonProps> = ({member}) => {
    
    const handleOpenMailbox = () => {
        const emailAddress = 'mailto:${member.email}';
        window.location.href = emailAddress;
    };

    return (
        <Card
        // bgcolor= {theme.palette.primary.main}
        // boxShadow= {theme.shadows[3]}
        sx={{
            borderRadius: "8px",
            py: "28px",
            px: "14px",
            gap: "14px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",

        }}>
            
            <CardMedia 
            component="img" 
            image={member.image}             
            // image={require("./../../assets/drsTeam${member.image}")} 
            alt="Your Image" 
            sx={{
                height: "72px",
                width: "72px",
                borderRadius: '30px',
                border: "1px solid var(--Offwhite-Offwhite-4, #C7D3E1)"
            }}/> 

            <Typography
            className="Bold 16"
            color="#212B36">
                {member.name}
            </Typography>
            <Typography
            className="Medium 13"
            color={theme.palette.grey[400]}>
                {member.designation}
            </Typography>
            <Button
            sx={{
                py:"4px",
                px:"10px",
                borderRadius:"16px",
                bgcolor: "#EEF3FA",
                textTransform: "none",
                gap: "6px"
            }}
            onClick={handleOpenMailbox}>
                <MailOutlinedIcon 
                sx={{height: "14px", width: "14px"}}
                htmlColor={theme.palette.grey[400]}/>

                <Typography
                className="Regular 12"
                color={theme.palette.grey[400]}>
                    {member.email}
                </Typography>
            </Button>
        </Card>
    );
}

const Body = () => {
    return (  
        <Grid
        container
        spacing="14px"
        sx={{
            py: "28px",
            px: "32px",
        }}>             
            {TeamData.map((member, index) => {
                return (
                    <Grid
                    item
                    xs={3}>   
                        <PersonCard key={index} member={member} />                
                    </Grid>
                );
            })}
        </Grid>
    );
}


const Team = () => {
    return (
        <Layout>
            <Box
            width="100%"
            height="900px"
            display="flex"
            flexDirection="column"
            bgcolor="#F9FAFB"
            >
                <Header/>
                <Body/>
            </Box>
        </Layout>
    );
}

export default Team;