import React from 'react';

const PanelAlignStyle = () => {
  return (
    <style>
      {`.single-icon-admin-panel {
  position: relative;
  width: 100%;
  padding: 8px 8px !important;
  transition: background 0.2 ease-in-out;
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
}

.single-icon-admin-panel.isActive {
  background-color: #d5d8dc;
}

.single-icon-admin-panel:hover {
  background: #ebebeb;
}

.single-icon-admin-panel {
  border-right: 1px solid #ccc;
}

.single-icon-admin-panel:last-child {
  border-right: 0px;
}

.single-icon-admin-panel.isActive-include {
  background: #d7d7d7;
}

.icon-picker-tooltip-container {
  position: absolute;
  top: -30px;
  left: 50%;
  transform: translateX(-50%);
  display: none;
}

.icon-picker-tooltip {
  position: relative;
  background: black;
  border-radius: 3px;
}

.icon-picker-tooltip>span {
  color: white;
}

.icon-picker-tooltip>svg {
  position: absolute;
  bottom: -10px;
  font-size: 18px;
  left: 50%;
  transform: translateX(-50%);
}

.single-icon-admin-panel:hover>.icon-picker-tooltip-container {
  display: block;
}`}
    </style>
  );
};

export default PanelAlignStyle;