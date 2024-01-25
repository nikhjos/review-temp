import React, { useState } from "react";

import { FaQuoteLeft, FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Reviews = ({
  id,
  name,
  image,
  text,
  job,
  nextPerson,
  prevPerson,
  randomPerson,
}) => {
  return (
    <div className="review">
      <div className="img-container">
        <img src={image} alt={name} className="person-img" />
        <i className="quote-icon">
          <FaQuoteLeft />
        </i>
      </div>
      <h1 className="author">{name} </h1>
      <p className="job">{job} </p>
      <p className="info">{text} </p>

      <div className="btn-container">
        <button type="button" className="prev-btn" onClick={prevPerson}>
          <FaArrowLeft />
        </button>
        <button type="button" className="next-btn" onClick={nextPerson}>
          <FaArrowRight />
        </button>
      </div>

      <button type="button" className="suprise-btn" onClick={randomPerson}>
        Suprice Me
      </button>
    </div>
  );
};

export default Reviews;
