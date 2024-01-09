import { Dashicon } from '@wordpress/components';
import React from 'react';
import { FaCircleHalfStroke } from 'react-icons/fa6';
import TabPanelStyle from './TabPanelStyle';
const TabPanel = ({ value, onChange = () => { } }) => {
  return (
    <>
      <TabPanelStyle/>
      <div className="tab-panel-container">
        <div
          onClick={() => onChange('content')}
          className={`single-tab ${
            value === 'content'
              ? 'is-tab-active active-tab-color'
              : 'deActive-tab-color'
          }`}
        >
          <Dashicon icon="edit" />
          <span>Content</span>
        </div>
        <div
          onClick={() => onChange('style')}
          className={`single-tab ${
            value === 'style'
              ? 'is-tab-active active-tab-color'
              : 'deActive-tab-color'
          }`}
        >
          <FaCircleHalfStroke
            style={{ paddingBottom: '4px', fontSize: '20px' }}
          />
          <span>Style</span>
        </div>
      </div>
    </>
  );
};

export default TabPanel;
