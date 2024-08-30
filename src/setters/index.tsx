// 注册设置器
import ZmdmsIconSetter from "./ZmdmsIconSetter";

console.log(window.AliLowCodeEngine.setter);

const { registerSetter } = window.AliLowCodeEngine.setter;

registerSetter("ZmdmsIconSetter", ZmdmsIconSetter);
