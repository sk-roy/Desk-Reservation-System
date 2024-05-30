import Layout from "../layout";
import { CustomStyles } from "../theme";
import * as React from 'react';
import { TeamData } from "../assets/data";
import { Button, Col, Image, Row, Typography } from "antd";
import { MailOutlined, PlusCircleFilled } from "@ant-design/icons";


const Header = () => {
    return (
        <div 
        style={{
            height: "118px",
            display: "flex",
            flexDirection: "column",
            backgroundColor: "#FFFFFF",
            boxShadow: CustomStyles.Shadows[1],
        }}
        >
            <div
            style={{                    
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-between",
                height: "82px",
                border: "0px 0px 1px 0px",
                padding: "16px 28px 16px 28px",
                gap: "16px"
            }}>
                <div style={{
                    display: "flex",
                    flexDirection: "column",
                    height: "50px",
                    gap: "2px",
                }}>
                    <Typography style={CustomStyles.Typography.Bold18} color={CustomStyles.Color.Primary.Dark}>
                        Locations
                    </Typography>
                    <Typography style={CustomStyles.Typography.Medium13} color={CustomStyles.Color.grey[4]}>
                        2 Locations, 254 Desks
                    </Typography>

                </div>
                <div>User Profile</div>

            </div>
            <div style={{
                display: "flex",
                flexDirection: "row",
                alignItems: "flex-start",
                height: "36px",
                padding: "0px 28px 0px 28px",
                gap: "24px",
                opacity: "0px",
                backgroundColor: CustomStyles.Color.Primary.White,
            }}>
                <Button 
                style={{
                    padding: "4px 0px 12px 0px",
                    border: "0px",
                    borderRadius: "0px",
                    borderBottom: "2px solid var(--Primary-Blue, #2E4AAE)",
                    height: "36px",
                }}>
                    <Typography style={CustomStyles.Typography.SemiBold13} color={CustomStyles.Color.Primary.Blue}>
                        Headquarter (76)
                    </Typography>
                </Button>
                <Button 
                style={{
                    padding: "4px 0px 12px 0px",
                    border: "0px",
                    // borderBottom: "2px solid var(--Primary-Blue, #2E4AAE)",
                    height: "36px",
                }}>
                    <Typography style={CustomStyles.Typography.SemiBold13} color={CustomStyles.Color.Primary.Blue}>
                    Development Hub (180)
                    </Typography>
                </Button>
                <Button 
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    padding: "4px 0px 12px 0px",
                    border: "0px",
                    // borderBottom: "2px solid var(--Primary-Blue, #2E4AAE)",
                    height: "36px",
                    gap: "6px",
                }}>
                    <PlusCircleFilled 
                    style={{
                        height: "18px",
                        width: "18px",
                        paddingTop: "4px",
                        color: CustomStyles.Color.Primary.Blue,
                        // border: `1.5px solid var(--Primary-Blue, #2E4AAE)`,

                    }}/>
                    <Typography style={CustomStyles.Typography.SemiBold13} color={CustomStyles.Color.Primary.Blue}>
                        New Location
                    </Typography>
                </Button>

            </div>

        </div>
    );
}

const HeadquarterHeader = () => {
    return (
        <div
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "150px",
            width: "100%",
            padding: "32px",
            gap: "24px",
            backgroundColor: CustomStyles.Color.OffWhite[3],
        }}>
            <div
            style={{
                // width: "86px",
                height: "86px",
                padding: "24px",
                gap: "10px",
                borderRadius: "14px",
                backgroundColor: CustomStyles.Color.Primary.Blue,
            }}>
                <Typography 
                style={{
                    font: 'Inter',
                    fontSize: "28px",
                    fontWeight: 700,
                    // lineHeight: "38px",
                    textAlign: "center",
                    color: CustomStyles.Color.Primary.White,
                }}>HQ</Typography>
            </div>
            <div 
            style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                height: "86px",
                width: "679px",
                gap: "10px",
            }}>
                <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "flex-start",
                    height: "50px",
                    gap: "2px",
                }}>
                    <Typography style={CustomStyles.Typography.Bold18} color={CustomStyles.Color.Primary.Dark}>Headquarter</Typography>
                    <Typography style={CustomStyles.Typography.SemiBold14} color={CustomStyles.Color.grey[4]}>Gulshan 1, Dhaka, Bangladesh (GMT+6)</Typography>
                </div>
            </div>
            <div
            style={{
                width: "297px",
                backgroundColor: "gray",
            }}>
                Hello
            </div>
        </div>
    );
}

const TableHeader = () => {
    return (
        <div
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            height: "64px",
            padding: "24px 32px 8px 32px",
            gap: "40px",
            backgroundColor: "gray",
            width: "100%",
        }}>
            TableHeader
        </div>
    );
}

const Table = () => {
    return (
        <div
        style={{
            padding: "24px 32px 8px 32px",
            backgroundColor: "gray",
            height: "466px",
            width: "100%",
        }}>
            Table
        </div>
    );
}

const Body = () => {
    return (
        <div 
        style={{
            padding: "16px 28px 16px 28px",
        }}>
            <div style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                // width: '1174px',
                height: '730px',
                // marginTop: '142px',
                // marginLeft: '238px',
                padding: '0px 0px 114px 0px',
                borderRadius: '8px 0px 0px 0px',
                boxShadow: CustomStyles.Shadows.Elevation1,
                border: `1px solid ${CustomStyles.Color.OffWhite[4]}`,
                backgroundColor: CustomStyles.Color.Primary.White,

            }}>
                <HeadquarterHeader/>
                <TableHeader/>
                <Table/>
            </div>
            
        </div>
    );    
}


const Location = () => {
    return (
        <Layout>
            <div
            style = {{
                width: "100%",
                // heightL "900px",
                display: "flex",
                flexDirection: "column",
                backgroundColor: CustomStyles.Color.OffWhite[1],
            }}
            >
                <Header />
                <Body/>
            </div>
        </Layout>
    );
}

export default Location;
