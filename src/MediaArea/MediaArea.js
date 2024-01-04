import { MediaUpload } from '@wordpress/block-editor';
import { FaRegTrashAlt } from 'react-icons/fa';
import './mediaArea.css';
const MediaArea = ({
  types= ['image'],
  image,
  onChange = () => {},
  default: defaults,
  height = '50px',
  width = '50px',
  label = 'Choose SVG',
}) => {
  return (
    <>
      <div className="custom-media-area-component">
        <MediaUpload
          gallery={false}
          onSelect={(value) => onChange(value.url)}
          value={image}
          allowedTypes={types}
          render={({ open }) => (
            <div className="media-area-container">
              <img
                onClick={open}
                style={{ height, width }}
                className="media-area-image"
                src={image || defaults}
                alt=""
              />
              <div onClick={() => onChange('')} className="media-delete">
                <FaRegTrashAlt />
              </div>
              <div onClick={open} className="media-bottom">
                <span>{label}</span>
              </div>
            </div>
          )}
          multiple={false}
        />
      </div>
    </>
  );
};

export default MediaArea;
