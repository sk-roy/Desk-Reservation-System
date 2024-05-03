import { Grid, Paper } from "@mui/material";
import React from "react";
import { CarDataType } from "../../assets/data";
import CarCard from "../car-card";

interface CarListProps {
  recommendList: CarDataType[];
}

const CarList = ({ recommendList }: CarListProps) => {
  console.log("The recommendList is : ", recommendList);
  return (
    <Grid container spacing={2}>
      {recommendList.map((item) => (
        <Grid item key={item.id} xs={12} sm={6} md={4} lg={3}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <CarCard car={item} />
          </Paper>
        </Grid>
      ))}
    </Grid>
  );
};

export default CarList;
