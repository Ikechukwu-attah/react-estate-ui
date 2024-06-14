import React, { useState } from "react";
import "./listPage.scss";
import { listData } from "../../lib/dummyData";
import Filter from "../../components/filter/filter";
import Card from "../../components/card/card";
import Map from "../../components/map/map";
import { Await, useLoaderData } from "react-router-dom";
import { Suspense } from "react";

const ListPage = () => {
  const posts = useLoaderData();

  const data = listData;
  const [mapData, setMapData] = useState();
  return (
    <div className="listPage">
      <div className="listContainer">
        <div className="wrapper">
          <Filter />
          <Suspense fallback={<p>Loading...</p>}>
            <Await
              resolve={posts.postResponse}
              errorElement={<p>Error loading data!</p>}
            >
              {(postResponse) => {
                if (!postResponse || !postResponse.data) {
                  return <p>No data available.</p>;
                }
                return (
                  <>
                    {postResponse.data.map((item) => (
                      <Card key={item.id} item={item} />
                    ))}
                  </>
                );
              }}
            </Await>
          </Suspense>
        </div>
      </div>
      <div className="mapContainer">
        <Suspense fallback={<p>Loading map...</p>}>
          <Await
            resolve={posts.postResponse}
            errorElement={<p>Error loading map!</p>}
          >
            {(postResponse) => <Map items={postResponse?.data || []} />}
          </Await>
        </Suspense>
      </div>
    </div>
  );
};

export default ListPage;
