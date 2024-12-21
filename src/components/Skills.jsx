import React from "react";
import skills from "./data/skills.json";

const Skills = () => {
  return (
    <div className="container skills" id="skills">
      <h1  style={{textAlign:"center",padding:"10px",backgroundColor:"#05225A",margin:"10px"}} >SKILLS</h1>
      <div className="items">
        {skills.map((data) => (
          <div
            className="item"
            key={data.id} // key is correctly placed here
            data-aos="flip-left"
            data-aos-duration="1000"
          >
            <img
              src={`/assets/${data.imageSrc}`}
              alt={data.title} // Use title as alt text
            />
            <h3>{data.title}</h3>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
