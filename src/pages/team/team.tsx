import Layout from "../../layout";
import { CustomStyles } from "../../theme";
import * as React from 'react';
import { TeamData } from "../../assets/data";
import { Button, Col, Image, Row, Typography } from "antd";
import { MailOutlined } from "@ant-design/icons";


const Header = () => {
    return (
        <div 
        style={{
            height: "118px",
            display: "flex",
            flexDirection: "column",
            borderBottom: "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)",
            padding: "32px",
            gap: "12px",
            backgroundColor: "#FFFFFF",
            boxShadow: '0px 2px 4px 0px #3A414F0F',
            // divShadow: {theme.shadows[1]},
        }}
        >
            <Typography style={CustomStyles.Typography.Bold24} color="#212B36">
                DRS Tech Team
            </Typography>
            <Typography style={CustomStyles.Typography.Medium16} color='#4D667C'>
                Total: 17 People
            </Typography>
        </div>
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
    
    const handleOpenMaildiv = () => {
        const emailAddress = 'mailto:${member.email}';
        window.location.href = emailAddress;
    };

    return (
        <div        
        style={{
            borderRadius: "8px",
            padding: "28px 14px 28px 14px",
            boxShadow: CustomStyles.Shadows[3],
            gap: "14px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            backgroundColor: CustomStyles.Color.Primary.White,
        }}>            
            <Image 
            alt={member.name}
            src={member.image}   
            style={{
                height: "72px",
                width: "72px",
                borderRadius: '30px',
                border: "1px solid var(--Offwhite-Offwhite-4, #C7D3E1)"
            }}/> 

            <Typography
            style={CustomStyles.Typography.Bold16}
            color="#212B36">
                {member.name}
            </Typography>
            <Typography
            style={CustomStyles.Typography.Medium13}
            color='#4D667C'>
                {member.designation}
            </Typography>
            <Button
            style={{
                padding: "4px 10px 4px 10px",
                borderRadius:"16px",
                backgroundColor: "#EEF3FA",
            }}
            onClick={handleOpenMaildiv}>
                <div style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "2px",
                }}>
                <MailOutlined 
                style={{paddingTop: "2px", height: "16px", width: "16px"}}
                color='#4D667C'/>

                <Typography
                style={CustomStyles.Typography.Regular12}
                color='#4D667C'>
                    {member.email}
                </Typography>
                </div>
            </Button>
        </div>
    );
}

const Body = () => {
    return ( 
        <div style={{ padding: "28px 32px 28px 32px" }}>            
        <Row gutter={[14, 14]}>       
             {TeamData.map((member, index) => {
                return (
                    <Col span={6}>
                        <PersonCard key={index} member={member} />    
                    </Col>
                );
            })}
        </Row>
        </div>

    );
}


const Team = () => {
    return (
        <Layout>
            <div
            style = {{
                width: "100%",
                // heightL "900px",
                display: "flex",
                flexDirection: "column",
                backgroundColor: "#F9FAFB",
            }}
            >
                <Header/>
                <Body/>
            </div>
        </Layout>
    );
}

export default Team;
