import React from "react";
import { useState } from "react";
import styles from "./PorkerCard.module.css"; // Assuming you have a CSS module for styles

function PorkerCard({
  name,
  image,
  specialty,
  weight,
  highestMedal,
  greased,
  onTileClick,
}) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleMoreInfoClick = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <div
      aria-label="hog card"
      className={`ui card ${styles.porkerCard}`}
      onClick={handleMoreInfoClick}
    >
      <img src={image} alt={`Photo of ${name}`} className={styles.img} />
      <h3>{name}</h3>
      {showMoreInfo && (
        <div className={styles.moreInfo}>
          <p>Specialty: {specialty} </p>
          <p>Weight: {weight} </p>
          <p>Highest Medal Achieved: {highestMedal} </p>
          <p>Greased: {greased ? "Yes" : "No"}</p>
        </div>
      )}
      
    </div>
  );
}

export default PorkerCard;
