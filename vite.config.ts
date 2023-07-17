import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

export default defineConfig(({ mode }) => {
  const envConfig = dotenv.config({ path: `.env.${mode}` }).parsed;

  return {
    plugins: [react()],
    optimizeDeps: {
      exclude: ['@babel/runtime/helpers/inherits'],
    },
    define: {
      'process.env': Object.keys(envConfig).reduce((prev, next) => {
        prev[`process.env.${next}`] = JSON.stringify(envConfig[next]);
        return prev;
      }, {}),
    },
  };
});
