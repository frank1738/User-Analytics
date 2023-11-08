import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
const baseUrl = 'https://jsonplaceholder.typicode.com/users/1';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  define: {
    'import.meta.env.VITE_BASE_URL': JSON.stringify(baseUrl),
  },
});
