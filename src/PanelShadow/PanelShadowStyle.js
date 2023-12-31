import React from 'react';

const PanelShadowStyle = () => {
  return (
    <style>
      {`.panel-shadow-container {
  border: 1px solid #b9b9b9;
  padding: 10px;
  border-radius: 5px;
  width: 255px;
}
.panel-shadow-container .single-shadow-panel {
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 10px;
  font-size: 12px;
}

.panel-shadow-container
  .single-shadow-panel
  .components-base-control.components-input-control.components-number-control {
  margin: 0px;
}

.panel-shadow-container .components-base-control.components-toggle-control {
  margin: 0px;
}
`}
    </style>
  );
};

export default PanelShadowStyle;