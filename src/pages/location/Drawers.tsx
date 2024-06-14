import React, { ReactNode } from "react";
import UpDownArrowIcon from "../../components/icons/UpDownArrowIcon";
import FiInfoIcon from "../../components/icons/FiInfoIcon";
import PrimaryButton from "../../components/buttons/PrimaryButton";
import SecondaryButton from "../../components/buttons/SecondaryButton";
import TertiaryButton from "../../components/buttons/TertiaryButton";
import PlusCircleIcon from "../../components/icons/PlusCircleIcon";
import DownloadCloudIcon from "../../components/icons/DownloadCloudIcon";
import theme from "../../theme";
import { Box, Button, Drawer, FormControl, FormHelperText, Grid, InputAdornment, InputBase, InputLabel, OutlinedInput, TextField, Typography, styled } from "@mui/material";
import CalenderImage from "../../components/images/CalenderImage";
import { NewLocationProps } from "../../components/interface";
import CloseIcon from '@mui/icons-material/Close';


const BootstrapInput = styled(InputBase)(({ theme }) => ({
    'label + &': {
      marginTop: theme.spacing(3),
    },
    '& .MuiInputBase-input': {
      borderRadius: 4,
      position: 'relative',
      backgroundColor: theme.palette.mode === 'light' ? '#F3F6F9' : '#1A2027',
      border: '1px solid',
      borderColor: theme.palette.mode === 'light' ? '#E0E3E7' : '#2D3843',
      fontSize: 16,
      width: 'auto',
      padding: '10px 12px',
      transition: theme.transitions.create([
        'border-color',
        'background-color',
        'box-shadow',
      ]),
      // Use the system font instead of the default Roboto font.
      fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
      ].join(','),
      '&:focus': {
        // boxShadow: `${alpha(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
        borderColor: theme.palette.primary.main,
      },
    },
  }));
  

const InputForm = () => {
    const weekdays = ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'];
    return (
        <Grid container>
            <Grid item xs={6} height={60} spacing={14}>
                
                <FormControl sx={{ m: 1, width: '25ch' }} variant="outlined">
                <FormHelperText>Weight</FormHelperText>
                <OutlinedInput
                    // id="outlined-adornment-weight"
                    // // endAdornment={<InputAdornment position="end">kg</InputAdornment>}
                    // aria-describedby="outlined-weight-helper-text"
                    // inputProps={{
                    // 'aria-label': 'weight',
                    // }}
                    sx={{
                        "& fieldset": {
                        border: "#FFFFFF",
                        },
                    }}
                />
                </FormControl>

            {/* <FormControl variant="standard">
            <InputLabel shrink htmlFor="bootstrap-input">
                Bootstrap
            </InputLabel>
            <BootstrapInput defaultValue="react-bootstrap" id="bootstrap-input" /> */}
        {/* </FormControl> */}
            </Grid>
        </Grid>
        // <Form layout="vertical">
        //     <Row gutter={24}>
        //         <Col span={17}>
        //         <Form.Item
        //             name="locationName"
        //             label={<label className="drawer-label">Location Name</label>}
        //             rules={[{ message: 'Location Name' }]}
        //         >
        //             <Input sx={{height: '38px'}} placeholder="Type here"/>
        //         </Form.Item>
        //         </Col>
        //         <Col span={7}>
        //         <Form.Item
        //             name="shortName"
        //             label={<label className="drawer-label">Short Name</label>}
        //             rules={[{ message: 'Short Name' }]}
        //         >
        //             <Input sx={{height: '38px'}} placeholder="Type here"/>
        //         </Form.Item>
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col span={24}>
        //         <Form.Item
        //             name="address"
        //             label={<label className="drawer-label">Address</label>}
        //             rules={[{ message: 'Address' }]}
        //         >
        //             <Input sx={{height: '38px'}} placeholder="Type here"/>
        //         </Form.Item>
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col span={24}>
        //             <Form.Item
        //                 name="timeZone"
        //                 label={<label className="drawer-label">Time Zone</label>}
        //                 rules={[{ message: 'Time Zone' }]}
        //             >
        //                 <Select sx={{height: '38px'}} placeholder="Select Time Zone"/>
        //             <Box
        //             sx={{
        //                 display: "flex",
        //                 justifyContent: "flex-start",
        //                 alignItems: "center",
        //                 marginTop: "4px",
        //                 gap: "4px",
        //             }}>
        //                 <FiInfoIcon/>
        //                 <Text className="drawer-label"> Time zone will be auto detected from address </Text>
        //             </Box>
        //             </Form.Item>
        //         </Col>
        //     </Row>
        //     <Row>
        //         <Col span={24}>
        //         <Form.Item
        //             name="weekdays"
        //             label={<label className="drawer-label">Weekdays</label>}
        //             rules={[{ message: 'Weekdays' }]}
        //         >                        
        //             <Radio.Group sx={{ width: '100%', display: "flex", flexDirection: "row", gap: "6px"}}>
        //                 {weekdays.map((weekday) => (
        //                     <Box key={weekday}>
        //                         <Radio.Button value={weekday}>{weekday}</Radio.Button>
        //                     </Box>
        //                 ))}
        //             </Radio.Group>
        //         </Form.Item>
        //         </Col>
        //     </Row>
        // </Form>
    );
}

const AddHolidays = () => {
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

const DrawerHeader: React.FC<NewLocationProps> = (props) => {
    return (
        <Box
        sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: 64,
            padding: "18px 28px 18px 28px",
            gap: 12,
            backgroundColor: theme.customTheme.Color.Primary.White,
            borderBottom: `1px solid ${theme.customTheme.Color.OffWhite[3]}`,
        }}>
            <Typography className="Bold 18" color={theme.customTheme.Color.grey[4]}> New Location </Typography>
            
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

const DrawerBody = () => {
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
            <InputForm/>
            <AddHolidays/>
        </Box>
    );
}

const DrawerFooter: React.FC<NewLocationProps> = (props) => {
    return (        
        <Box
        sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "flex-end",
            height: "78px",
            padding: '20px 28px 20px 28px',
            gap: "10px",
            borderTop: `1px solid ${theme.customTheme.Color.OffWhite[3]}`,
            boxShadow: theme.customTheme.Shadows.Elevation2,
            backgroundColor: theme.customTheme.Color.Primary.White,
        }}>
            <SecondaryButton onClick={props.onClose} title="Cancel" />
            <PrimaryButton title="Create Location"/>
        </Box>
    );
}

export const NewLocationDrawer: React.FC<NewLocationProps> = (props) => {
    return (                    
        <Drawer
        onClose={props.onClose} 
        open={props.open}
        anchor="right"
        PaperProps={{ sx: { width: 560 } }}>
            <Box sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
            }}>
                <DrawerHeader onClose={props.onClose} />
                <DrawerBody />
                <DrawerFooter onClose={props.onClose} />
            </Box>
        </Drawer>
    );
}