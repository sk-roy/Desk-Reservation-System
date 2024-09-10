import { CustomStyles } from "../../theme"
import DeleteIcon from "../icons/DeleteIcon";
import { Button, Typography } from "antd";
import Edit03Icon from "../icons/Edit03Icon";

const { Text } = Typography;

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
            border: `1px solid ${CustomStyles.Color.OffWhite[3]}`,
            backgroundColor: CustomStyles.Color.Primary.White,
            boxShadow: CustomStyles.Shadows.Elevation1,
        }}>
            <Edit03Icon color={CustomStyles.Color.grey[3]} />
            <Text
            style={{
                fontSize: "12px",
                fontWeight: 600,
                lineHeight: "18px",
                color: CustomStyles.Color.grey[3],
            }}> Edit </Text>
        </Button>
    );
}

export default EditButton;