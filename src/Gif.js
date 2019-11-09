import React from "react";

const Gif = ({ data: { url, title, images } }) => {
  return (
    <a href={url} target="_blank">
      <img src={images.fixed_height_small.url} alt={title} />
    </a>
  );
};

export default Gif;
