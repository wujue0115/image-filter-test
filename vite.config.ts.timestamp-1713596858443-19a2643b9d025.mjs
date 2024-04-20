// vite.config.ts
import { fileURLToPath, URL } from "node:url";
import { defineConfig } from "file:///C:/Users/HP/gitlab/image16/node_modules/.pnpm/vite@5.2.7_@types+node@20.11.30/node_modules/vite/dist/node/index.js";
import vue from "file:///C:/Users/HP/gitlab/image16/node_modules/.pnpm/@vitejs+plugin-vue@5.0.4_vite@5.2.7_vue@3.4.21/node_modules/@vitejs/plugin-vue/dist/index.mjs";
import VueDevTools from "file:///C:/Users/HP/gitlab/image16/node_modules/.pnpm/vite-plugin-vue-devtools@7.0.25_vite@5.2.7_vue@3.4.21/node_modules/vite-plugin-vue-devtools/dist/vite.mjs";
import UnoCSS from "file:///C:/Users/HP/gitlab/image16/node_modules/.pnpm/unocss@0.58.8_postcss@8.4.38_vite@5.2.7/node_modules/unocss/dist/vite.mjs";
import AutoImport from "file:///C:/Users/HP/gitlab/image16/node_modules/.pnpm/unplugin-auto-import@0.17.5/node_modules/unplugin-auto-import/dist/vite.js";
import Components from "file:///C:/Users/HP/gitlab/image16/node_modules/.pnpm/unplugin-vue-components@0.26.0_vue@3.4.21/node_modules/unplugin-vue-components/dist/vite.js";
var __vite_injected_original_import_meta_url = "file:///C:/Users/HP/gitlab/image16/vite.config.ts";
var vite_config_default = defineConfig({
  plugins: [
    vue(),
    VueDevTools(),
    UnoCSS(),
    AutoImport({
      include: [
        /\.[tj]sx?$/,
        // .ts, .tsx, .js, .jsx
        /\.vue$/,
        /\.vue\?vue/
        // .vue
      ],
      imports: ["vue", "vue-router", "pinia"],
      dirs: ["./src/composables/**", "./src/stores/**"],
      dts: "src/auto-imports.d.ts"
    }),
    Components({})
  ],
  resolve: {
    alias: {
      "@": fileURLToPath(new URL("./src", __vite_injected_original_import_meta_url))
    }
  }
});
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcudHMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxIUFxcXFxnaXRsYWJcXFxcaW1hZ2UxNlwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcSFBcXFxcZ2l0bGFiXFxcXGltYWdlMTZcXFxcdml0ZS5jb25maWcudHNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzL0hQL2dpdGxhYi9pbWFnZTE2L3ZpdGUuY29uZmlnLnRzXCI7aW1wb3J0IHsgZmlsZVVSTFRvUGF0aCwgVVJMIH0gZnJvbSAnbm9kZTp1cmwnXHJcblxyXG5pbXBvcnQgeyBkZWZpbmVDb25maWcgfSBmcm9tICd2aXRlJ1xyXG5pbXBvcnQgdnVlIGZyb20gJ0B2aXRlanMvcGx1Z2luLXZ1ZSdcclxuaW1wb3J0IFZ1ZURldlRvb2xzIGZyb20gJ3ZpdGUtcGx1Z2luLXZ1ZS1kZXZ0b29scydcclxuaW1wb3J0IFVub0NTUyBmcm9tICd1bm9jc3Mvdml0ZSdcclxuaW1wb3J0IEF1dG9JbXBvcnQgZnJvbSAndW5wbHVnaW4tYXV0by1pbXBvcnQvdml0ZSdcclxuaW1wb3J0IENvbXBvbmVudHMgZnJvbSAndW5wbHVnaW4tdnVlLWNvbXBvbmVudHMvdml0ZSdcclxuXHJcbi8vIGh0dHBzOi8vdml0ZWpzLmRldi9jb25maWcvXHJcbmV4cG9ydCBkZWZhdWx0IGRlZmluZUNvbmZpZyh7XHJcbiAgcGx1Z2luczogW1xyXG4gICAgdnVlKCksXHJcbiAgICBWdWVEZXZUb29scygpLFxyXG4gICAgVW5vQ1NTKCksXHJcbiAgICBBdXRvSW1wb3J0KHtcclxuICAgICAgaW5jbHVkZTogW1xyXG4gICAgICAgIC9cXC5bdGpdc3g/JC8sIC8vIC50cywgLnRzeCwgLmpzLCAuanN4XHJcbiAgICAgICAgL1xcLnZ1ZSQvLFxyXG4gICAgICAgIC9cXC52dWVcXD92dWUvIC8vIC52dWVcclxuICAgICAgXSxcclxuICAgICAgaW1wb3J0czogWyd2dWUnLCAndnVlLXJvdXRlcicsICdwaW5pYSddLFxyXG4gICAgICBkaXJzOiBbJy4vc3JjL2NvbXBvc2FibGVzLyoqJywgJy4vc3JjL3N0b3Jlcy8qKiddLFxyXG4gICAgICBkdHM6ICdzcmMvYXV0by1pbXBvcnRzLmQudHMnXHJcbiAgICB9KSxcclxuICAgIENvbXBvbmVudHMoe30pXHJcbiAgXSxcclxuICByZXNvbHZlOiB7XHJcbiAgICBhbGlhczoge1xyXG4gICAgICAnQCc6IGZpbGVVUkxUb1BhdGgobmV3IFVSTCgnLi9zcmMnLCBpbXBvcnQubWV0YS51cmwpKVxyXG4gICAgfVxyXG4gIH1cclxufSlcclxuIl0sCiAgIm1hcHBpbmdzIjogIjtBQUEwUSxTQUFTLGVBQWUsV0FBVztBQUU3UyxTQUFTLG9CQUFvQjtBQUM3QixPQUFPLFNBQVM7QUFDaEIsT0FBTyxpQkFBaUI7QUFDeEIsT0FBTyxZQUFZO0FBQ25CLE9BQU8sZ0JBQWdCO0FBQ3ZCLE9BQU8sZ0JBQWdCO0FBUDhJLElBQU0sMkNBQTJDO0FBVXROLElBQU8sc0JBQVEsYUFBYTtBQUFBLEVBQzFCLFNBQVM7QUFBQSxJQUNQLElBQUk7QUFBQSxJQUNKLFlBQVk7QUFBQSxJQUNaLE9BQU87QUFBQSxJQUNQLFdBQVc7QUFBQSxNQUNULFNBQVM7QUFBQSxRQUNQO0FBQUE7QUFBQSxRQUNBO0FBQUEsUUFDQTtBQUFBO0FBQUEsTUFDRjtBQUFBLE1BQ0EsU0FBUyxDQUFDLE9BQU8sY0FBYyxPQUFPO0FBQUEsTUFDdEMsTUFBTSxDQUFDLHdCQUF3QixpQkFBaUI7QUFBQSxNQUNoRCxLQUFLO0FBQUEsSUFDUCxDQUFDO0FBQUEsSUFDRCxXQUFXLENBQUMsQ0FBQztBQUFBLEVBQ2Y7QUFBQSxFQUNBLFNBQVM7QUFBQSxJQUNQLE9BQU87QUFBQSxNQUNMLEtBQUssY0FBYyxJQUFJLElBQUksU0FBUyx3Q0FBZSxDQUFDO0FBQUEsSUFDdEQ7QUFBQSxFQUNGO0FBQ0YsQ0FBQzsiLAogICJuYW1lcyI6IFtdCn0K
