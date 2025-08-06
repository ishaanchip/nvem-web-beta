import React from 'react';
import ReactDOM from 'react-dom/client';
import {QueryClient, QueryClientProvider} from '@tanstack/react-query'
import App from './App';
import { Provider } from "./components/ui/provider"


//able to preserve state of rendered data (no need to fetch API over and over again)
const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      staleTime: 5 * 60 * 1000, // 5 minutes
      cacheTime: 10 * 60 * 1000, // 10 minutes
      refetchOnWindowFocus: false,
      refetchOnMount: false,
      retry: 1
    }
  }
})



const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
      <Provider>
        <QueryClientProvider client={queryClient}>
            <App />
        </QueryClientProvider>
      </Provider>
);
