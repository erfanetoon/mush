import React from "react";

import { BsHeart } from "react-icons/bs";
import { BsHeartFill } from "react-icons/bs";

const Like = (props) => {
  return (
    <div>
      {props.Liked ? (
        <BsHeartFill onClick={props.onLiked} />
      ) : (
        <BsHeart onClick={props.onLiked} />
      )}
    </div>
  );
};

export default Like;
