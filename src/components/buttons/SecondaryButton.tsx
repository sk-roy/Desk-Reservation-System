import { Button, Typography } from "@mui/material";
import { ReactNode } from "react";
import theme from "../../theme";
import { ButtonProps } from "../interface";


const SecondaryButton: React.FC<ButtonProps> = (props) => {
    return (
        <Button
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            height: props.height === null ? 38 : props.height,
            borderRadius: "8px",
            padding: "9px 16px 9px 14px",
            gap: "6px",
            backgroundColor: theme.customTheme.Color.OffWhite[2],
            textTransform: "none",
        }}
        onClick={props.onClick}> 
            {props.icon}
            <Typography
            style={{
                fontSize: "13px",
                fontWeight: 600,
                lineHeight: "20px",
                color: theme.customTheme.Color.grey[4],
            }}> 
                {props.title} 
            </Typography>
        </Button>
    );
}

export default SecondaryButton;