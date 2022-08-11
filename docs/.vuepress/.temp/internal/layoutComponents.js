import { defineAsyncComponent } from 'vue'

export const layoutComponents = {
  "404": defineAsyncComponent(() => import("F:/VSCodeProjects/MySource/webpackProjects/webpack5_docs/node_modules/@vuepress/theme-default/lib/client/layouts/404.vue")),
  "Layout": defineAsyncComponent(() => import("F:/VSCodeProjects/MySource/webpackProjects/webpack5_docs/node_modules/@vuepress/theme-default/lib/client/layouts/Layout.vue")),
}
