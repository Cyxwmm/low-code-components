// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from "@alilc/lowcode-types";

const ZmdmsIconMeta: IPublicTypeComponentMetadata = {
  group: "原子组件",
  category: "通用",
  componentName: "ZmdmsIcon",
  title: "图标",
  npm: {
    package: "@zmdms/lowcode-components",
    version: "0.1.0",
    exportName: "ZmdmsIcon",
    main: "",
    destructuring: true,
    subName: "图标",
  },
  configure: {
    props: [
      {
        title: "类型",
        name: "type",
        setter: {
          componentName: "ZmdmsIconSetter",
          initialValue: "icon-home",
          props: {
            type: "string",
            hasClear: "hasClear",
            icons: [
              "smile",
              "cry",
              "success",
              "warning",
              "prompt",
              "error",
              "help",
              "clock",
              "success-filling",
              "delete-filling",
              "favorites-filling",
            ],
          },
        },
      },
    ],
    supports: {
      className: true,
      style: true,
      events: ["onClick"],
    },
    component: {},
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: "图标",
    screenshot:
      "https://img.alicdn.com/imgextra/i1/O1CN01yR8vcY1M504YbHxzo_!!6000000001382-55-tps-56-56.svg",
    schema: {
      componentName: "ZmdmsIcon",
      props: {},
    },
  },
];

export default {
  ...ZmdmsIconMeta,
  snippets,
};
