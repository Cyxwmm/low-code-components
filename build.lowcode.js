// eslint-disable-next-line @typescript-eslint/no-require-imports
const { library } = require("./build.json");

module.exports = {
  alias: {
    "@": "./src",
  },
  plugins: [
    [
      "@alifd/build-plugin-lowcode",
      {
        library,
        engineScope: "@alilc",
        builtinAssets: [
          {
            packages: [
              // 低代码引擎内部依赖了next组件库
              // https://github.com/alibaba/lowcode-engine/issues/3007
              {
                title: "fusion组件库",
                package: "@alifd/next",
                version: "1.26.4",
                urls: [
                  "https://g.alicdn.com/code/lib/alifd__next/1.26.4/next.min.css",
                  "https://g.alicdn.com/code/lib/alifd__next/1.26.4/next-with-locales.min.js",
                ],
                library: "Next",
              },
            ],
            components: [],
            sort: {
              // 组件在组件面板中的 tab 分组
              groupList: ["原子组件", "精选组件"],
              // 组件在组件面板中的分类
              categoryList: ["通用"],
            },
            groupList: ["原子组件"],
          },
        ],
        // 注入自定义设置器
        setterMap: {},
      },
    ],
    "./build.lowcode.plugin.js",
  ],
};
