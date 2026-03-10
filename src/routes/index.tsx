import { createBrowserRouter } from "react-router-dom";
import MainLayout from "@/layout/main/MainLayout";
import AuthLayout from "@/layout/auth/AuthLayout";
import Login from "@/components/auth/Login";
import ForgotPassword from "@/components/auth/ForgotPassword";
import Register from "@/components/auth/Register";
import VerifyOTP from "@/components/auth/VerifyOTP";
import ResetPassword from "@/components/auth/ResetPassword";
import SetPassword from "@/components/auth/SetPassword";
import Overview from "@/components/pages/overview/Overview";
import NotFound from "@/components/NotFound";
import TermsConditions from "@/components/pages/termsConditions/TermsConditions";
import PrivacyPolicy from "@/components/pages/privacyPolicy/PrivacyPolicy";
import AboutUs from "@/components/pages/aboutUs/AboutUs";
import Settings from "@/components/pages/settings/Settings";
import Message from "@/components/pages/message/Message";
import Notifications from "@/components/pages/notifications/Notifications";
import Profile from "@/components/pages/profile/Profile";
import UserManagement from "@/components/pages/userManagement/UserManagement";
import DoctorManagement from "@/components/pages/doctorManagement/DoctorManagement";
import AppointmentTransactions from "@/components/pages/appointmentTransactions/AppointmentTransactions";
import SupplimentTransactions from "@/components/pages/supplimentTransactions/SupplimentTransactions";
import Store from "@/components/pages/store/Store";
import AddProduct from "@/components/pages/store/AddProduct";
import SubscriptionManagement from "@/components/pages/subscriptionManagement/SubscriptionManagement";
import Subscriber from "@/components/pages/subscriber/Subscriber";

const router = createBrowserRouter([
  {
    path: "/auth",
    element: <AuthLayout />,
    children: [
      {
        path: "login",
        element: <Login />,
      },
      {
        path: "signup",
        element: <Register />,
      },
      {
        path: "forgot-password",
        element: <ForgotPassword />,
      },
      {
        path: "verify-otp",
        element: <VerifyOTP />,
      },
      {
        path: "reset-password",
        element: <ResetPassword />,
      },
      {
        path: "set-password",
        element: <SetPassword />,
      },
    ],
  },
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        path: "/",
        element: <Overview />,
      },
      {
        path: "overview",
        element: <Overview />,
      },
      {
        path: "user-management",
        element: <UserManagement />,
      },
      {
        path: "doctor-management",
        element: <DoctorManagement />,
      },
      {
        path: "appointment-transactions",
        element: <AppointmentTransactions />,
      },
      {
        path: "suppliment-transactions",
        element: <SupplimentTransactions />,
      },
      {
        path: "store",
        element: <Store />,
      },
      {
        path: "subscription-management",
        element: <SubscriptionManagement />,
      },
      {
        path: "subscriber",
        element: <Subscriber />,
      },
      {
        path: "store/add",
        element: <AddProduct />,
      },
      {
        path: "terms-conditions",
        element: <TermsConditions />,
      },
      {
        path: "privacy-policy",
        element: <PrivacyPolicy />,
      },
      {
        path: "about-us",
        element: <AboutUs />,
      },
      {
        path: "settings",
        element: <Settings />,
      },
      {
        path: "message",
        element: <Message />,
      },
      {
        path: "notifications",
        element: <Notifications />,
      },
      {
        path: "profile",
        element: <Profile />,
      },
    ],
  },
  {
    path: "*",
    element: <NotFound />,
  },
]);

export default router;
