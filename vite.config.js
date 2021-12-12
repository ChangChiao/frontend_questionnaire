import { defineConfig, loadEnv } from "vite";
import copy from "rollup-plugin-copy";
import babel from "vite-babel-plugin";
import reactRefresh from "@vitejs/plugin-react-refresh";
import reactJsx from "vite-react-jsx";
import path from "path";
import dynamicImportVars from "@rollup/plugin-dynamic-import-vars";
import { visualizer } from "rollup-plugin-visualizer";
const version = process.env.npm_package_version.replace(/['"]+/g, "");

export default ({ mode }) => {
  process.env = { ...process.env, ...loadEnv(mode, process.cwd()) };
  return defineConfig({
    base: "./",
    plugins: [
      reactRefresh(),
      reactJsx(),
      babel(),
      copy({
        targets: [
          {
            src: "src/ver.txt",
            dest: `dist/`,
            rename: (name, extension) => `v${version}.${extension}`,
          },
        ],
        hook: "writeBundle",
      }),
      visualizer(),
    ],
    resolve: {
      alias: {
        "@/": `${path.resolve(__dirname, "src")}/`,
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // additionalData: `@import "./src/style/setting/base.scss";
          // @import "./src/style/tools/all.scss";`,
        },
      },
    },
    build: {
      rollupOptions: {
        plugins: [dynamicImportVars()],
        output: {
          chunkFileNames: "js/[name]-[hash].js",
          entryFileNames: "js/[name]-[hash].js",
          assetFileNames: "[ext]/[name]-[hash].[ext]",
        },
      },
    },
  });
};
