import React from "react";
import { API_KEY, imageUrl } from "../../constants/constants";
import axios from "../../axios";
import "./Banner.css";
import { useEffect } from "react";
import { useState } from "react";
function Banner() {
  const [movie, setMovie] = useState();
  useEffect(() => {
    axios
      .get(`trending/all/week?api_key=${API_KEY}&language=en-US`) //this is the imp bit, use `` or called backtick to edit the URL. Use $ before API_KEY to import the same into the URL. Use .then to store the data in responce and then console logged it.
      .then((responce) => {
        console.log(responce.data.results[0]);
        setMovie(responce.data.results[0]); //the first movie's data is stored in movie using setMovie
      });
  }, []);
  return (
    <div
      style={{
        backgroundImage: `url(${movie ? imageUrl + movie.backdrop_path : ""})`,
      }} //backgroundImage:url(). this is the method that's supposed to be here, along with imageUrl + movie.backdrop_path.
      className="banner"
    >
      <div className="content">
        <h1 className="title">{movie ? movie.title : ""}</h1>{" "}
        {/*display the movie title or an empty string, this is called terniary operator */}
        <div className="banner_button">
          <button className="button">Play</button>
          <button className="button">My List</button>
        </div>
        <h1 className="description">{movie ? movie.overview : ""}</h1>{" "}
        {/*the movie overview is displayed here */}
      </div>
      <div className="fade_bottom"></div>
    </div>
  );
}

export default Banner;
