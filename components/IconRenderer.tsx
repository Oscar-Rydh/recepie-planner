import { IconContext, IconType } from "react-icons";

export interface IconRendererProps {
  size: string;
  Icon: IconType;
}
export const IconRenderer = ({ size, Icon }: IconRendererProps) => (
  <IconContext.Provider value={{ size }}>
    <Icon />
  </IconContext.Provider>
);
