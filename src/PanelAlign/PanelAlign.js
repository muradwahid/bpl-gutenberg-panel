import { AiOutlineCaretDown } from 'react-icons/ai';
import PanelAlignStyle from "./PanelAlignStyle"
const PanelAlign = ({
  label,
  icons,
  onChange = () => { },
  value,
  style,
  labelPosition = 'left',
}) => {
  const labelAlign = labelPosition == 'left' || labelPosition == 'right';
  return (
    <div style={style}>
      <PanelAlignStyle />
      <div
        style={{
          width: '100%',
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: `${labelAlign ? 'center' : 'normal'}`,
          flexDirection: `${labelPosition === 'left'
            ? 'row'
            : labelPosition == 'right'
              ? 'row-reverse'
              : labelPosition === 'top'
                ? 'column'
                : 'column-reverse'
            }`,
        }}
      >
        <p
          style={{
            margin: `${labelAlign ? '0' : '8px 0'}`,
            fontSize: '14px',
            fontWeight: 400,

          }}
        >
          {label}
        </p>
        <div
          style={{
            display: 'flex',
            border: '1px solid #ccc',
          }}
        >
          {icons &&
            icons.map((icon, i) => (
              <div
                key={i}
                onClick={() => onChange(icon.label.toLowerCase())}
                className={`single-icon-admin-panel panelAlign ${value === icon.label.toLowerCase() ? 'isActive' : ''
                  }`}
              >
                {icon.value}
                <div className="icon-picker-tooltip-container">
                  <div
                    style={{ padding: '2px 6px' }}
                    className="icon-picker-tooltip"
                  >
                    <span>{icon.label}</span>
                    <AiOutlineCaretDown />
                  </div>
                </div>
              </div>
            ))}
        </div>
      </div>
    </div>
  );
};

export default PanelAlign;
