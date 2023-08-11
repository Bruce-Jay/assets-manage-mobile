import { defineConfig } from "umi";

export default defineConfig({
  routes: [
    { path: "/", component: "index" },
  ],
  lessLoader: {
    javascriptEnabled: true,
    modifyVars: {
      '@base-font-size': 37.5,
      '@primary-color': '#57068C'
    }
  },
  npmClient: 'yarn',
  proxy: {
    '/api': {
      'target': 'https://mock.apifox.cn/m1/3006246-0-default',
      'changeOrigin': true,
      'pathRewrite': { '^/api' : '' },
    }
  }
});
