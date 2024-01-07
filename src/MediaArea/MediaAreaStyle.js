import React from 'react';

const MediaAreaStyle = () => {
  return (
    <style>
      {`.custom-media-area-component>.media-area-container {
  cursor: pointer;
  position: relative;
  overflow: hidden;
  height: 110px;
  background-image: linear-gradient(45deg,
      #d5d8dc 25%,
      transparent 0,
      transparent 75%,
      #d5d8dc 0,
      #d5d8dc),
    linear-gradient(45deg,
      #d5d8dc 25%,
      transparent 0,
      transparent 75%,
      #d5d8dc 0,
      #d5d8dc);
  background-size: 16px 16px;
  background-position: 0 0, calc(16px / 2) calc(16px / 2);
  background-color: #fff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.custom-media-area-component>.media-area-container>.media-bottom {
  position: absolute;
  bottom: -40px;
  left: 0;
  right: 0;
  text-align: center;
  background: #161616;
  color: white;
  padding: 5px 0;
  transition: all 0.3s ease-in-out;
}

.custom-media-area-component>.media-area-container>.media-delete {
  position: absolute;
  right: 10px;
  top: 10px;
  background: #161616;
  padding: 3px 6px;
  display: none;
  color: white;
}

.custom-media-area-component>.media-area-container>.media-area-image {
  object-fit: cover;
  border: none;
}

.media-area-container:hover>.media-bottom {
  bottom: 0;
}

.media-area-container:hover>.media-delete {
  display: block;
}`}
    </style>
  );
};

export default MediaAreaStyle;