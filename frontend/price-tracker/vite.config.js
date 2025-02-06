import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  base: "/", // Assurez-vous que cela correspond à la racine de votre déploiement
  build: {
    outDir: "dist",
  },
  server: {
    proxy: {
      "/api": "http://localhost:3000", // Proxy pour le développement local
    },
  },
});