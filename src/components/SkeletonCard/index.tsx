import React from "react";
import "./SkeletonCard.styles.css";

interface SkeletonCardProps {
  elements?: number;
}

const SkeletonCard: React.FC<SkeletonCardProps> = ({ elements = 6 }) => {
  return (
    <div className="skeleton-container">
      {Array.from({ length: elements }).map((_, index) => (
        <div className="skeleton-card" key={index}>
          <div className="skeleton-image"></div>
          <div className="skeleton-text skeleton-title"></div>
          <div className="skeleton-text skeleton-description"></div>
        </div>
      ))}
    </div>
  );
};

export default SkeletonCard;
