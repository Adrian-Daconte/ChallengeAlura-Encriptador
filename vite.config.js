import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
    server: {
    host: true, // Permite que el servidor sea accesible externamente
    port: 5173, // Puedes cambiar el puerto si es necesario
  },
})
