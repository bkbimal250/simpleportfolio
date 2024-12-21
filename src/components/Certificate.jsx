import React from "react";
import certificate from "./data/certificate.json";

const Certificate = () => {
  return (
    <div className="container ex" id="certificate">
      <h1>certificates</h1>
      {certificate.map((data) => {
        return (
          <div
            key={data.id} // Move the key here, at the div level
            className="ex-items text-center my-5"
            data-aos="flip-left"
            data-aos-easing="ease-in-cubic"
            data-aos-duration="2000"
          >
            <div className="left">
              <img src={`/assets/${data.imageSrc}`} alt={data.role} />
            </div>
            <div className="right">
              <h2>{data.title}</h2>
              <h4>
                <span style={{ color: "yellowgreen" }}>{data.nomDate}</span>{" "}
                <span style={{ color: "yellow" }}>{data.location}</span>
              </h4>
              {/* Iterating over certificates dynamically */}
              {data.description.map((certificateItem, index) => (
                <h5 key={index} style={{ color: "yellow" }}>
                  {certificateItem}
                </h5>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Certificate;
