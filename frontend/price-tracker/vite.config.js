

import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  build: {
    outDir: "frontend/price-tracker/dist", 
    rollupOptions: {
      input: "frontend/price-tracker/index.html", 
    },
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000",
    },
  },
});
