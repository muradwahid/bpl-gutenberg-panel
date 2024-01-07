import React, { useEffect, useState } from 'react';
import { HiMiniXMark } from 'react-icons/hi2';
import { IoMdCopy } from 'react-icons/io';
import PanelRepeaterStyle from './PanelRepeaterStyle';
const PanelRepeater = ({
  children,
  title,
  length = 2,
  onChange = () => {},
  toggle = false,
  copy = true,
  delete: del = true,
  index = null,
  handleDelete,
  handleCopy,
}) => {
  const [open, setOpen] = useState(toggle);
  useEffect(() => {
    onChange(open);
  }, [open, toggle]);
  return (
    <>
      <PanelRepeaterStyle/>
      <div className="panel-repeater-wrapper">
        <div className="panel-repeater-header-wrapper">
          <p
            onClick={() => setOpen(!open)}
            className="panel-repeater-header-title"
          >
            {title}
          </p>
          <div className="panel-repeater-icon-group">
            {copy && (
              <div
                onClick={handleCopy ? () => handleCopy(index) : null}
                className="panel-repeater-icon"
              >
                <IoMdCopy />
              </div>
            )}
            {del && length > 1 && (
              <div
                onClick={handleDelete ? () => handleDelete(index) : null}
                className="panel-repeater-icon"
              >
                <HiMiniXMark />
              </div>
            )}
          </div>
        </div>
        {open && (
          <div
            style={{
              padding: '10px',
              border: '1px solid #ccc',
              borderTop: 'none',
            }}
          >
            {children}
          </div>
        )}
      </div>
    </>
  );
};

export default PanelRepeater;
