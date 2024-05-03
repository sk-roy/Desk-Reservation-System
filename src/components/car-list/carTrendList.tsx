import { Box, Grid, Paper } from "@mui/material";
import React from "react";
import { CarDataType } from "../../assets/data";
import CarTrendCard from "../car-card/carTrend";

interface CarTrendListProps {
  trendingList: CarDataType[];
}

const CarTrendList = ({ trendingList }: CarTrendListProps) => {
  console.log("The trendingList is : ", trendingList);
  return (
    <Box sx={{ display: "flex", gap: 2, overflowX: "scroll" }}>
      {trendingList.map((car) => (
        <Grid item key={car.id}>
          <Paper elevation={0} sx={{ backgroundColor: "transparent" }}>
            <CarTrendCard car={car} />
          </Paper>
        </Grid>
      ))}
    </Box>
  );
};

export default CarTrendList;
