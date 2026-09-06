import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  base: "/lonely-chat-ai/",
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        loveydovey: resolve(__dirname, "7755.html")
      }
    }
  }
});
