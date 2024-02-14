import React, { useEffect } from "react";
import Banner from "./Banner";
import { useDispatch, useSelector } from "react-redux";
import "./Home.css";
import Card from "./Card";
import { listListing } from "../actions/listingActions";

const Home = () => {
  const dispatch = useDispatch();

  const listingList = useSelector((state) => state.listingList);
  const { loading, error, listings } = listingList;

  useEffect(() => {
    dispatch(listListing());
  }, [dispatch]);

  return (
    <div className="home">
      <Banner />
      {loading ? (
        <h2>Loading...</h2>
      ) : error ? (
        <h3>{error}</h3>
      ) : (
        <div className="home_section">
          {listings.map(listing => (
            <Card
            key={listing.img}
            src={listing.img}
            title={listing.title}
            description={listing.description}
            price={listing.price}
          />
          ))}
          
        </div>
      )}
      {/* <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/ed54e1b0-f979-447f-898a-aa7b1e8e4bdd.jpg?im_w=720"
          title="Krompan, South Africa"
          description="Mountains and garden views."
        />
        <Card
          src="https://a0.muscache.com/im/pictures/prohost-api/Hosting-39878763/original/9e9f9e06-7499-42c6-a686-8e5a3f3471c4.jpeg?im_w=720"
          title="Thabo Mofutsanyane, South Africa"
          description="Experience the beauty of South African Safary!"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/d1061623-322c-439e-9fb2-878b0331ab9c.jpg?im_w=720"
          title="Ponta do Ouro, Mozambique"
          description="A great place to spend holidays with your family"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/ce0c6f69-11eb-424a-9a5d-ba6562fe820d.jpg?im_w=720"
          title="Hartbeespoort, South Africa"
          description="Mountains and Lake Views"
        />
      </div> */}
      {/* <div className="home_section">
        <Card
          src="https://a0.muscache.com/im/pictures/a07836b0-0c2c-4e52-8281-9dd34ef504dd.jpg?im_w=720"
          title="Dolphin Coat, South Africa"
          description="Mountains and Lake Views"
          price="R2450/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/4f3d1f26-c726-460e-ae6b-ed0e6645757c.jpg?im_w=720"
          title="Sandton, South Africa"
          description="Best Estates"
          price="R4730/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/miso/Hosting-54120055/original/2bd9185d-655b-4144-bcc6-fa96b187f41e.jpeg?im_w=720"
          title="Johannesburg, South Africa"
          description="City of Gold"
          price="R3520/night"
        />
        <Card
          src="https://a0.muscache.com/im/pictures/fc3cb465-c6a0-4f59-afcb-1c37649bc194.jpg?im_w=720"
          title="Pretoria, South Africa"
          description="City of Power"
          price="R1500/night"
        />
      </div> */}
    </div>
  );
};

export default Home;
