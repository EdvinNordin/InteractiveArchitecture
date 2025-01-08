import {defineConfig} from "vite";
import { nodePolyfills } from 'vite-plugin-node-polyfills';
import inject from '@rollup/plugin-inject'; // Plugin for polyfills

export default defineConfig({
    base: "/", // Keep this as "/" if this is deployed to the root
    build: {
        outDir: "dist", // Default output directory (can be changed)
    },
    resolve: {
        alias: {
            process: "process/browser",
            stream: "stream-browserify",
            zlib: "browserify-zlib",
            util: 'util'
        }
    },
    plugins: [
        nodePolyfills()
        ]

});
