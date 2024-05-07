import { Box, Typography } from "@mui/material";


export const FirstReservation = () => {
    return (
        <Box  // first reservation
        display="flex"
        flexDirection="column"
        bgcolor="#2E4AAE"
        boxShadow= "0px 6px 24px 0px #3355CF66"
        height="112px"
        width="100%"
        borderRadius="8px"
        paddingLeft="16px"
        paddingTop="18px"
        paddingRight="16px"
        paddingBottom="18px"
        gap="12px">
        <Box
        display="flex"
        flexDirection="column"
        justifyContent="space-between">
            <Typography
            fontSize="12px"
            fontWeight={600}
            color="#FFFFFF">
            Tomorrow, 14 Feb, 2024
            </Typography>
            <Typography
            fontSize="16px"
            fontWeight={700}
            color="#FFFFFF">
            Desk 205-07
            </Typography>
        </Box>

        <Box
        display="flex"
        flexDirection="row"
        justifyContent="flex-start"
        gap="6px">

            <Box // Floor 2
            borderRadius="6px"
            border= "1px solid var(--Greyscale-Grey-2, #8092A3)"
            bgcolor="transparent"
            justifyContent="center"
            paddingLeft="6px"
            paddingRight="6px"
            paddingTop="2px"
            paddingBottom="2px"
            >
            <Typography
            color="#B4C5D9"
            fontSize="12px"
            fontWeight={600}
            lineHeight="18px"
            height="18px"
            border="1px">
                Floor 2
            </Typography>
            </Box>

            <Box   //Room 205
            borderRadius="6px"
            border= "1px solid var(--Greyscale-Grey-2, #8092A3)"
            bgcolor="transparent"
            justifyContent="center"
            paddingLeft="6px"
            paddingRight="6px"
            paddingTop="2px"
            paddingBottom="2px"
            >
            <Typography
            color="#B4C5D9"
            fontSize="12px"
            fontWeight={600}
            lineHeight="18px"
            height="18px"
            border="1px">
                Room 205
            </Typography>
            </Box>

            <Box // Desk 07
            borderRadius="6px"
            border= "1px solid var(--Greyscale-Grey-2, #8092A3)"
            bgcolor="transparent"
            justifyContent="center"
            paddingLeft="6px"
            paddingRight="6px"
            paddingTop="2px"
            paddingBottom="2px"
            >
            <Typography
            color="#B4C5D9"
            fontSize="12px"
            fontWeight={600}
            lineHeight="18px"
            height="18px"
            border="1px">
                Desk 07
            </Typography>
            </Box>

        </Box>
        </Box>
    );
}


export const NextReservation = () => {
    return (        
        <Box  // second and next reservation
        display="flex"
        flexDirection="column"
        bgcolor="#FFFFFF"
        boxShadow= "0px 2px 4px 0px #3A414F0F"
        border= "1px solid var(--Offwhite-Offwhite-3, #E8EDF5)"
        height="112px"
        width="100%"
        borderRadius="8px"
        paddingLeft="16px"
        paddingTop="18px"
        paddingRight="16px"
        paddingBottom="18px"
        gap="12px">
          <Box
          display="flex"
          flexDirection="column"
          justifyContent="space-between">
            <Typography
            fontSize="12px"
            fontWeight={600}
            color="#2E4AAE">
              Monday, 23 Jan, 2024
            </Typography>
            <Typography
            fontSize="16px"
            fontWeight={700}
            color="#212B36">
              Desk 205-07
            </Typography>
          </Box>

          <Box
          display="flex"
          flexDirection="row"
          justifyContent="flex-start"
          gap="6px">

            <Box // Floor 2
            borderRadius="6px"
            bgcolor="#E8EDF5"
            justifyContent="center"
            paddingLeft="6px"
            paddingRight="6px"
            paddingTop="2px"
            paddingBottom="2px"
            >
              <Typography
              color="#4D667C"
              fontSize="12px"
              fontWeight={600}
              lineHeight="18px"
              height="18px"
              border="1px">
                Floor 2
              </Typography>
            </Box>

            <Box   //Room 205
            borderRadius="6px"
            bgcolor="#E8EDF5"
            justifyContent="center"
            paddingLeft="6px"
            paddingRight="6px"
            paddingTop="2px"
            paddingBottom="2px"
            >
              <Typography
              color="#4D667C"
              fontSize="12px"
              fontWeight={600}
              lineHeight="18px"
              height="18px"
              border="1px">
                Room 205
              </Typography>
            </Box>

            <Box // Desk 07
            borderRadius="6px"
            bgcolor="#E8EDF5"
            justifyContent="center"
            paddingLeft="6px"
            paddingRight="6px"
            paddingTop="2px"
            paddingBottom="2px"
            >
              <Typography
              color="#4D667C"
              fontSize="12px"
              fontWeight={600}
              lineHeight="18px"
              height="18px"
              border="1px">
                Desk 07
              </Typography>
            </Box>
            
          </Box>
        </Box>
    );
}