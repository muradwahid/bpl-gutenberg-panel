declare enum DeviceType {
  Desktop = "desktop",
  Tablet = "tablet",
  Mobile = "mobile",
}
type IPropsType = {
  value: DeviceType;
  onChange: Function;
  style: object;
  className: string;
  position: "horizontal" | "vertical";
};
declare const Device: React.FC<IPropsType>;
interface DynamicTagProps { 
  tagName: string;
  [key:string]: string;
}
declare const DynamicTag: React.FC<DynamicTagProps>;
interface IMediaArea {
  types: [];
  value: any;
  onChange: Function;
  default: string;
  height: string;
  width: string;
  label: string;
  style: object;
  className: string;
}
declare const MediaArea: (props: IMediaArea) => import("react").JSX.Element;
type IPanelAlign = {
  label?: string;
  value?: string;
  icons: [];
  onChange: Function;
  style?: object;
  labelPosition: "left" | "right" | "top" | "bottom";
  className?: string;
};
declare const PanelAlign: (props: IPanelAlign) => import("react").JSX.Element;
type IPanelColorType = {
  label?: string;
  value: string;
  colors?: [];
  onChange: Function;
  style?: object;
  className?: string;
};
declare const PanelColorControl: (
  props: IPanelColorType
) => import("react").JSX.Element;
type IPanelColorPickerType = {
  label?: string;
  value?: string;
  colors?: [];
  onChange?: Function;
};
declare const PanelColorPicker: (
  props: IPanelColorPickerType
) => import("react").JSX.Element;
type IColorControlType = {
  value?: string;
  label?: string;
  onChange?: Function;
};
declare const PanelCustomColorControl: React.FC<IColorControlType>;
type IGradientPicker = {
  label?: string;
  value?: string;
  onChange?: Function;
};
declare const PanelGradientPicker: ({
  value,
  onChange,
  label,
}: IGradientPicker) => React.JSX.Element;
type IPanelRepeater = {
  children?: React.ReactElement | React.ReactNode | JSX.Element;
  title?: string;
  length?: number;
  onChange?: Function;
  toggle?: boolean;
  copy?: boolean;
  delete?: boolean;
  index?: number;
  handleDelete?: Function;
  handleCopy?: Function;
};
declare const PanelRepeater: React.FC<IPanelRepeater>;
type ISingleShadow = {
  label?: string;
  value?: string;
  onChange?: Function;
};
declare const PanelSingleShadow: (props: ISingleShadow) => React.JSX.Element;
type ITabTypes = {
  options: [];
  onChange: (value: any) => void;
  value?: string;
  paddingY?: number;
  paddingX?: number;
};
declare const Tab: (props: ITabTypes) => React.JSX.Element;
type ITabPanelTypes = {
  value?: string;
  onChange?: (value: string) => void;
};
declare const TabPanel: (props: ITabPanelTypes) => React.JSX.Element;

type ISortableProviderTypes = {
  onChange?: (value: any) => void;
  items?: Array;
  children?: React.ReactNode | React.ReactElement;
}

declare const SortableProvider: ({
  onChange = () => {},
  items,
  children,
}: ISortableProviderTypes) => React.JSX.Element;







export {
  Device,
  DynamicTag,
  MediaArea,
  PanelAlign,
  PanelColorControl,
  PanelColorPicker,
  PanelCustomColorControl,
  PanelGradientPicker,
  PanelRepeater,
  PanelSingleShadow,
  Tab,
  TabPanel,
  SortableProvider
};