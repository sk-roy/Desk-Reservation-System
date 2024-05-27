import { purple } from '@mui/material/colors';
import { Shadows, createTheme } from '@mui/material/styles';
import { Typography } from 'antd';


export const CustomStyles = {
    Typography: {
        SemiBold12: {
            fontSize: '12px',
            fontWeight: 600,
            lineHeight: '18px',
        },
        SemiBold13: {
            fontSize: '13px',
            fontWeight: 600,
            lineHeight: '20px',
        },
        SemiBold14: {
            fontSize: '14px',
            fontWeight: 600,
            lineHeight: '20px',
        },
        Bold12: {
            fontSize: '12px',
            fontWeight: 700,
            lineHeight: '18px',
        },
        Regular12: {
            fontSize: '12px',
            fontWeight: 400,
            lineHeight: '18px',
        },
        Bold16: {
            fontSize: '16px',
            fontWeight: 700,
            lineHeight: '24px',
        },
        Bold24: {
            fontSize: '24px',
            fontWeight: 700,
            lineHeight: '34px',
        },
        Medium12: {
            fontSize: "12px",
            fontWeight: 500,
            lineHeight: "18px",
        },
        Medium13: {
            fontSize: "13px",
            fontWeight: 500,
            lineHeight: "20px",
        },
        Medium16: {
            fontSize: "16px",
            fontWeight: 500,
            lineHeight: "24px",
        },
    },
    Color: {
        grey: {
            2: '#8092A3',
            3: '#6C859B',
            4: '#4D667C',
        },
    },
    Shadows: {
        0: 'none',
        1: '0px 2px 4px 0px #3A414F0F',
        2: '0px 1px 4px 0px #4C577314',
        3: '0px 1px 4px 0px #4D526421',
    },
    Button: {
        Cancel: {
            borderRadius: "6px",
            px: "14px",
            py: "7px",
        },
        Delete: {
            borderRadius: "6px",
            px: "14px",
            py: "7px",
        }
    },
};


const theme = createTheme({
    palette: {
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
        ...Array(19).fill('none'),
    ] as Shadows,

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
            variants: [
                {
                    props: {
                        className: 'Cancel',
                    },
                    style: {
                        borderRadius: "6px",
                        px: "14px",
                        py: "7px",
                    }
                }, {
                    props: {
                        className: 'Delete',
                    },
                    style: {
                        borderRadius: "6px",
                        px: "14px",
                        py: "7px",
                    }
                },
            ]
        }
    }
});

export default theme;
