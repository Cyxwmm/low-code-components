import React from "react";
import { bizJsPrefix } from "../variables";
// import { IconOss } from "zmdms-webui";

export interface IZmdmsIconSetter {
  // 当前值
  value: string;
  // 默认值
  defaultValue: string;
  // setter 唯一输出
  onChange: (val: string) => void;
}

const ZmdmsIconSetter: React.FC<IZmdmsIconSetter> = (props: IZmdmsIconSetter) => {
  console.log(props);

  return <div>我是自建的设置器</div>;
};

ZmdmsIconSetter.displayName = `${bizJsPrefix}IconSetter`;

export default ZmdmsIconSetter;
