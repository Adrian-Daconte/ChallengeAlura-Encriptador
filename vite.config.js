import { defineConfig } from 'vite'

// https://vitejs.dev/config/
export default defineConfig({
  base: '', // Configura la base pública como una cadena vacía 
  server: {
    host: true, // Permite que el servidor sea accesible externamente
    port: 5173, // Puedes cambiar el puerto si es necesario
   
  },
})
