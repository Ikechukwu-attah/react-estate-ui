import React from "react";
import "./homePage.scss";
import SearchBar from "../../components/searchBar/searchBar";
const HomePage = () => {
  return (
    <div className="homePage">
      <div className="textContainer">
        <div className="wrapper">
          <h1 className="title">Find Real Estate & get Your dream place</h1>
          <p>
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Modi,
            laboriosam laborum iusto blanditiis hic excepturi vel, voluptate
            voluptatem atque obcaecati, minus non velit qui fuga amet nam?
            Deserunt, cumque expedita?
          </p>

          <SearchBar />

          <div className="boxes">
            <div className="box">
              <h1>16+</h1>
              <h2>Years of Experience </h2>
            </div>

            <div className="box">
              <h1>200</h1>
              <h2>Award gained </h2>
            </div>

            <div className="box">
              <h1>2000+</h1>
              <h2>Property Ready </h2>
            </div>
          </div>
        </div>
      </div>
      <div className="imageContainer">
        <img src="/bg.png" alt="bg-image" />
      </div>
    </div>
  );
};

export default HomePage;
