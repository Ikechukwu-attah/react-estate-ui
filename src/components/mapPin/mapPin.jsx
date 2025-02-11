import React from "react";
import { Marker, Popup } from "react-leaflet";
import { Link } from "react-router-dom";
import "./mapPin.scss";

const MapPin = ({ item }) => {
  return (
    <Marker position={[item.latitude, item.longitude]}>
      <Popup>
        <div className="popUpContainer">
          <img src={item.img} alt="house" />
          <div className="textContainer">
            <Link to={`${item.id}`}>{item.title}</Link>
            <span>{item.bedroom} bedroom</span>
            <b>$ {item.price}</b>
          </div>
        </div>
      </Popup>
    </Marker>
  );
};

export default MapPin;
