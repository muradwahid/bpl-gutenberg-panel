import React from 'react';

const TabPanelStyle = () => {
  return (
    <style>
      {`.tab-panel-container {
  display: flex;
}

.tab-panel-container .single-tab {
  display: flex;
  flex-direction: column;
  row-gap: 2px;
  align-items: center;
  padding: 8px 0;
  transition: background-color 0.2s ease-in-out;
  cursor: pointer;
  width: 100%;
}
.tab-panel-container .single-tab .dashicon {
  font-size: 20px;
}
.tab-panel-container .single-tab:hover {
  background-color: #f1f2f3;
}
.tab-panel-container .is-tab-active {
  border-bottom: 3px solid black;
}
.tab-panel-container .deActive-tab-color {
  color: #515962;
}
.tab-panel-container .active-tab-color {
  color: #0c0d0e;
}
`}
    </style>
  );
};

export default TabPanelStyle;