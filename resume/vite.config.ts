import react from "@vitejs/plugin-react";
import { type UserConfig, defineConfig } from "vite";

// https://vitejs.dev/config/
export default defineConfig(
	async (): Promise<UserConfig> => ({
		plugins: [react()],
		base: "",
		build: {
			emptyOutDir: false,
			outDir: "docs",
			assetsDir: "",
		},
	}),
);
