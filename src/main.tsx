import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { ClerkProvider } from '@clerk/clerk-react'
import { BrowserRouter, useNavigate } from 'react-router-dom'
import React from 'react'

const clerkPublishableKey = (import.meta.env.VITE_CLERK_PUBLISHABLE_KEY as string | undefined) ??
  "pk_test_cGVhY2VmdWwtYmVlLTE4LmNsZXJrLmFjY291bnRzLmRldiQ";

function Providers() {
  const navigate = useNavigate();
  return (
    <ClerkProvider
      publishableKey={clerkPublishableKey}
      routerPush={(to) => navigate(to)}
      routerReplace={(to) => navigate(to, { replace: true })}
    >
      <App />
    </ClerkProvider>
  );
}

const root = document.getElementById('root')!;

createRoot(root).render(
  <BrowserRouter>
    <Providers />
  </BrowserRouter>
);
