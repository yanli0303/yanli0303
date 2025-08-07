import react from "@vitejs/plugin-react";
import { defineConfig, type UserConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(
  async (): Promise<UserConfig> => ({
    plugins: [react()],
    base: "",
    build: {
      emptyOutDir: true,
      outDir: "../docs",
      assetsDir: "",
    },
  }),
);
