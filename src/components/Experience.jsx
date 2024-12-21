import React from "react";
import experience from "./data/experience.json";

const Experience = () => {
  return (
    <div className="container ex" id="experience">
      <h1 style={{textAlign:"center",padding:"10px",backgroundColor:"#05225A",margin:"10px"}} >EXPERIENCE</h1>
      {experience.map((data) => {
        return (
          <div
            key={data.id} // Move the key here, at the div level
            className="ex-items text-center my-5"
            data-aos="zoom-in"
            data-aos-duration="1000"
          >
            <div className="left">
              <img src={`/assets/${data.imageSrc}`} alt={data.role} />
            </div>
            <div className="right">
              <h2>{data.role}</h2>
              <h4>
                <span style={{ color: "yellowgreen" }}>
                  {data.startDate} - {data.endDate}
                </span>{" "}
                <span style={{ color: "yellow" }}>{data.location}</span>
              </h4>
              {/* Iterating over experiences dynamically */}
              {data.experiences.map((experienceItem, index) => (
                <h5 key={index} style={{ color: "yellow" }}>
                  {experienceItem}
                </h5>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Experience;
