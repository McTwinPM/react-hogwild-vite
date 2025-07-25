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
  onHide,
}) {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleMoreInfoClick = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  const handleHideClick = (e) => {
    e.stopPropagation(); 
    onHide(name);
  };

  return (
    <div
      aria-label="hog card"
      className={`ui card ${styles.porkerCard}`}
      onClick={handleMoreInfoClick}
    >
      <img src={image} alt={`Photo of ${name}`} className={styles.img} />
      <h3>{name}</h3>
      <button onClick={handleHideClick} className={styles.hideButton}>
        Hide Me
      </button>
      {showMoreInfo && (
        <div className={styles.moreInfo}>
          <p>Specialty: {specialty}</p>
          <p>{weight}</p>
          <p>{highestMedal}</p>
          <p>{greased ? "Greased" : "Nongreased"}</p>
        </div>
      )}
    </div>
  );
}

export default PorkerCard;
