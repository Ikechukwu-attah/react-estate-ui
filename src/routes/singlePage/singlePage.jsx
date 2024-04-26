import React from "react";
import "./singlePage.scss";
import Slider from "../../components/slider/slider";
import { singlePostData, userData } from "../../lib/dummyData";
import Map from "../../components/map/map";

const SinglePage = () => {
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={singlePostData.images} />

          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{singlePostData.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="location pin icon" />
                  <span>{singlePostData.address}</span>
                </div>
                <div className="price"> $ {singlePostData.price}</div>
              </div>
              <div className="user">
                <img src={userData.img} alt="user image" />
                <span>{userData.name}</span>
              </div>
            </div>
            <div className="bottom">{singlePostData.description}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="feature" key={index}>
                <img src="/utility.png" alt="utility" />
                <div className="featureText">
                  <span>Utilities</span>
                  <p>Renter is responsible</p>
                </div>
              </div>
            ))}
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="size" key={index}>
                <img src="/size.png" alt="bed size" />
                <span>80 sqft</span>
              </div>
            ))}
          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            {Array.from({ length: 3 }).map((_, index) => (
              <div className="feature" key={index}>
                <img src="/utility.png" alt="utility" />
                <div className="featureText">
                  <span>Utilities</span>
                  <p>School</p>
                </div>
              </div>
            ))}
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[singlePostData]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="chat icon" />
              Send a Message
            </button>

            <button>
              <img src="/save.png" alt="chat icon" />
              Save the place
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
