import React from "react";

type theme = {
    Color: { 
        Primary: {
            Blue: string,
            Dark: string,
            White: string,
        },
        grey: {
            2: string,
            3: string,
            4: string,
        },       
        Alert: {
            Green: string,
            Red: string,
        }
        OffWhite: {
            1: string,
            2: string,
            3: string,
            4: string,
            5: string,
        },
    },
    Shadows: {
        0: string,
        1: string,
        2: string,
        3: string,
        Elevation1: string,
        Elevation2: string,
        Elevation3: string,
    },
};
            
declare module '@mui/material/styles' {
    interface Theme {
        customTheme: theme
    }
    interface ThemeOptions {
        customTheme: theme
    }
}