import React, { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import HostVanNavBar from "./HostDetailpages/HostVanNavBar";

const HosyVansDetails = () => {
  const { id } = useParams();
  const [currentVan, setCurrentVan] = useState(null);

  useEffect(() => {
    fetch(`/api/host/vans/${id}`)
      .then((resp) => resp.json())
      .then((data) => {
        setCurrentVan(data.vans);
      });
  });

  //   if (!currentVan) {
  //     return <h1>Loading...</h1>
  // }

  return (
    <>
      <section>
        <Link to=".." relative="path" className="back-button">
          &larr; <span>Back to all vans</span>
        </Link>
        {currentVan ? (
          <div className="host-van-detail-layout-container">
            <div className="host-van-detail">
              <img src={currentVan.imageUrl} />
              <div className="host-van-detail-info-text">
                <i className={`van-type van-type-${currentVan.type}`}>
                  {currentVan.type}
                </i>
                <h3>{currentVan.name}</h3>
                <h4>${currentVan.price}/day</h4>
              </div>
            </div>
            <HostVanNavBar />
            <Outlet context={{ currentVan }} />
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
      </section>
    </>
  );
};

export default HosyVansDetails;
