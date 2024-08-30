// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { IPublicTypeComponentMetadata, IPublicTypeSnippet } from "@alilc/lowcode-types";

const ZmdmsButtonMeta: IPublicTypeComponentMetadata = {
  group: "原子组件",
  category: "通用",
  componentName: "ZmdmsButton",
  title: "按钮",
  npm: {
    package: "@zmdms/lowcode-components",
    version: "0.1.0",
    exportName: "ZmdmsButton",
    main: "",
    destructuring: true,
    subName: "按钮",
  },
  configure: {
    props: [
      {
        title: "测试",
        name: "test",
        setter: {
          componentName: "StringSetter",
          isRequired: true,
        },
      },
      {
        title: {
          label: {
            type: "i18n",
            zh_CN: "内容",
            en_US: "children",
          },
          tip: {
            type: "i18n",
            zh_CN: "属性: children | 说明: 按钮的文本内容",
            en_US: "prop: children | description: The text content of the button",
          },
        },
        name: "children",
        setter: {
          componentName: "StringSetter",
          isRequired: true,
        },
      },
      {
        title: "类型",
        name: "type",
        setter: {
          componentName: "SelectSetter",
          initialValue: "primary",
          props: {
            options: [
              { title: "主按钮", value: "primary" },
              { title: "默认按钮", value: "default" },
              { title: "虚线按钮", value: "dashed" },
              { title: "文本按钮", value: "text" },
              { title: "链接按钮", value: "link" },
              { title: "幽灵按钮（背景透明）", value: "ghost" },
            ],
          },
        },
      },
      {
        title: "载入状态",
        name: "loading",
        setter: {
          componentName: "BoolSetter",
        },
      },
      {
        title: "大小",
        name: "size",
        setter: {
          componentName: "RadioGroupSetter",
          initialValue: "middle",
          props: {
            options: [
              { title: "大", value: "large" },
              { title: "中", value: "middle" },
              { title: "小", value: "small" },
            ],
          },
        },
      },
      {
        title: "是否禁用",
        name: "disabled",
        setter: {
          componentName: "BoolSetter",
        },
      },
      {
        title: {
          label: "图标",
          tip: "可以拖入一些Icon组件",
        },
        name: "icon",
        setter: {
          componentName: "SlotSetter",
        },
      },
      {
        // 如果没必要 可以直接设置一个简单的字符串说明下就可以了
        title: {
          label: {
            type: "i18n",
            zh_CN: "是否有权限",
            en_US: "do you have permission",
          },
          tip: {
            type: "i18n",
            zh_CN: "属性: isAuth | 说明: 设置是否有按钮权限",
            en_US: "prop: isAuth | description: Set whether there is button permission",
          },
        },
        name: "isAuth",
        setter: {
          componentName: "BoolSetter",
          initialValue: true,
        },
      },
      {
        title: {
          label: "提示文本",
          tip: "toltip",
        },
        name: "tooltipTitle",
        setter: {
          componentName: "StringSetter",
        },
      },
      {
        title: {
          label: "提示文本配置",
          tip: "toltip-config",
        },
        name: "tooltipConfig",
        setter: {
          componentName: "JsonSetter",
        },
      },
      {
        type: "group",
        title: "非常用属性",
        display: "accordion",
        defaultCollapsed: false,
        items: [
          {
            title: "块级",
            name: "block",
            setter: {
              componentName: "BoolSetter",
            },
          },
          {
            title: "危险按钮",
            name: "danger",
            setter: {
              componentName: "BoolSetter",
            },
          },
          {
            title: "形状",
            name: "shape",
            setter: {
              componentName: "RadioGroupSetter",
              initialValue: "default",
              props: {
                options: [
                  { title: "默认", value: "default" },
                  { title: "圆形", value: "circle" },
                  { title: "弧形", value: "round" },
                ],
              },
            },
          },
          {
            title: {
              label: "跳转链接",
              tip: "类似a标签的href属性",
            },
            name: "href",
            setter: {
              componentName: "StringSetter",
            },
          },
          {
            title: {
              label: "target属性",
              tip: "类似a标签的target属性",
            },
            name: "target",
            setter: {
              componentName: "StringSetter",
            },
          },
        ],
      },
    ],
    supports: {
      className: true,
      style: true,
      events: ["onClick"],
    },
    component: {
      isContainer: true,
    },
  },
};
const snippets: IPublicTypeSnippet[] = [
  {
    title: "按钮",
    screenshot:
      "https://alifd.oss-cn-hangzhou.aliyuncs.com/fusion-cool/icons/icon-light/ic_light_button.png",
    schema: {
      componentName: "ZmdmsButton",
      props: {
        isAuth: true,
        children: "点我",
      },
    },
  },
];

export default {
  ...ZmdmsButtonMeta,
  snippets,
};
