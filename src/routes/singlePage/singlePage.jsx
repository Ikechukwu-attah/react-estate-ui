import React, { useContext, useState } from "react";
import { useLoaderData, useNavigate } from "react-router-dom";
import "./singlePage.scss";
import Slider from "../../components/slider/slider";
import { singlePostData, userData } from "../../lib/dummyData";
import Map from "../../components/map/map";
import { useSavedPost } from "./useSavedPost";
import { AuthContext } from "../../context/AuthContex";

const SinglePage = () => {
  const post = useLoaderData();
  console.log("Posts", post);
  const { mutate, error, isSuccess } = useSavedPost();
  const data = { postId: post?.id };
  const [saved, setIsaved] = useState(post?.isSaved);
  const { currentUser } = useContext(AuthContext);
  const navigate = useNavigate();

  const handleSavedPost = () => {
    if (!currentUser) {
      navigate("/login");
    } else {
      mutate(data);
      setIsaved((prev) => !prev);
    }
  };
  return (
    <div className="singlePage">
      <div className="details">
        <div className="wrapper">
          <Slider images={post.images} />

          <div className="info">
            <div className="top">
              <div className="post">
                <h1>{post.title}</h1>
                <div className="address">
                  <img src="/pin.png" alt="location pin icon" />
                  <span>{post.address}</span>
                </div>
                <div className="price"> $ {post.price}</div>
              </div>
              <div className="user">
                <img src={post.user.avatar} alt="user image" />
                <span>{post.user.username}</span>
              </div>
            </div>
            <div className="bottom">{post.postDetail.desc}</div>
          </div>
        </div>
      </div>
      <div className="features">
        <div className="wrapper">
          <p className="title">General</p>
          <div className="listVertical">
            <div className="feature">
              <img src="/utility.png" alt="utility" />
              <div className="featureText">
                <span>Utilities</span>
                {post.postDetail.utilities === "owner" ? (
                  <p>Owner is responsible</p>
                ) : (
                  <p>Tenant is responsible</p>
                )}
              </div>
            </div>

            <div className="feature">
              <img src="/utility.png" alt="utility" />
              <div className="featureText">
                <span>Pet Policy</span>
                {post.postDetail.pet === "allowed" ? (
                  <p>Pet is allowed</p>
                ) : (
                  <p>Pet is not allowed</p>
                )}
              </div>
            </div>

            <div className="feature">
              <img src="/utility.png" alt="utility" />
              <div className="featureText">
                <span>Income Policy</span>

                <p>{post.postDetail.income}</p>
              </div>
            </div>
          </div>
          <p className="title">Sizes</p>
          <div className="sizes">
            <div className="size">
              <img src="/size.png" alt="bed size" />
              <span>{post.postDetail.size}sqft</span>
            </div>

            <div className="size">
              <img src="/size.png" alt="bed size" />
              <span>{post.bedroom} bedrooms</span>
            </div>

            <div className="size">
              <img src="/size.png" alt="bed size" />
              <span>{post.bathroom} bathrooms</span>
            </div>
          </div>

          <p className="title">Nearby Places</p>
          <div className="listHorizontal">
            <div className="feature">
              <img src="/utility.png" alt="utility" />
              <div className="featureText">
                <span>School</span>
                <p>
                  {post.postDetail.school > 999
                    ? post.postDetail.school / 1000 + "km"
                    : post.postDetail.school + "m"}
                  away
                </p>
              </div>
            </div>

            <div className="feature">
              <img src="/utility.png" alt="utility" />
              <div className="featureText">
                <span>Bus Stop</span>
                <p>
                  {post.postDetail.bus > 999
                    ? post.postDetail.bus / 1000 + "km"
                    : post.postDetail.bus + "m"}{" "}
                  away
                </p>
              </div>
            </div>

            <div className="feature">
              <img src="/utility.png" alt="utility" />
              <div className="featureText">
                <span>Restaurant</span>
                <p>
                  {post.postDetail.restaurant > 999
                    ? post.postDetail.restaurant / 1000 + "km"
                    : post.postDetail.restaurant + "m"}{" "}
                  away
                </p>
              </div>
            </div>
          </div>
          <p className="title">Location</p>
          <div className="mapContainer">
            <Map items={[post]} />
          </div>
          <div className="buttons">
            <button>
              <img src="/chat.png" alt="chat icon" />
              Send a Message
            </button>

            <button
              onClick={handleSavedPost}
              style={{
                backgroundColor: saved ? "orange" : "",
                color: saved ? "#fff" : "",
              }}
            >
              <img src="/save.png" alt="chat icon" />
              {saved ? "Place Saved" : "Save the place"}
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SinglePage;
