import React, { useEffect, useState } from "react";
import "./RawPost.css";
import axios from "../../axios";
import { imageUrl } from "../../constants/constants";
function RawPost(props) {
  const [movies, setMovies] = useState([]);
  useEffect(() => {
    axios
      .get(props.urls)
      .then((responce) => {
        console.log(responce.data);
        setMovies(responce.data.results);
      })
      .catch((err) => {
        //alert("Network Error");
      });
  }, []);
  return (
    <div className="row">
      <h2>{props.title}</h2>
      <div className="posters">
        {movies.map((obj) => (
          <img
            className={props.isSmall ? "smallPoster" : "poster"}
            alt="poster"
            src={`${imageUrl + obj.backdrop_path}`}
          ></img>
        ))}
      </div>
    </div>
  );
}

export default RawPost;
