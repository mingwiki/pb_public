import tailwindcss from "@tailwindcss/vite"
import react from "@vitejs/plugin-react"
import { defineConfig } from "vite"

export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    outDir: "../pocketbase/pb_public",
    emptyOutDir: true, // also necessary
  },
})
