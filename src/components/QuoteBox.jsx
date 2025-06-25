// components/CourseCard.jsx
import React from "react";
import "../App.css";

function CourseCard({ title, professor, year, people, rating, duration, image, liked }) {
  return (
    <div className="course-card">
      <img src={image} alt={title} />
      <div className="course-info">
        <h4>{title}</h4>
        <p>{year}학년 / 👥 {people} / {professor}</p>
        <div className="course-footer">
          <span>⭐ {rating}</span>
          <span>{duration}</span>
          <span>{liked ? "❤️" : "🤍"}</span>
        </div>
      </div>
    </div>
  );
}

export default CourseCard;
