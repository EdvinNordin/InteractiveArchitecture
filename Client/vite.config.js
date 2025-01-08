import {defineConfig} from "vite";
import {rmSync} from "fs"; // Node.js file system module

export default defineConfig({
    base: "/Client/", // Keep this as "/" if this is deployed to the root
    build: {
        outDir: "dist", // Default output directory (can be changed)
        emptyOutDir: true, // Automatically clears the output directory
    },
});