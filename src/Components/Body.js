import React from "react";
import ResCard from "./ResCard";

import { useState } from "react";

import resList from "../utils/mockData";

const Body = () => {
    // local state variable
    const arr = useState(resList);
    // let [listOfResturant, setListOfResturant] = arr;

    let listOfResturant = arr[0];
    let setListOfResturant = arr[1];

    console.log(arr);

    return (
        <div className="body">
            <button className="top-rated-btn" onClick={
                () => {
                    const filteredList = listOfResturant.filter(res => res.data.avgRating > 4)
                    setListOfResturant(filteredList);
                }
            }>Filter Top Rated</button>
            <div className="res-container">
                {listOfResturant.map((res) => (
                    <ResCard key={res.data.id} resData={res} />
                ))}
            </div>
        </div>
    );
};

export default Body;