import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  // base: "/TaskNest/", // Set the base path for GitHub Pages
  // build: {
  //   outDir: "build", // Ensure the build output is correct
  // },
  plugins: [react()],
  base: '',
});
