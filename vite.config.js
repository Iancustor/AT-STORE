import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        blog: resolve(__dirname, "blog.html"),
        category: resolve(__dirname, "category.html"),
        contact: resolve(__dirname, "contact.html"),
        product: resolve(__dirname, "product.html"),
      },
    },
  },
});
