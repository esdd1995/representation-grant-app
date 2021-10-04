import { defineConfig } from "vite";
import { createVuePlugin } from "vite-plugin-vue2";
import ViteComponents from "vite-plugin-components";
import { resolve, join } from "path";

const config = defineConfig({
  resolve: {
    alias: [
      {
        find: /~(.+)/,
        replacement: join(process.cwd(), "node_modules/$1")
      },
      {
        find: "@",
        replacement: `${resolve(__dirname, "src")}`
      }
    ]
  },

  build: {
    minify: true
  },

  plugins: [createVuePlugin({}), ViteComponents({ transformer: "vue2" })],

  server: {
    port: 8080,
    proxy: {
      "/api": {
        target: "http://localhost:8081",
        pathRewrite: { "^/represent-someone-who-died": "" },
        secure: false,
        changeOrigin: true,
        headers: {
          "X-Forwarded-Host": "localhost:8080",
          Connection: "keep-alive"
        }
      }
    }
  }
});

export default config;
