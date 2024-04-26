import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";

import "./map.scss";
import "leaflet/dist/leaflet.css";
import MapPin from "../mapPin/mapPin";

const Map = ({ items }) => {
  const position = [52.4797, -1.90269];
  return (
    <MapContainer
      center={position}
      zoom={7}
      scrollWheelZoom={false}
      className="map"
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {items?.map((item) => (
        <MapPin key={item.id} item={item} />
      ))}
    </MapContainer>
  );
};

export default Map;
