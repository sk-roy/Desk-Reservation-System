import React, { useState, SetStateAction, useContext } from "react";
import {
  Box,
  Paper,
  InputBase,
  InputAdornment,
  Typography,
} from "@mui/material";
import SearchIcon from "../../assets/icons/icon-search.svg";
import { CarDataType } from "../../assets/data";
import { CarContext } from "../../context/car-context";
import Layout from "../../layout";
import CarList from "../../components/car-list";
import CarTrendList from "../../components/car-list/carTrendList";

const Home = () => {
  const [search, setSearch] = useState("");
  const [searchList, setSearchList] = useState<CarDataType[]>([]);
  const { state } = useContext(CarContext);
  const { cars } = state;
  const trendingList = cars.filter((item) => item.isTrending === true);
  const recommendList = cars.filter((item) => item.isTrending !== true);

  const handleSearch = (e: { target: { value: SetStateAction<string> } }) => {
    setSearch(e.target.value);
    const newList = cars.filter((car) =>
      car.title.toLowerCase().includes(search.toLowerCase())
    );
    setSearchList(newList);
  };
  return (
    <Layout>
      <Box>
        <Paper
          component="form"
          sx={{
            display: "flex",
            alignItems: "center",
            borderRadius: "default",
            p: 1,
            backgroundColor: "#10141f",
            border: "none",
          }}
        >
          <InputBase
            placeholder="Search for Latest Car"
            sx={{
              ml: 1,
              flex: 1,
              color: "white",
              border: "none",
            }}
            value={search}
            onChange={handleSearch}
            startAdornment={
              <InputAdornment position="start">
                <img
                  src={SearchIcon}
                  alt="search icon"
                  width={20}
                  height={20}
                />
              </InputAdornment>
            }
          />
        </Paper>
      </Box>

      <Box py={2} px={4}>
        {search === "" ? (
          <Box width="100%">
            <Box width="100%">
              <Typography variant="h5" component="h1" my={6} fontWeight={400}>
                Latest Available Cars
              </Typography>
              <CarTrendList trendingList={trendingList} />
            </Box>
          </Box> 
        ) : (
          <Box width="100%">
            <Typography>
              Found {searchList.length} results for "{search}"{""}
            </Typography>
            <CarList recommendList={searchList} />
          </Box>
        )}
      </Box>
    </Layout>
  );
};

export default Home;
