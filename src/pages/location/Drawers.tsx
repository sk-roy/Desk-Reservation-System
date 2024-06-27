import React, { ReactNode } from "react";
import UpDownArrowIcon from "../../components/icons/UpDownArrowIcon";
import FiInfoIcon from "../../components/icons/FiInfoIcon";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import TertiaryButton from "../../components/buttons/TertiaryButton";
import PlusCircleIcon from "../../components/icons/PlusCircleIcon";
import DownloadCloudIcon from "../../components/icons/DownloadCloudIcon";
import theme from "../../theme";
import { Box, Button, Drawer, FilledInput, FormControl, FormHelperText, Grid, IconButton, Input, InputAdornment, InputBase, InputLabel, OutlinedInput, TextField, Typography, styled } from "@mui/material";
import CalenderImage from "../../components/images/CalenderImage";
import { DrawerInputFieldProps, LocationData, LocationProps } from "../../components/interface";
import CloseIcon from '@mui/icons-material/Close';
import { TypeSpecimenOutlined } from "@mui/icons-material";
import { CalendarIcon } from "@mui/x-date-pickers";
import CalenderIcon from "../../components/icons/CalenderIcon";
import DeleteButton from "../../components/buttons/DeleteButton";
import DeleteIcon from "../../components/icons/DeleteIcon";



const InputFieldMedium = styled('div')({
    borderRadius: "8px",
    gap: "10px",
    padding: "9px 14px 9px 14px",
    border: "1px solid var(--Offwhite-Offwhite-4, #C7D3E1)",
    boxShadow: "0px 1px 4px 0px #4C577314",
    backgroundColor: theme.customTheme.Color.Primary.White,
});



const DrawerInputField = (props: DrawerInputFieldProps) => {
    return (        
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            width: props.width,
            gap: "4px",
        }}>
            <Typography className="Medium 12" color={theme.customTheme.Color.grey[2]}>{props.labelName}</Typography>
            <input style={{
                height: "38px",
                width: props.widthType === "fixed" ? props.width : "100%",
                border: "1px solid var(--Offwhite-Offwhite-4, #C7D3E1)",
                borderRadius: "8px",
                padding: "9px 14px 9px 14px",
                backgroundColor: props.inputBoxBG,
            }} name={props.labelName} placeholder = {props.placeHolder ? props.placeHolder : "Type here"}
            value={props.value} />
            {props.endLabel}
        </Box>
    );
}


const InputForm = (props: LocationProps) => {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];

    return (
      <Box sx={{ display: 'flex', flexDirection: "column", gap: "14px", }}>
        <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: "space-between", width: 504}}>
            <DrawerInputField labelName="Location Name" width="364px" value={props.data?.locationName}/>
            <DrawerInputField labelName="Short Name" width="130px" value={props.data?.shortName}/>
        </Box>
        <DrawerInputField labelName="Address" width="100%" value={props.data?.address}/>
        <DrawerInputField labelName="Time Zone" width="100%" placeHolder="Select Time Zone" value={props.data?.timeZone}
        inputBoxBG={theme.customTheme.Color.OffWhite[1]}
        endLabel={
            <Box sx={{ display: 'flex', flexDirection: "row", justifyContent: "flex-start", gap: "4px", textAlign: "center" }}>
                <FiInfoIcon />
                <Typography className="Medium 12" color={theme.customTheme.Color.grey[2]}>Time zone will be auto detected from address</Typography>
            </Box>
        }
        />
        <DrawerInputField labelName="Weekdays" width="100%"/>
      </Box>
    );
}

const AddHolidaysBanner = () => {
    return (
        <Box
        sx={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
            height: "256px",
            borderRadius: "12px",
            padding: "32px 40px 32px 40px",
            gap: "20px",
            backgroundColor: theme.customTheme.Color.OffWhite[2],
        }}>
            <CalenderImage/>
            <Box
            sx={{
                display: "flex",
                flexDirection: "column",
                justifyContent: "center",
                alignItems: "center",
                height: "48px",
                gap: "4px",
            }}> 
                <Typography  className="Bold 16" color={theme.customTheme.Color.grey[4]}>Add Holidays</Typography>
                <Typography className="Semi Bold 13" color={theme.customTheme.Color.grey[3]}>You can also add holidays later</Typography>
            </Box>
            <Box
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "center",
                height: "32px",
                gap: "10px",
            }}>
                <TertiaryButton 
                    title="Add Manually" 
                    icon={<PlusCircleIcon color={theme.customTheme.Color.grey[3]} fill={theme.customTheme.Color.grey[3]}/>}
                /> 
                <TertiaryButton 
                    title="Import from Excel" 
                    icon={<DownloadCloudIcon color={theme.customTheme.Color.grey[3]}/>}
                />
            </Box>
        </Box>
    );
}

