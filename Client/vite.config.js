/*import {defineConfig} from "vite";

export default defineConfig({
    base: "/", // Keep this as "/" if this is deployed to the root
    build: {
        outDir: "dist", // Default output directory (can be changed)
    },
});
*/
import { defineConfig } from 'vite';
import inject from '@rollup/plugin-inject'; // Plugin for polyfills

export default defineConfig({
    plugins: [
        // Use @rollup/plugin-inject to polyfill Buffer
        inject({
            Buffer: ['buffer', 'Buffer'], // Automatically replace 'Buffer' with the polyfill
        }),
    ],
});