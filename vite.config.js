import { defineConfig } from "vite";
import { resolve } from "path";
export default defineConfig({
  build: {
    rollupOptions: {
      input: {
        main: resolve(__dirname, "index.html"),
        products: resolve(__dirname, "products.html"),
        category: resolve(__dirname, "category.html"),
        contact: resolve(__dirname, "contact.html"),
        product: resolve(__dirname, "product.html"),
        cart: resolve(__dirname, "cart.html"),
      },
    },
  },
});
