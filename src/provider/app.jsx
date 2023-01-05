import { Suspense } from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { ErrorBoundary } from "react-error-boundary";
import { QueryClientProvider } from "react-query";
import { ReactQueryDevtools } from "react-query/devtools";

import { queryClient } from "@/lib/react-query";
import { Oops } from "@/features/misc";
import { Loader } from "@/components/Elements/Loader";
import ScrollToTop from "@/features/misc/components/ScrollToTop";
import { AuthProvider } from "@/context/AuthContext";

export const AppProvider = ({ children }) => {
  const ErrorFallback = () => {
    return <Oops />;
  };

  return (
    <Suspense
      fallback={
        <div className="flex items-center justify-center w-screen h-screen">
          <Loader />
        </div>
      }
    >
      <ErrorBoundary FallbackComponent={ErrorFallback}>
        <QueryClientProvider client={queryClient}>
          <ReactQueryDevtools />
          <Router>
            <AuthProvider>
              <ScrollToTop />
              {children}
            </AuthProvider>
          </Router>
        </QueryClientProvider>
      </ErrorBoundary>
    </Suspense>
  );
};