const DrawerHeader: React.FC<LocationProps> = (props) => {
    return (
        <Box
        sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 64,
            width: "100%",
            padding: "18px 28px 18px 28px",
            gap: 12,
            backgroundColor: theme.customTheme.Color.Primary.White,
            borderBottom: `1px solid ${theme.customTheme.Color.OffWhite[3]}`,
        }}>
            <Typography className="Bold 18" color={theme.customTheme.Color.grey[4]}> {props.title} </Typography>
            
            <Button
            sx={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "28px",
                width: "28px",
                borderRadius: 20,
                backgroundColor: theme.customTheme.Color.OffWhite[2],
            }}
            onClick={props.onClose}>
                <CloseIcon sx={{ height: 18, width: 18, color: theme.customTheme.Color.grey[4]}} /> 
            </Button>
        </Box>
    );
}


const Holidays = (props: LocationProps) => {
    return (
        <Box sx={{ display: "flex", flexDirection: "column", width: "504px", gap: "14px" }}>
            <Box sx={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between" }}>
                <Typography className="Bold 16" color={theme.customTheme.Color.Primary.Dark}> All Holidays </Typography>                
                <TertiaryButton title="Import from Excel" icon={<DownloadCloudIcon color={theme.customTheme.Color.grey[3]}/>} />
            </Box>
            {props.data?.holidays?.map((holiday, index) => (
                <Box sx={{ display: "flex", flexDirection: "row", width: "100%", justifyContent: "space-between", gap: "10px" }}>
                    <InputFieldMedium style={{ display: "flex", flexDirection: "row", width: "196px", justifyContent: "space-between", alignItems: "center", gap: "4px"}}>
                        <CalenderIcon/>
                        <Typography className="Medium 13" color={theme.customTheme.Color.Primary.Dark}> {holiday.date} </Typography>
                        <UpDownArrowIcon/>
                    </InputFieldMedium>
                    <InputFieldMedium style={{ width: "298px", display: "flex", alignItems: "center" }}>
                        <Typography className="Medium 13" color={theme.customTheme.Color.Primary.Dark}> {holiday.date} </Typography>
                    </InputFieldMedium>
                </Box>
            ))}
            <InputFieldMedium style={{ display: "flex", flexDirection: "row", width: "78px", justifyContent: "space-between", alignItems: "center", gap: "4px"}}>
                <PlusCircleIcon color={theme.customTheme.Color.Primary.White} fill={theme.customTheme.Color.Primary.Blue}/>
                <Typography className="Semi Bold 13" color={theme.customTheme.Color.Primary.Blue}> Add </Typography>
            </InputFieldMedium>
        </Box>
    );
}

const DrawerBody = (props: LocationProps) => {
    const hasHolidays = props.data?.holidays && props.data.holidays.length > 0;
    return (        
        <Box 
        sx={{
        display: "flex",
        flexDirection: "column",
            alignItems: "center",
            height: "758px",
            padding: "20px 28px 20px 28px",
            gap: "40px",
        }}>
            <InputForm {...props}/>
            {hasHolidays && <Holidays {...props}/>}
            {!hasHolidays && <AddHolidaysBanner/>}
        </Box>
    );
}

const DrawerFooter: React.FC<LocationProps> = (props) => {
    return (        
        <Box
        sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: props.newLocation ? "flex-end" : "space-between",
            height: "78px",
            width: "100%",
            padding: '20px 28px 20px 28px',
            gap: "10px",
            borderTop: `1px solid ${theme.customTheme.Color.OffWhite[3]}`,
            boxShadow: theme.customTheme.Shadows.Elevation2,
            backgroundColor: theme.customTheme.Color.Primary.White,
        }}>
            {!props.newLocation && <DeleteButton title="Delete" icon={<DeleteIcon/>}/>}
            <Box 
            sx={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "flex-end",
                gap: "10px",
            }}>
                <SecondaryButton onClick={props.onClose} title= {props.newLocation ? "Cancel" : "Discard Changes"} />
                <PrimaryButton title= {props.newLocation ? "Create Location" : "Save Changes"} 
                    bgColor={props.newLocation ? theme.customTheme.Color.Primary.Blue : theme.customTheme.Color.Alert.Green}/>
            </Box>
        </Box>
    );
}

export const LocationDrawer: React.FC<LocationProps> = (props) => {
    return (                    
        <Drawer
        onClose={props.onClose} 
        open={props.open}
        anchor="right"
        PaperProps={{ sx: { width: 560,  } }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <DrawerHeader {...props} />
                <DrawerBody {...props} />
                <DrawerFooter {...props} />
            </Box>
        </Drawer>
    );
}