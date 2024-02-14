import React from "react";
import { Button } from "@mui/material";
import "./SearchPage.css";
import SearchResult from "./SearchResult";

const SearchPage = () => {
  return (
    <div className="searchPage">
      <div className="searchPage_info">
        <p>88 Stays · 14 February to 07 April · 2 guest</p>
        <h1>Stays nearby</h1>
        <Button variant="outlined">Cancelliation Flexibility</Button>
        <Button variant="outlined">Type of place</Button>
        <Button variant="outlined">Price</Button>
        <Button variant="outlined">Rooms and Beds</Button>
        <Button variant="outlined">More filters</Button>
      </div>
      <SearchResult img="https://a0.muscache.com/im/pictures/4f3d1f26-c726-460e-ae6b-ed0e6645757c.jpg?im_w=720"
      location={"Sandton, South Africa"} 
      description={"2 guests · 1 bedroom · Wifi · Garden View · Free Parking · Room Service"} 
      star={4.65}
      price={"R1670 / night"}
      total={"R2050 total"}/>
      <SearchResult img="https://a0.muscache.com/im/pictures/5f848313-029f-4325-b7e6-3de884132d4d.jpg?im_w=720"
      location={"Pretoria, South Africa"} 
      description={"2 guests · 1 bedroom ·Private Shower · Wifi · 1 mile from center · Free Parking · Room Service"} 
      star={3.00}
      price={"R870 / night"}
      total={"R1640 total"}/>
      <SearchResult img="https://a0.muscache.com/im/pictures/miso/Hosting-47415758/original/cbd6dbb9-87de-46f3-bba1-59c45efad19d.jpeg?im_w=720"
      location={"Durban, South Africa"} 
      description={"2 guests · 1 bedroom · Wifi · Pools · Balcony · Free Parking · Room Service · Breakfast included"} 
      star={5.43}
      price={"R2350 / night"}
      total={"R4700 total"}/>
      <SearchResult img="https://a0.muscache.com/im/pictures/2a914d3b-399e-4234-a861-e34223fa06f5.jpg?im_w=720"
      location={"Cape Vines, South Africa"} 
      description={"4 guests · 2 bedrooms apartment · Shuttle · Wifi · Pools · garden and mountain view · Balcony · Free Parking · Room Service · Breakfast included"} 
      star={4.33}
      price={"R4750 / night"}
      total={"R10579 total"}/>
    </div>
  );
};

export default SearchPage;
