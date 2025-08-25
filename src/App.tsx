import { createBrowserRouter, RouterProvider, Navigate } from "react-router-dom";
import { AuthProvider, useAuth } from "@/hooks/useAuth";
import { Toaster } from "@/components/ui/toaster";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { TooltipProvider } from "@/components/ui/tooltip";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import Layout from "@/layouts/Layout";
import Dashboard from "@/pages/Dashboard";
import Automation from "@/pages/Automation";
import Energy from "@/pages/Energy";
import Safety from "@/pages/Safety";
import Settings from "@/pages/Settings";
import Notifications from "@/pages/Notifications";
import LandingPage from "@/pages/LandingPage";
import Auth from "@/pages/Auth";
import SetupWizard from "@/components/onboarding/SetupWizard";  // 👈 new import
import NotFound from "@/pages/NotFound";
import RoomDetails from "@/pages/RoomDetails";
import HelpCenter from "@/pages/HelpCenter";
import FAQ from "@/pages/FAQ";
import ContactSupport from "@/pages/ContactSupport";
import Feedback from "@/pages/Feedback";
import PrivacyPolicy from "@/pages/PrivacyPolicy";
import Ander from "@/pages/Ander";

const queryClient = new QueryClient();

function ProtectedRoute({ children }: { children: React.ReactNode }) {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-yellow-400 to-orange-500 rounded-2xl flex items-center justify-center mx-auto mb-4 animate-pulse">
            <div className="w-8 h-8 bg-white rounded-full"></div>
          </div>
          <p className="text-gray-600 font-inter">Loading...</p>
        </div>
      </div>
    );
  }

  if (!user) {
    return <Auth />;
  }

  // 👇 Example: check if onboarding is done (you’ll need to track this in your user profile)
  if (user && !user.onboardingComplete) {
    return <Navigate to="/onboarding" replace />;
  }

  return <>{children}</>;
}

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <Auth />
  },
  {
    path: "/onboarding",
    element: (
      <ProtectedRoute>
        <Onboarding />
      </ProtectedRoute>
    )
  },
  {
    path: "/",
    element: (
      <ProtectedRoute>
        <Layout />
      </ProtectedRoute>
    ),
    children: [
      {
        index: true,
        element: <Dashboard />
      },
      { path: "automation", element: <Automation /> },
      { path: "energy", element: <Energy /> },
      { path: "safety", element: <Safety /> },
      { path: "settings", element: <Settings /> },
      { path: "notifications", element: <Notifications /> },
      { path: "room/:roomId", element: <RoomDetails /> },
      { path: "help", element: <HelpCenter /> },
      { path: "faq", element: <FAQ /> },
      { path: "contact", element: <ContactSupport /> },
      { path: "feedback", element: <Feedback /> },
      { path: "privacy", element: <PrivacyPolicy /> },
      { path: "ander", element: <Ander /> }
    ]
  },
  {
    path: "/landing",
    element: <LandingPage onGetStarted={() => {}} />
  },
  {
    path: "*",
    element: <NotFound />
  }
]);

function AppContent() {
  return (
    <TooltipProvider>
      <RouterProvider router={router} />
      <Toaster />
      <Sonner />
    </TooltipProvider>
  );
}

const App = () => (
  <QueryClientProvider client={queryClient}>
    <AuthProvider>
      <AppContent />
    </AuthProvider>
  </QueryClientProvider>
);

export default App;
