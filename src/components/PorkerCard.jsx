import React from "react";
import{ useState }  from "react";

const PorkerCard = ({ name, image, onClick }) => {
  const [showMoreInfo, setShowMoreInfo] = useState(false);

  const handleMoreInfoClick = () => {
    setShowMoreInfo(!showMoreInfo);
  };

  return (
    <div aria-label="hog card" className="porker-card" onClick={onClick}>
      <img src={image} alt={name} />
      <h3>
        <button onClick={handleMoreInfoClick}>
          {showMoreInfo ? "Hide info on" : "More Info on"} {name}
        </button>
      {showMoreInfo && (
        <div className="more-info">
          <p>Specialty: {specialty} </p>
          <p>Weight: </p>
          <p>Highest Medal Achieved: </p>
          <p>Greased: {name ? "Yes" : "No"}</p>
        </div>
      )}
      </h3>

      <style jsx>{`
        .porker-card {
          border: 1px solid #ccc;
          border-radius: 8px;
          padding: 16px;
          text-align: center;
          cursor: pointer;
          transition: transform 0.2s;
        }
        .porker-card:hover {
          transform: scale(1.05);
        }
        img {
          height: auto;
          border-radius: 50%;
        }
      `}</style>
    </div>
  );
};

export default PorkerCard;
