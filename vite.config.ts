import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGitHubActions = process.env.GITHUB_ACTIONS === 'true'

const base = isGitHubActions ? '/poc_google-analytics-4_react' : '/'

// https://vitejs.dev/config/
export default defineConfig({
  base: base,
  plugins: [react()],
})
