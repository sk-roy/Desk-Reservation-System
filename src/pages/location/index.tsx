import React, { useState } from "react";
import theme from "../../theme";
import { Avatar, Box, Button, Typography } from "@mui/material";
import PlusCircleIcon from "../../components/icons/PlusCircleIcon";
import InfoCircleIcon from "../../components/icons/InfoCircle";
import CalenderIcon from "../../components/icons/CalenderIcon";
import Edit03Icon from "../../components/icons/Edit03Icon";
import UpDownArrowIcon from "../../components/icons/UpDownArrowIcon";
import TertiaryButton from "../../components/buttons/TertiaryButton";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import { LocationDrawer } from "./LocationDrawers";
import Sidebar from "../../components/sidebar";
import { UpdateHalidays } from "./HolidaysDrawers";
import { GridColDef } from "@mui/x-data-grid";
import CustomDataGrid from "../../components/CustomDataGrid";
import { LocationFloors } from "../../assets/data";
import DeleteButton from "../../components/buttons/DeleteButton";
import DeleteIcon from "../../components/icons/DeleteIcon";





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
                    backgroundColor: theme.customTheme.Color.Primary.White,
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
                backgroundColor: theme.customTheme.Color.Primary.White,
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
                    <LocationDrawer title="New Location" onClose={onClose} open={open} newLocation={true}/>
                </>

            </div>
        </div>
    );
}

const HeadquarterHeader = () => {
    const [UpdateHolidaysDrawerOpen, setUpdateHolidaysDrawerOpen] = useState(false);
    const [EditLocationDrawerOpen, setEditLocationDrawerOpen] = useState(false);
  
    const EditLocationDrawerOnClick = () => {
        setEditLocationDrawerOpen(true);
    };
  
    const EditLocationDrawerOnClose = () => {
        setEditLocationDrawerOpen(false);
    };
    
    const UpdateHolidaysDrawerOnClick = () => {
        setUpdateHolidaysDrawerOpen(true);
    };
  
    const UpdateHolidaysDrawerOnClose = () => {
        setUpdateHolidaysDrawerOpen(false);
    };


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
                    color: theme.customTheme.Color.Primary.White,
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
                        <Typography className="Semi Bold 13" color={theme.customTheme.Color.grey[3]}>15 Holidays</Typography>
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
                        <Typography className="Semi Bold 13" color={theme.customTheme.Color.grey[3]}>Next Holiday: 21 Feb 2024</Typography>
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
                <TertiaryButton title="Update Holidays" icon={<CalenderIcon/>} height={38} onClick={UpdateHolidaysDrawerOnClick}/>                   
                <PrimaryButton title="Edit Location" icon={<Edit03Icon color={theme.customTheme.Color.Primary.White}/>}  onClick={EditLocationDrawerOnClick}/> 
                <UpdateHalidays title="Holidays" onClose={UpdateHolidaysDrawerOnClose} open={UpdateHolidaysDrawerOpen} newLocation={false}
                data={{
                    locationName: "Headquarter",
                    shortName: "HQ",
                    holidays: [
                        { date: "Wed, 21 Feb 2024", title: "Int. Mother Language Day" },
                        { date: "Tue, 26 Mar 2024", title: "Independence Day" },
                        { date: "Sun, 07 Apr 2024", title: "Shab-E-Qadr" },
                        { date: "Wed, 10 Apr 2024", title: "Eid-Ul-Fitr" },
                    ]
                }
                }/>
                <LocationDrawer title="Edit Location" onClose={EditLocationDrawerOnClose} open={EditLocationDrawerOpen} newLocation={false}
                data={{
                    locationName: "Headquarter",
                    shortName: "HQ",
                    holidays: [
                        { date: "Wed, 21 Feb 2024", title: "Int. Mother Language Day" },
                        { date: "Tue, 26 Mar 2024", title: "Independence Day" },
                        { date: "Sun, 07 Apr 2024", title: "Shab-E-Qadr" },
                        { date: "Wed, 10 Apr 2024", title: "Eid-Ul-Fitr" },
                    ]
                }
                }/>
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
                    backgroundColor: theme.customTheme.Color.Primary.White,
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


const AddCustomDatagrid = () => {
    const columnLenth = 4;
    const initialPage = 0;
    const initialRowsPerPage = 10;
    const rowsPerPageOptions = [10, 15, 20];
  
    const [page, setPage] = React.useState<number>(initialPage);
    const [rowsPerPage, setRowsPerPage] = React.useState<number>(initialRowsPerPage);
    const [currentRow, setCurrentRow] = React.useState(-1);
  
  
    const columns: GridColDef[] = [
        { 
          field: 'level', headerName: 'Name', flex: (1/columnLenth), disableColumnMenu: true,
          renderCell: (params) => <Box display="flex" gap='10px' alignItems='center'>
            <Box 
            sx={{
                borderRadius: '30px',
                height: '40px',
                width: '40px',
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: theme.customTheme.Color.OffWhite[3],
            }}>
                <Typography className='Bold 16' color={theme.customTheme.Color.Primary.Blue}>{'L'}{params.value}</Typography>
            </Box>
            <Typography className='Bold 16' color={theme.customTheme.Color.Primary.Dark}>{'Level-0'}{params.value}</Typography>
          </Box>
        }, {
          field: 'roomCount', headerName: 'Room Count', flex: (1/columnLenth), sortable: false, disableColumnMenu: true,
          renderCell: (params) => <Typography className='Semi Bold 13' color={theme.customTheme.Color.grey[4]}>{params.value}</Typography>,
        }, { 
          field: 'deskCount', headerName: 'Desk Count', flex: (1/columnLenth), sortable: false, disableColumnMenu: true,
          renderCell: (params) => <Typography className='Semi Bold 13' color={theme.customTheme.Color.grey[4]}>{params.value}</Typography>,
        },{ 
          field: 'action', headerName: '', flex: (1/columnLenth), sortable: false, disableColumnMenu: true,
          renderCell: (params) => <Box display='flex' justifyContent='flex-end' width='100%' paddingRight='40px'>{ 
                currentRow === params.id && 
                <Box display='flex' gap='10px'>
                    <TertiaryButton title='Edit' icon={<Edit03Icon color={theme.customTheme.Color.grey[3]}/>}/>
                    <DeleteButton title="Delete" height={32} icon={<DeleteIcon/>}/>
                </Box>      
          }</Box>
        }
    ];
  
    return (
      <CustomDataGrid 
        rows={LocationFloors} 
        columns={columns}
        page={page}
        rowsPerPage={rowsPerPage}
        currentRow={currentRow}
        rowsPerPageOptions = {rowsPerPageOptions}
        // pageSize={}
        
        setPage={setPage}
        setRowsPerPage={setRowsPerPage}
        setCurrentRow={setCurrentRow}
    
      />  
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
                boxShadow: theme.customTheme.Shadows.Elevation1,
                border: `1px solid ${theme.customTheme.Color.OffWhite[4]}`,
                backgroundColor: theme.customTheme.Color.Primary.White,
            }}>
                <HeadquarterHeader/>
                <TableHeader/>
                <AddCustomDatagrid/>
            </div>
            
        </div>
    );    
}



const Location = () => {
    return (
        <Sidebar>            
            <Box
            sx = {{
                width: "100%",
                // heightL "900px",
                display: "flex",
                flexDirection: "column",
                backgroundColor: theme.customTheme.Color.OffWhite[1],
            }}
            >
                <Header />
                <Body/>
            </Box>
        </Sidebar>
    );
}

export default Location;
