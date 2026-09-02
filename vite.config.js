import vue from "@vitejs/plugin-vue";
import { defineConfig } from "vite";
import tailwindcss from "@tailwindcss/vite";
import Sitemap from "vite-plugin-sitemap";

export default defineConfig({
    plugins: [
        vue(), 
        tailwindcss(),
        Sitemap({
            hostname: 'https://prive-extension.com',
            generateRobotsTxt: false,
            dynamicRoutes: [
                '/',
                '/privacy',
                '/setup',
                '/how-to-use',
                '/share',
                '/manage-access',
                '/delete-account'
            ]
        })
    ],
});
