import React from "react";
import type { CoffeeItem } from "../../types/commons";
import "./Card.styles.css";
import Star from "../Star";

interface CardProps {
  picture: string;
  name: string;
  price: string;
  rating: string | number | null;
  votes?: number;
  popular: boolean;
  available: boolean;
}

const Card: React.FC<CardProps> = ({
  picture,
  name,
  price,
  rating,
  votes,
  popular,
  available,
}) => {
  return (
    <div className="card-container">
      <div className="image-container">
        <img src={picture} alt="" className="card-img" />
        {popular && <span className="popular-tag">Popular</span>}
      </div>
      <div className="container-label-and-price">
        <span>{name}</span>
        <div>
          <span className="price-text">{price}</span>
        </div>
      </div>
      <div className="ratings-container">
        <div className="rate-and-votes">
          <Star filled={!!rating} />
          {rating ? (
            <>
              <span className="small-text">{rating}</span>
              <span className="small-grey-text">{` (${votes}) votes`}</span>
            </>
          ) : (
            <span className="small-grey-text">No ratings</span>
          )}
        </div>
        {!available && (
          <div>
            <span className="sold-out-text">Sold Out</span>
          </div>
        )}
      </div>
    </div>
  );
};

export default Card;
