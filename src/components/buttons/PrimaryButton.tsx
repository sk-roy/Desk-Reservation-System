import { ReactNode } from "react";
import theme from "../../theme";
import { Button, Typography } from "@mui/material";
import { ButtonProps } from "../interface";

const PrimaryButton: React.FC<ButtonProps> = (props) => {
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
            backgroundColor: props.bgColor ? props.bgColor : theme.customTheme.Color.Primary.Blue,
            textTransform: "none",
        }}
        onClick={props.onClick}> 
            {props.icon}
            <Typography
            style={{
                fontSize: "13px",
                fontWeight: 600,
                lineHeight: "20px",
                color: theme.customTheme.Color.Primary.White,
            }}> 
                {props.title} 
            </Typography>
        </Button>
    );
}

export default PrimaryButton;