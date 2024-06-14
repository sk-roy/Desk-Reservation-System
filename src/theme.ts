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
        '0px 1px 4px 0px #4C577314',
        '0px 1px 4px 0px #4D526421', // 3
        '0px 2px 4px 0px #3A414F0F', // Elevation 1
        '0px 6px 16px 0px #3A414F14', // Elevation 2 - index 5
        ...Array(19).fill('none'),
    ] as Shadows,
    
    customTheme: {  
        Color: { 
            Primary: {
                Blue: '#2E4AAE',
                Dark: '#212B36',
                White: '#FFFFFF',
            },
            grey: {
                2: '#8092A3',
                3: '#6C859B',
                4: '#4D667C',
            },     
            Alert: {
                Green: '#2CA066',
                Red: '#D34040',
            },
            OffWhite: {
                1: '#F9FAFB',
                2: '#EEF3FA',
                3: '#E8EDF5',
                4: "#EBEDF7",
            },
        },
        Shadows: {
            0: 'none',
            1: '0px 2px 4px 0px #3A414F0F', 
            2: '0px 1px 4px 0px #4C577314',
            3: '0px 1px 4px 0px #4D526421',
            Elevation1: '0px 2px 4px 0px #3A414F0F', 
            Elevation2: '0px 6px 16px 0px #3A414F14',    
        },
    },

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
                        className: 'Semi Bold 13',
                    },
                    style: {
                        fontSize: '13px',
                        fontWeight: 600,
                        lineHeight: '20px',
                        textAlign: 'left',
                    }
                }, {
                    props: {
                        className: 'Semi Bold 14',
                    },
                    style: {
                        fontSize: '14px',
                        fontWeight: 600,
                        lineHeight: '20px',
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
                    }
                }, {
                    props: {
                        className: 'Bold 18',
                    },
                    style: {
                        fontSize: '18px',
                        fontWeight: 700,
                        lineHeight: '28px',
                        textAlign: 'left',
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
                    }
                }, {
                    props: {
                        className: 'Regular 12',
                    },
                    style: {
                        fontSize: '12px',
                        fontWeight: 400,
                        lineHeight: '18px',
                        textAlign: 'center',
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
                        className: "Medium 12",
                    },
                    style: {
                        fontSize: "12px",
                        fontWeight: 500,
                        lineHeight: "18px",
                    },
                }, {
                    props: {
                        className: "Medium 13",
                    },
                    style: {
                        fontSize: "13px",
                        fontWeight: 500,
                        lineHeight: "20px",
                    },
                }, {
                    props: {
                        className: "Medium 16",
                    },
                    style: {
                        fontSize: "16px",
                        fontWeight: 500,
                        lineHeight: "24px",
                    },
                },
            ]
        },
        MuiButton: {
            styleOverrides : {
                root: {
                    minWidth: 0,
                }
            }
        }
    }
});

export default theme;
