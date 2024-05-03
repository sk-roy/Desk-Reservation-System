import React, { useContext } from "react";
import { CarDataType } from "../../assets/data";
import { CarContext } from "../../context/car-context";
import { Box, Card, CardContent, Stack, Typography, Grid } from "@mui/material";
import carsIcon from "../../assets/icons/icon-category-car.svg";
import tvSeriesIcon from "../../assets/icons/icon-category-tv.svg";
import BookmarkIcon from "../icons/bookmark-icon";
import BookmarkEmptyIcon from "../icons/bookmark-empy-icon";

interface CarTrendCardProps {
  car: CarDataType;
}

const CarTrendCard = ({ car }: CarTrendCardProps) => {
  const { dispatch } = useContext(CarContext);

  return (
    <Card
      key={car.id}
      elevation={0}
      style={{ backgroundColor: "transparent" }}
    >
      <CardContent
        style={{
          padding: 0,
          position: "relative",
          overflowX: "scroll",
          display: "flex",
        }}
      >
        <img
          src="https://www.amazon.com/images/G/01/img16/automotive/EmptyGarageImage._CB1524178633_.png"
          alt=""
          style={{ width: "300px", height: "100%", borderRadius: "8px" }}
        />
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bgcolor="rgba(0,0,0,0.6)"
          borderRadius="8px"
        />
        <Stack
          mt="6"
          spacing={0}
          position="absolute"
          bottom={0}
          left={0}
          right={0}
          p={4}
        >
          <Typography color="#E0E0E0" padding={0} aria-label="car title">
            {car.title}
          </Typography>
        </Stack>
      </CardContent>
    </Card>
  );
};

export default CarTrendCard;
