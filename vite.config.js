import { defineConfig } from "vite";
import { resolve } from "path";
import react from "@vitejs/plugin-react";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";

export default defineConfig({
    //skriv vilket plugin som används
    base: "/labb4/",
    plugins: [react(),
        ViteImageOptimizer({
            png: {quality:80},
            jpeg:{quality:90},
            webp:{quality: 70},
            avif:{quality:80},
            svg: {
                plugins:[
                    {name:"removeViewBox", active:false},
                    {name: "sortAttrs"},
                ]
            }
        })
    ],
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, "index.html"),
                sass: resolve(__dirname, "sass.html"),
                images: resolve(__dirname, "images.html"),
                iforelse: resolve(__dirname, "if-else-buttons.html"),
                animation: resolve(__dirname, "animation.html"),
            }
        }
    }
});