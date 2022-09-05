import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'

import { QueryClientProvider } from 'react-query'
import { queryClient } from './services/queryClient'
import { theme } from './theme/theme'
import { ThemeProvider } from 'styled-components'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <App />
      </ThemeProvider>
    </QueryClientProvider>
  </React.StrictMode>
)
