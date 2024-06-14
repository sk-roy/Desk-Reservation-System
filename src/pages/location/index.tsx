import { useState } from "react";
import Layout from "../../layout";
import theme from "../../theme";
import { Avatar, Button, Typography } from "@mui/material";
import PlusCircleIcon from "../../components/icons/PlusCircleIcon";
import InfoCircleIcon from "../../components/icons/InfoCircle";
import CalenderIcon from "../../components/icons/CalenderIcon";
import Edit03Icon from "../../components/icons/Edit03Icon";
import UpDownArrowIcon from "../../components/icons/UpDownArrowIcon";
import TertiaryButton from "../../components/buttons/TertiaryButton";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { NewLocationDrawer } from "./Drawers";





const Header = () => {
    const [open, setOpen] = useState(false);
  
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
            boxShadow: theme.shadows[1],
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
                    <Typography className="Bold 18" color={theme.customTheme.Color.Primary.Dark}>
                        Locations
                    </Typography>
                    <Typography className="Medium 13" color={theme.customTheme.Color.grey[4]}>
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
                    border: `1px solid ${theme.customTheme.Color.OffWhite[4]}`,
                    backgroundColor: theme.palette.primary.main,
                    padding: "6px 10px 6px 6px",
                    gap: "6px",
                }}>
                    <Avatar style={{
                        width: "24px",
                        height: "24px",
                        borderRadius: "30px",
                        backgroundColor: theme.customTheme.Color.Alert.Green,
                    }}>B</Avatar>
                    <Typography className="Semi Bold 13"> Brian O’Conor </Typography>
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
                backgroundColor: theme.palette.primary.main,
            }}>
                <Button 
                style={{
                    padding: "4px 0px 12px 0px",
                    border: "0px",
                    borderRadius: "0px",
                    borderBottom: "2px solid var(--Primary-Blue, #2E4AAE)",
                    height: "36px",
                    textTransform: "none",
                }}>
                    <Typography className="Semi Bold 12" color={theme.customTheme.Color.Primary.Blue}>
                        Headquarter (76)
                    </Typography>
                </Button>
                <Button 
                style={{
                    padding: "4px 0px 12px 0px",
                    border: "0px",
                    // borderBottom: "2px solid var(--Primary-Blue, #2E4AAE)",
                    height: "36px",
                    textTransform: "none",
                }}>
                    <Typography className="Semi Bold 12" color={theme.customTheme.Color.Primary.Blue}>
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
                        textTransform: "none",
                    }}
                    onClick={showDrawer}>
                        <PlusCircleIcon color={theme.customTheme.Color.Primary.Blue} fill={theme.customTheme.Color.Primary.Blue}/>
                        <Typography className="Semi Bold 12" color={theme.customTheme.Color.Primary.Blue}>
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
            backgroundColor: theme.customTheme.Color.OffWhite[3],
        }}>
            <div
            style={{
                minWidth: "86px",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                gap: "10px",
                borderRadius: "14px",
                backgroundColor: theme.customTheme.Color.Primary.Blue,
            }}>
                <Typography 
                style={{
                    font: 'Inter',
                    fontSize: "28px",
                    fontWeight: 700,
                    textAlign: "center",
                    color: theme.palette.primary.main,
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
                    <Typography className="Bold 18" color={theme.customTheme.Color.Primary.Dark}>Headquarter</Typography>
                    <Typography className="Semi Bold 14" color={theme.customTheme.Color.grey[4]}> Gulshan 1, Dhaka, Bangladesh (GMT+6)</Typography>
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
                        backgroundColor: theme.customTheme.Color.OffWhite[1],
                        border: `1px solid ${theme.customTheme.Color.OffWhite[4]}`,
                    }}>                            
                        <Typography className="Semi Bold 13">15 Holidays</Typography>
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
                        backgroundColor: theme.customTheme.Color.OffWhite[1],
                        border: `1px solid ${theme.customTheme.Color.OffWhite[4]}`,
                    }}>                            
                        <Typography className="Semi Bold 13">Next Holiday: 21 Feb 2024</Typography>
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
                <TertiaryButton title="Update Holidays" icon={<CalenderIcon/>} height={38}/>                   
                <PrimaryButton title="Edit Location" icon={<Edit03Icon color={theme.palette.primary.main}/>}/> 
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
            <Typography className="Bold 16" color={theme.customTheme.Color.Primary.Dark}> All Floors </Typography>
            
            <Button
                style={{
                    display: "flex",
                    flexDirection: "row",
                    justifyContent: "space-between",
                    alignItems: "center",
                    borderRadius: "6px",
                    padding: "7px 12px 7px 10px",
                    gap: "6px",
                    backgroundColor: theme.palette.primary.main,
                    border: `1px solid ${theme.customTheme.Color.Primary.Blue}`,
                    boxShadow: theme.customTheme.Shadows.Elevation1,
                }}>
                    <PlusCircleIcon color={theme.customTheme.Color.Primary.Blue} fill={theme.customTheme.Color.Primary.Blue}/>                    
                    <Typography 
                    style={{
                        font: 'Inter',
                        fontSize: "12px",
                        fontWeight: 600,
                        lineHeight: "18px",
                        textAlign: "center",
                        letterSpacing: "-0.01em",
                        color: theme.customTheme.Color.Primary.Blue,
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

  
// const LocationTable = () => {
//     const [hoveredRowId, setHoveredRowId] = useState<number | null>(null);
  
//     const handleRowHover = (recordKey: number) => {
//         setHoveredRowId(recordKey);
//     };
    
//     const columns: TableProps<DataType>['columns'] = [
//         {
//             title: 'Name',
//             dataIndex: 'name',
//             key: 'name',
//             width: `${100 / 4}%`,
//             render: (text) => <div 
//             style={{
//                 display: "flex",
//                 flexDirection: "row",
//                 justifyContent: "flex-start",
//                 gap: "14px",
//             }}>                
//                 <Text
//                 style={{     
//                     display: "flex",
//                     justifyContent: "center",
//                     alignItems: "center",
//                     width: "40px",
//                     borderRadius: "30px",
//                     padding: "8px",
//                     fontSize: '16px',
//                     fontWeight: 700,
//                     lineHeight: '24px',
//                     color: theme.customTheme.Color.Primary.Blue,
//                     backgroundColor: theme.customTheme.Color.OffWhite[3],
//                 }}>
//                     {`L${text}`}
//                 </Text>
//                 <Text
//                 style={{     
//                     display: "flex",
//                     justifyContent: "flex-start",
//                     alignItems: "center",
//                     fontSize: '16px',
//                     fontWeight: 700,
//                     lineHeight: '24px',
//                     color: theme.customTheme.Color.Primary.Dark,
//                 }}>
//                     {`Level-${text}`}
//                 </Text>
//             </div>,
//         },
//         {
//             title: 'Room Count',
//             dataIndex: 'roomCount',
//             key: 'roomCount',
//             width: `${100 / 4}%`,
//             render: (text) =>              
//                 <Text
//                 style={{     
//                     display: "flex",
//                     justifyContent: "start",
//                     alignItems: "center",
//                     fontSize: '14px',
//                     fontWeight: 600,
//                     lineHeight: '20px',
//                     color: theme.customTheme.Color.grey[4],
//                 }}> {text} </Text>
//         },
//         {
//             title: 'Desk Count',
//             dataIndex: 'deskCount',
//             key: 'deskCount',
//             width: `${100 / 4}%`,
//             render: (text) =>              
//                 <Text
//                 style={{     
//                     display: "flex",
//                     justifyContent: "start",
//                     alignItems: "center",
//                     fontSize: '14px',
//                     fontWeight: 600,
//                     lineHeight: '20px',
//                     color: theme.customTheme.Color.grey[4],
//                 }}> {text} </Text>
//         },
//         {
//             dataIndex: 'action',
//             key: 'action',
//             width: `${100 / 4}%`,
//             render: (_: any, record: DataType) => (
//                 <div
//                 style={{
//                     display: "flex",
//                     justifyContent: "flex-end",
//                 }}>
//                     {record.key === hoveredRowId && (
//                         <Space size="middle">
//                             <EditButton />
//                             <DeleteButton />
//                         </Space>
//                     )}
//                     {record.key !== hoveredRowId && <div>{""}</div>}
//                 </div> 
//             ),
//         },
//     ];
    
//     const data: DataType[] = [
//     {
//         key: 1,
//         name: '1',
//         roomCount: 32,
//         deskCount: 4,
//     },
//     {
//         key: 2,
//         name: '2',
//         roomCount: 42,
//         deskCount: 4,
//     },
//     {
//         key: 3,
//         name: '3',
//         roomCount: 32,
//         deskCount: 4,
//     },
//     ];

//     return (
//         <div
//         style={{
//             width: "100%",
//         }}>
            
//             <ConfigProvider
//             theme={{
//                 token: {
//                     // Seed Token
//                     // borderRadius: 2,
                    

//                     // Alias Token
//                     // colorBgContainer: '#f6ffed',

//                 },
//                 components: {
//                     Table: {                
//                         headerBg: theme.palette.primary.main,
//                         headerColor: theme.customTheme.Color.grey[2],
//                     }
//                 }
//             }}
//         >
//                 <Table 
//                 columns={columns} 
//                 dataSource={data} 
//                 pagination={{hideOnSinglePage: true}}
//                 // style={{
//                 // backgroundColor: "transparent",
//                 // }}
//                 rowClassName={() => 'transparent-row'} 
//                 onRow={(record) => ({
//                 onMouseEnter: () => handleRowHover(record.key),
//                 onMouseLeave: () => handleRowHover(0),
//                 })}
//                 />
//             </ConfigProvider>
//         </div>
//     );
// }


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
                boxShadow: theme.customTheme.Shadows.Elevation1,
                border: `1px solid ${theme.customTheme.Color.OffWhite[4]}`,
                backgroundColor: theme.palette.primary.main,
            }}>
                <HeadquarterHeader/>
                <TableHeader/>
                {/* <LocationTable/> */}
                <div>Location Table</div>
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
                backgroundColor: theme.customTheme.Color.OffWhite[1],
            }}
            >
                <Header />
                <Body/>
            </div>
        </Layout>
    );
}

export default Location;