import { purple } from '@mui/material/colors';
import { Shadows, createTheme } from '@mui/material/styles';



const theme = createTheme({
    palette: {
        primary: {
            main: "#FFFFFF",
            dark: "#212B36",
        },
        grey: {
            200: '#8092A3',
            300: '#6C859B',
            400: '#4D667C',
        },
    },
    typography: {
        fontFamily: 'Inter',        
        // fontFamily: "Comic Sans MS",
    },
    shadows: [
        'none',
        '0px 2px 4px 0px #3A414F0F',
        ...Array(19).fill('none'),
    ] as Shadows,
    
    // shadows: [
    //     'none',
    //     '0px 2px 4px 0px #3A414F0F',
    // ] as Shadows,

    components: {
        MuiTypography : {
            variants: [
                {
                    props: {
                        className: 'Semi Bold 12',
                    },
                    style: {
                        fontSize: '12px',
                        fontWeight: 600,
                        lineHeight: '18px',
                        textAlign: 'left',
                    }
                }, {
                    props: {
                        className: 'Bold 12',
                    },
                    style: {
                        fontSize: '12px',
                        fontWeight: 700,
                        lineHeight: '18px',
                        textAlign: 'left',
                    }
                }, {
                    props: {
                        className: 'Bold 16',
                    },
                    style: {
                        fontSize: '16px',
                        fontWeight: 700,
                        lineHeight: '24px',
                        textAlign: 'left',
                        letterSpacing: "-0.01em",
                    }
                }, {
                    props: {
                        className: 'Bold 24',
                    },
                    style: {
                        fontSize: '24px',
                        fontWeight: 700,
                        lineHeight: '34px',
                        textAlign: 'left',
                        letterSpacing: "-0.01em",
                    }
                }, {
                    props: {
                        className: "Medium 16",
                    },
                    style: {
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "24px",
                        letterSpacing: "-0.01em",
                        textAlign: 'left',
                    },
                },

            ]
        },
    }
});

export default theme;
