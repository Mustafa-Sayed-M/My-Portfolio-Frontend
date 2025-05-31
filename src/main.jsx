import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

// Font Awesome:
import "@fortawesome/fontawesome-free/css/all.min.css";

// React Aos:
import "aos/dist/aos.css";

// React Router DOM:
import { BrowserRouter } from 'react-router-dom';

// React Query / Tanstack:
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

// Create a client
const queryClient = new QueryClient()

// App Providers
import AppProviders from './Contexts/AppProviders.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter>
      <QueryClientProvider client={queryClient}>
        <AppProviders>
          <App />
        </AppProviders>
      </QueryClientProvider>
    </BrowserRouter>
  </StrictMode>,
)
