import React from "react";
import { bizJsPrefix } from "../../variables";
import { IconOss } from "zmdms-webui";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IconFontProps } from "@ant-design/icons/lib/components/IconFont";

export interface IZmdmsIconProps extends IconFontProps {}

const ZmdmsIcon: React.FC<IZmdmsIconProps> = (props: IZmdmsIconProps) => {
  return <IconOss {...props} />;
};

ZmdmsIcon.displayName = `${bizJsPrefix}Icon`;

export default ZmdmsIcon;
