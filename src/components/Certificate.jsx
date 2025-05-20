import React from "react";
import certificate from "./data/certificate.json";

const Certificate = () => {
  return (
    <div className="container certificate-container py-5" id="certificate">
      <h1 className="section-title text-center py-3 mb-4">CERTIFICATES</h1>
      
      <div className="certificate-grid">
        {certificate.map((data) => {
          return (
            <div
              key={data.id}
              className="certificate-card row mb-5"
              data-aos="flip-left"
              data-aos-easing="ease-in-cubic"
              data-aos-duration="2000"
            >
              <div className="col-md-4 mb-3 mb-md-0 text-center">
                <div className="certificate-image-wrapper">
                  <img 
                    src={`/assets/${data.imageSrc}`} 
                    alt={data.title} 
                    className="certificate-image img-fluid rounded shadow"
                  />
                </div>
                <div className="certificate-date mt-3">
                  <span className="badge bg-success py-2 px-3">
                    {data.nomDate}
                  </span>
                </div>
              </div>
              
              <div className="col-md-8">
                <div className="certificate-details p-4 bg-light rounded shadow-sm">
                  <h3 className="certificate-title mb-3">{data.title}</h3>
                  <p className="certificate-location mb-3">
                    <span className="location-badge badge bg-secondary">
                      {data.location}
                    </span>
                  </p>
                  
                  <div className="certificate-description">
                    {data.description.map((certificateItem, index) => (
                      <div key={index} className="certificate-item mb-2">
                        {certificateItem}
                      </div>
                    ))}
                  </div>
                  
                  <div className="mt-4">
                    <a href="#" className="btn btn-outline-primary btn-sm">
                      <i className="fas fa-external-link-alt me-1"></i> View Certificate
                    </a>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Certificate;