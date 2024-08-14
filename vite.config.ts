import { defineConfig } from "vite";
import autoprefixer from "autoprefixer";

export default defineConfig({
  server: {
    port: 3000,
    open: true,
    host: "0.0.0.0",
  },
  css: {
    postcss: {
      plugins: [autoprefixer()],
    },
  },
});
