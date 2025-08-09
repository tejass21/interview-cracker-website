import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { SignIn, SignUp, AuthenticateWithRedirectCallback, SignedIn, SignedOut } from "@clerk/clerk-react";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <Routes>
        <Route path="/" element={<Index />} />
        <Route
          path="/sign-in"
          element={
            <div className="min-h-screen flex items-center justify-center px-4">
              <SignedIn>
                <Navigate to="/" replace />
              </SignedIn>
              <SignedOut>
                <SignIn routing="path" path="/sign-in" signUpUrl="/sign-up" afterSignInUrl="/" />
              </SignedOut>
            </div>
          }
        />
        <Route
          path="/sign-up"
          element={
            <div className="min-h-screen flex items-center justify-center px-4">
              <SignedIn>
                <Navigate to="/" replace />
              </SignedIn>
              <SignedOut>
                <SignUp routing="path" path="/sign-up" signInUrl="/sign-in" afterSignUpUrl="/" />
              </SignedOut>
            </div>
          }
        />
        <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback />} />
        {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
        <Route path="*" element={<NotFound />} />
      </Routes>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
