import { Button, Typography } from "@mui/material";
import DeleteIcon from "../icons/DeleteIcon";
import Edit03Icon from "../icons/Edit03Icon";
import theme from "../../theme";


const EditButton = () => {
    return (
        <Button
        style={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-between",
            alignItems: "center",
            borderRadius: "6px",
            padding: "7px 12px 7px 10px",
            gap: "6px",
            border: `1px solid ${theme.customTheme.Color.OffWhite[3]}`,
            backgroundColor: theme.customTheme.Color.Primary.White,
            boxShadow: theme.customTheme.Shadows.Elevation1,
            textTransform: "none",
        }}>
            <Edit03Icon color={theme.customTheme.Color.grey[3]} />
            <Typography
            style={{
                fontSize: "12px",
                fontWeight: 600,
                lineHeight: "18px",
                color: theme.customTheme.Color.grey[3],
            }}> Edit </Typography>
        </Button>
    );
}

export default EditButton;