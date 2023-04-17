import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

import path from 'path'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@components': path.join(__dirname, 'src/components'),
      '@context': path.join(__dirname, 'src/context'),
      '@declarations': path.join(__dirname, 'src/declarations'),
      '@helpers': path.join(__dirname, 'src/helpers'),
      '@hooks': path.join(__dirname, 'src/hooks'),
      '@layout': path.join(__dirname, 'src/layout'),
      '@pages': path.join(__dirname, 'src/pages'),
    },
  },
  plugins: [react()],
})
