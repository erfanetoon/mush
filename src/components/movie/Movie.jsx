import React, { useState } from "react";
import Like from "../common/like/Like";

const Movie = (props) => {
  return (
    <tbody>
      <tr>
        <td>{props.movie.title}</td>
        <td>{props.movie.genre.name}</td>
        <td>{props.movie.numberInStock}</td>
        <td>{props.movie.dailyRentalRate}</td>
        <td className="text-center">
          <button
            type="button"
            className="btn btn-danger"
            onClick={props.onDelete}
          >
            Delete
          </button>
        </td>

        <td>
          <Like Liked={props.movie.liked} onLiked={props.onLiked} />
        </td>
      </tr>
    </tbody>
  );
};

export default Movie;
