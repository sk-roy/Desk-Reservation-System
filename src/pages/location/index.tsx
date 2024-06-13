import CustomLayout from "../../layout";
import { CustomStyles } from "../../theme";
import * as React from 'react';
import { Avatar, Button, Col, ConfigProvider, Space, Table, TableProps, Typography } from "antd";
import { PlusCircleFilled } from "@ant-design/icons";
import InfoCircleIcon from "../../components/icons/InfoCircle";
import CalenderIcon from "../../components/icons/CalenderIcon";
import Edit03Icon from "../../components/icons/Edit03Icon";
import PlusCircleIcon from "../../components/icons/PlusCircleIcon";
import DeleteButton from "../../components/buttons/DeleteButton";
import EditButton from "../../components/buttons/EditButton";
import UpDownArrowIcon from "../../components/icons/UpDownArrowIcon";
import { NewLocationDrawer } from "./Drawers";
const { Text } = Typography;

const Header = () => {
    const [open, setOpen] = React.useState(false);
  
    const showDrawer = () => {
      setOpen(true);
    };
  
    const onClose = () => {
      setOpen(false);
    };

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
                alignItems: "center",
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
                <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center",
                    width: "160px",
                    height: "36px",
                    borderRadius: "24px",
                    border: `1px solid ${CustomStyles.Color.OffWhite[4]}`,
                    backgroundColor: CustomStyles.Color.Primary.White,
                    padding: "6px 10px 6px 6px",
                    gap: "6px",
                }}>
                    <Avatar style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "30px",
                        backgroundColor: CustomStyles.Color.Alert.Green,
                    }}>B</Avatar>
                    <Text style={CustomStyles.Typography.SemiBold13}>Brian O’Conor</Text>
                    <UpDownArrowIcon />
                </div>

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
                
                <>
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
                    }}
                    onClick={showDrawer}>
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
                    <NewLocationDrawer onClose={onClose} open={open}/>
                </>

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
                minWidth: "86px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "14px",
                backgroundColor: CustomStyles.Color.Primary.Blue,
            }}>
                <Typography 
                style={{
                    font: 'Inter',
                    fontSize: "28px",
                    fontWeight: 700,
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
                    <Typography style={CustomStyles.Typography.SemiBold14} color={CustomStyles.Color.grey[4]}> Gulshan 1, Dhaka, Bangladesh (GMT+6)</Typography>
                </div>
                <div
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    gap: "6px",
                }}>
                    <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        alignItems: "center",
                        height: "26px",
                        borderRadius: "8px",
                        padding: '3px 8px 3px 8px',
                        gap: "4px",
                        backgroundColor: CustomStyles.Color.OffWhite[1],
                        border: `1px solid ${CustomStyles.Color.OffWhite[4]}`,
                    }}>                            
                        <Text style={CustomStyles.Typography.SemiBold13}> 15 Holidays </Text>
                        <InfoCircleIcon />
                    </div>
                    <div
                    style={{
                        display: "flex",
                        flexDirection: "row",
                        justifyContent: "space-between",
                        height: "26px",
                        borderRadius: "8px",
                        padding: '3px 8px 3px 8px',
                        gap: "4px",
                        backgroundColor: CustomStyles.Color.OffWhite[1],
                        border: `1px solid ${CustomStyles.Color.OffWhite[4]}`,
                    }}>                            
                        <Text style={CustomStyles.Typography.SemiBold13}> Next Holiday: 21 Feb 2024 </Text>
                    </div>
                </div>
            </div>
            <div
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                alignItems: "center",
                width: "297px",
                gap: "10px",
            }}>
                <Button
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: "8px",
                    padding: "9px 16px 9px 14px",
                    gap: "6px",
                    backgroundColor: CustomStyles.Color.Primary.White,
                    border: `1px solid ${CustomStyles.Color.OffWhite[3]}`,
                    boxShadow: CustomStyles.Shadows.Elevation1,
                }}>
                    <CalenderIcon />                    
                    <Typography 
                    style={{
                        font: 'Inter',
                        fontSize: "13px",
                        fontWeight: 600,
                        lineHeight: "20px",
                        textAlign: "center",
                        letterSpacing: "-0.01em",
                        color: CustomStyles.Color.grey[3],


                    }}>Update Holidays</Typography>
                </Button>
                <Button
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: "8px",
                    padding: "9px 16px 9px 14px",
                    gap: "6px",
                    backgroundColor: CustomStyles.Color.Primary.Blue,
                    border: `1px solid ${CustomStyles.Color.OffWhite[3]}`,
                    boxShadow: CustomStyles.Shadows.Elevation1,
                }}>
                    <Edit03Icon color={CustomStyles.Color.Primary.White} />                    
                    <Typography 
                    style={{
                        font: 'Inter',
                        fontSize: "13px",
                        fontWeight: 600,
                        // lineHeight: "20px",
                        textAlign: "center",
                        letterSpacing: "-0.01em",
                        color: CustomStyles.Color.Primary.White,
                    }}> Edit Location </Typography>
                </Button>
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
            // height: "64px",
            padding: "24px 32px 8px 32px",
            gap: "40px",
            // backgroundColor: "gray",
            width: "100%",
        }}>
            <Typography style={CustomStyles.Typography.Bold16} color={CustomStyles.Color.Primary.Dark}> All Floors </Typography>
            
            <Button
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: "6px",
                    padding: "7px 12px 7px 10px",
                    gap: "6px",
                    backgroundColor: CustomStyles.Color.Primary.White,
                    border: `1px solid ${CustomStyles.Color.Primary.Blue}`,
                    boxShadow: CustomStyles.Shadows.Elevation1,
                }}>
                    <PlusCircleIcon color={CustomStyles.Color.Primary.Blue} fill={CustomStyles.Color.Primary.Blue}/>                    
                    <Typography 
                    style={{
                        font: 'Inter',
                        fontSize: "12px",
                        fontWeight: 600,
                        lineHeight: "18px",
                        textAlign: "center",
                        letterSpacing: "-0.01em",
                        color: CustomStyles.Color.Primary.Blue,
                    }}> New Floor </Typography>
                </Button>
        </div>
    );
}

