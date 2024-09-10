import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";
import Layout from "../../layout";
import theme from "../../theme";
import * as React from 'react';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import { createTheme, ThemeProvider, styled } from '@mui/material/styles';


const Header = () => {
    return (
        <Box 
        height= "118px"
        display= "flex"
        flexDirection= "column"
        borderBottom= "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)"
        padding= "32px"
        gap= "12px"
        bgcolor= {theme.palette.primary.main}
        boxShadow= {theme.shadows[1]}
        >
            <Typography className="Bold 24" color={theme.palette.primary.dark}>
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
    person: Person;
}

const PersonCard: React.FC<PersonProps> = ({person}) => {
    return (
        <Card>
            Person
        </Card>
    );
}

const Body = () => {

    const teamData = [
        {
            name: "sujit",
            designation: "sse",
            email: "sujitEmail",
            image: "img",
        },
        {
            name: "roy",
            designation: "se",
            email: "royEmail",
            image: "royImg",
        },
    ];
    return (   
        <Box> Body
{/* 
            {teamData.map((person, index) => {
                <PersonCard key={index} person={person} />
            })} */}
        </Box>


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
            >
                <Header/>

                <Body/>
            </Box>
        </Layout>
    );
}

export default Team;