import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { Routes, Route, Navigate } from "react-router-dom";
import Index from "./pages/Index";
import NotFound from "./pages/NotFound";
import { SignIn, SignUp, AuthenticateWithRedirectCallback, SignedIn, SignedOut } from "@clerk/clerk-react";
import { motion, AnimatePresence } from "framer-motion";
import { pageTransition } from "@/lib/animations";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <AnimatePresence mode="wait">
        <Routes>
          <Route path="/" element={
            <motion.div
              key="index"
              initial="initial"
              animate="animate"
              exit="exit"
              variants={pageTransition}
            >
              <Index />
            </motion.div>
          } />
          <Route
            path="/sign-in/*"
            element={
              <motion.div
                key="signin"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
                className="min-h-screen flex items-center justify-center px-4"
              >
                <SignedIn>
                  <Navigate to="/" replace />
                </SignedIn>
                <SignedOut>
                  <SignIn signUpUrl="/sign-up" />
                </SignedOut>
              </motion.div>
            }
          />
          <Route
            path="/sign-up/*"
            element={
              <motion.div
                key="signup"
                initial="initial"
                animate="animate"
                exit="exit"
                variants={pageTransition}
                className="min-h-screen flex items-center justify-center px-4"
              >
                <SignedIn>
                  <Navigate to="/" replace />
                </SignedIn>
                <SignedOut>
                  <SignUp signInUrl="/sign-in" />
                </SignedOut>
              </motion.div>
            }
          />
          <Route path="/sso-callback" element={<AuthenticateWithRedirectCallback />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </AnimatePresence>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
