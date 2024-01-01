import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { nodePolyfills } from "vite-plugin-node-polyfills";
import dotenv from "dotenv";

dotenv.config(); // Load environment variables from .env file

export default defineConfig({
  plugins: [react(), nodePolyfills()],
  define: {
    "process.env": process.env, // Expose loaded environment variables
  },
});