import React, { useEffect, useState } from "react";
import FlatList from "flatlist-react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "../Styles/home.css";

const Home = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    const res = await fetch("https://dummyjson.com/products?limit=10", {
      method: "GET",
      redirect: "follow",
    });
    const resJson = await res.json();
    console.log("DATA : ", resJson);
    setData(resJson.products);
  };

  const renderPerson = (item, idx) => {
    return <div className="productDiv" key={idx}></div>;
  };

  return (
    <div className="homeContainer">
      <div className="corousalDiv">
        <Carousel
          autoPlay={true}
          infiniteLoop={true}
          showThumbs={false}
          showStatus={false}
          showIndicators={false}
        >
          <div className="corousalItem">
            <img src={require("../images/banner1.png")} />
          </div>
          <div className="corousalItem">
            <img src={require("../images/banner2.jpg")} />
          </div>
          <div className="corousalItem">
            <img src={require("../images/banner3.jpg")} />
          </div>
        </Carousel>
      </div>
      {/* <div className="flatListDiv">
        <FlatList
          className="customGrid"
          list={data}
          displayGrid={true}
          // gridGap="10px"
          // rowGap="10px"
          renderItem={renderPerson}
          renderWhenEmpty={() => <div>List is empty!</div>}
          // sortBy={["firstName", { key: "lastName", descending: true }]}
          // groupBy={(person) => (person.info.age > 18 ? "Over 18" : "Under 18")}
        />
      </div> */}
    </div>
  );
};

export default Home;
