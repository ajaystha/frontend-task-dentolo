const path = require("path");
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      "@views": path.resolve(__dirname, "./src/views"),
      "@components": path.resolve(__dirname, "./src/components"),
      "@api": path.resolve(__dirname, "./src/api"),
      "@shared": path.resolve(__dirname, "./src/shared"),
    },
  },
  plugins: [react()],
});
