import {defineConfig} from "vite";

export default defineConfig({
    base: "/Client", // Keep this as "/" if this is deployed to the root
    build: {
        outDir: "dist", // Default output directory (can be changed)
    },
});