interface DataType {
    key: number;
    name: string;
    roomCount: number;
    deskCount: number;
}

interface MyRecord {
    key: number;
}

  
const LocationTable = () => {
    const [hoveredRowId, setHoveredRowId] = React.useState<number | null>(null);
  
    const handleRowHover = (recordKey: number) => {
        setHoveredRowId(recordKey);
    };
    
    const columns: TableProps<DataType>['columns'] = [
        {
            title: 'Name',
            dataIndex: 'name',
            key: 'name',
            width: `${100 / 4}%`,
            render: (text) => <div 
            style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-start",
                gap: "14px",
            }}>                
                <Text
                style={{     
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    width: "40px",
                    borderRadius: "30px",
                    padding: "8px",
                    fontSize: '16px',
                    fontWeight: 700,
                    lineHeight: '24px',
                    color: CustomStyles.Color.Primary.Blue,
                    backgroundColor: CustomStyles.Color.OffWhite[3],
                }}>
                    {`L${text}`}
                </Text>
                <Text
                style={{     
                    display: "flex",
                    justifyContent: "flex-start",
                    alignItems: "center",
                    fontSize: '16px',
                    fontWeight: 700,
                    lineHeight: '24px',
                    color: CustomStyles.Color.Primary.Dark,
                }}>
                    {`Level-${text}`}
                </Text>
            </div>,
        },
        {
            title: 'Room Count',
            dataIndex: 'roomCount',
            key: 'roomCount',
            width: `${100 / 4}%`,
            render: (text) =>              
                <Text
                style={{     
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '20px',
                    color: CustomStyles.Color.grey[4],
                }}> {text} </Text>
        },
        {
            title: 'Desk Count',
            dataIndex: 'deskCount',
            key: 'deskCount',
            width: `${100 / 4}%`,
            render: (text) =>              
                <Text
                style={{     
                    display: "flex",
                    justifyContent: "start",
                    alignItems: "center",
                    fontSize: '14px',
                    fontWeight: 600,
                    lineHeight: '20px',
                    color: CustomStyles.Color.grey[4],
                }}> {text} </Text>
        },
        {
            dataIndex: 'action',
            key: 'action',
            width: `${100 / 4}%`,
            render: (_: any, record: DataType) => (
                <div
                style={{
                    display: "flex",
                    justifyContent: "flex-end",
                }}>
                    {record.key === hoveredRowId && (
                        <Space size="middle">
                            <EditButton />
                            <DeleteButton />
                        </Space>
                    )}
                    {record.key !== hoveredRowId && <div>{""}</div>}
                </div> 
            ),
        },
    ];
    
    const data: DataType[] = [
    {
        key: 1,
        name: '1',
        roomCount: 32,
        deskCount: 4,
    },
    {
        key: 2,
        name: '2',
        roomCount: 42,
        deskCount: 4,
    },
    {
        key: 3,
        name: '3',
        roomCount: 32,
        deskCount: 4,
    },
    ];

    return (
        <div
        style={{
            width: "100%",
        }}>
            
            <ConfigProvider
            theme={{
                token: {
                    // Seed Token
                    // borderRadius: 2,
                    

                    // Alias Token
                    // colorBgContainer: '#f6ffed',

                },
                components: {
                    Table: {                
                        headerBg: CustomStyles.Color.Primary.White,
                        headerColor: CustomStyles.Color.grey[2],
                    }
                }
            }}
        >
                <Table 
                columns={columns} 
                dataSource={data} 
                pagination={{hideOnSinglePage: true}}
                // style={{
                // backgroundColor: "transparent",
                // }}
                rowClassName={() => 'transparent-row'} 
                onRow={(record) => ({
                onMouseEnter: () => handleRowHover(record.key),
                onMouseLeave: () => handleRowHover(0),
                })}
                />
            </ConfigProvider>
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
                // padding: '0px 0px 114px 0px',
                borderRadius: '8px',
                boxShadow: CustomStyles.Shadows.Elevation1,
                border: `1px solid ${CustomStyles.Color.OffWhite[4]}`,
                backgroundColor: CustomStyles.Color.Primary.White,
            }}>
                <HeadquarterHeader/>
                <TableHeader/>
                <LocationTable/>
            </div>
            
        </div>
    );    
}


const Location = () => {
    return (
        <CustomLayout>
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
        </CustomLayout>
    );
}

export default Location;
