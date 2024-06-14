import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import UploadWidget from "../../components/uploadWidget/UploadWidget";
import "./addNewPost.scss";
import { useAddNewPost } from "./useAddNewPost";
import DOMPurify from "dompurify";

const AddNewPost = () => {
  const [images, setImages] = useState([]);
  const [data, setData] = useState({});
  const [quillValue, setQuillValue] = useState("");
  const { error, mutate } = useAddNewPost();

  const handleChange = (e) => {
    const { name, value } = e.target;
    const type = e.target.type;
    const [section, key] = name.split(".");
    const parsedValue = type === "number" ? parseFloat(value) : value;
    console.log({ parsedValue });

    setData((prev) => ({
      ...prev,
      [section]: {
        ...prev[section],
        [key]: parsedValue,
      },
    }));
  };
  const handleSubmit = (e) => {
    e.preventDefault();

    const cleanQuillValue = DOMPurify.sanitize(quillValue);
    const textContent =
      new DOMParser().parseFromString(cleanQuillValue, "text/html").body
        .textContent || "";

    // Append the Quill value to postDetail.desc
    const updatedData = {
      ...data,
      postData: {
        ...data.postData,
        images: images, // Adding images to postData
      },
      postDetail: {
        ...data.postDetail,
        desc: textContent,
      },
    };

    console.log({ updatedData });
    mutate(updatedData);
  };

  return (
    <div className="newPostPage">
      <div className="formContainer">
        <h1>Add New Post</h1>
        <div className="wrapper">
          <form onSubmit={handleSubmit}>
            <div className="item">
              <label htmlFor="title">Title</label>
              <input
                id="title"
                name="postData.title"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="price">Price</label>
              <input
                id="price"
                name="postData.price"
                type="number"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="address">Address</label>
              <input
                id="address"
                name="postData.address"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="item description">
              <label htmlFor="desc">Description</label>
              <ReactQuill
                theme="snow"
                value={quillValue}
                onChange={setQuillValue}
              />
            </div>
            <div className="item">
              <label htmlFor="city">City</label>
              <input
                id="city"
                name="postData.city"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="bedroom">Bedroom Number</label>
              <input
                id="bedroom"
                name="postData.bedroom"
                type="number"
                min={1}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="bathroom">Bathroom Number</label>
              <input
                id="bathroom"
                name="postData.bathroom"
                type="number"
                min={1}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="latitude">Latitude</label>
              <input
                id="latitude"
                name="postData.latitude"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="longitude">Longitude</label>
              <input
                id="longitude"
                name="postData.longitude"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="type">Type</label>
              <select id="type" name="postData.type" onChange={handleChange}>
                <option value="rent">Rent</option>
                <option value="buy">Buy</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="property">Property</label>
              <select
                id="property"
                name="postData.property"
                onChange={handleChange}
              >
                <option value="apartment">Apartment</option>
                <option value="house">House</option>
                <option value="condo">Condo</option>
                <option value="land">Land</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="utilities">Utilities Policy</label>
              <select
                id="utilities"
                name="postDetail.utilities"
                onChange={handleChange}
              >
                <option value="owner">Owner is responsible</option>
                <option value="tenant">Tenant is responsible</option>
                <option value="shared">Shared</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="pet">Pet Policy</label>
              <select id="pet" name="postDetail.pet" onChange={handleChange}>
                <option value="allowed">Allowed</option>
                <option value="not-allowed">Not Allowed</option>
              </select>
            </div>
            <div className="item">
              <label htmlFor="income">Income Policy</label>
              <input
                id="income"
                name="postDetail.income"
                type="text"
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="size">Total Size (sqft)</label>
              <input
                id="size"
                name="postDetail.size"
                type="number"
                min={0}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="school">School</label>
              <input
                id="school"
                name="postDetail.school"
                type="number"
                min={0}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="bus">Bus</label>
              <input
                id="bus"
                name="postDetail.bus"
                type="number"
                min={0}
                onChange={handleChange}
              />
            </div>
            <div className="item">
              <label htmlFor="restaurant">Restaurant</label>
              <input
                id="restaurant"
                name="postDetail.restaurant"
                type="number"
                min={0}
                onChange={handleChange}
              />
            </div>
            <button type="submit" className="sendButton">
              Add Post
            </button>
            {error && <span>{error.message}</span>}
          </form>
        </div>
      </div>
      <div className="sideContainer">
        {images.map((image, index) => (
          <img src={image} key={index} alt="" />
        ))}
        <UploadWidget
          uwConfig={{
            multiple: true,
            cloudName: "drzzy49rr",
            uploadPreset: "estate",
            folder: "posts",
          }}
          setState={setImages}
        />
      </div>
    </div>
  );
};

export default AddNewPost;
