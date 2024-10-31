import React from "react"; // default import

import {CDN_LINK} from "../utils/constants" // named import

const ResCard = ({resData:{data}}) => {
    const {cloudinaryImageId, name, avgRating, cuisines} = data;
    return (
        <div className="res-card">
            <img src={{CDN_LINK} + cloudinaryImageId} alt="res-logo" className="res-logo" />
            <h2 className="res-name">{name}</h2>
            <h4 className="res-rating">{avgRating} <span>★</span></h4>
            <h5 className="cuisines">{cuisines.join(", ")}</h5>
        </div>
    );
};

export default ResCard;