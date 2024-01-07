import React from 'react';

const PanelCustomColorControlStyle = () => {
  return (
    <style>
      {`.panel-custom-color-control-container {
  border-radius: 5px;
  width: 250px;
}

.panel-custom-color-control-container .panel-custom-tab {
  display: flex;
  justify-content: flex-end;
}

.panel-custom-color-control-container .panel-custom-tab .custom-single-tab {
  padding: 3px 6px;
  cursor: pointer;
  border: 1px solid #ccc;
}

.panel-custom-color-control-container .panel-custom-tab .custom-single-tab:last-child {
  border-left: none;
}

.panel-custom-color-control-container .panel-custom-tab .custom-single-tab:hover {
  background: #ccc;
}

.panel-custom-color-control-container .panel-custom-tab .active {
  background: #006ba1;
  color: #e7e7e7;
}`}
    </style>
  );
};

export default PanelCustomColorControlStyle;