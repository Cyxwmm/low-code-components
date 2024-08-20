import React from "react";
import { bizJsPrefix } from "../../variables";
import { Button } from "zmdms-webui";
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IButtonProps } from "zmdms-webui/dist/es/button/interface";

export interface IZmdmsButtonProps extends IButtonProps {}

const ZmdmsButton: React.FC<IZmdmsButtonProps> = (props: IZmdmsButtonProps) => {
  return <Button {...props} />;
};

ZmdmsButton.displayName = `${bizJsPrefix}Button`;

export default ZmdmsButton;
