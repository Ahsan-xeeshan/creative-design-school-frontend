/* eslint-disable no-unused-vars */
import React from "react";
import {
  Route,
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
} from "react-router-dom";

import RootLayout from "./Components/Layouts/RootLayout";
import AddClass from "./DashboardContents/AddClass";
import AllUsers from "./DashboardContents/AllUsers";
import EnrolledClasses from "./DashboardContents/EnrolledClasses";
import ManageClass from "./DashboardContents/ManageClass";
import MyClasses from "./DashboardContents/MyClasses";
import Payment from "./DashboardContents/Payment";
import PaymentHistory from "./DashboardContents/PaymentHistory";
import SelectClass from "./DashboardContents/SelectClass";
import AllClass from "./Pages/AllClass";
import AllInstructor from "./Pages/AllInstructor";
import Dashboard from "./Pages/Dashboard";
import Home from "./Pages/Home";
import LogIn from "./Pages/LogIn";
import Signup from "./Pages/Signup";

import UpdateClass from "./DashboardContents/UpdateClass";
import ErrorPage from "./Pages/ErrorPage";
import "./index.css";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<RootLayout />}>
        <Route index element={<Home />} />
        <Route path="/all-classes" element={<AllClass />} />
        <Route path="/all-instructor" element={<AllInstructor />} />
        <Route path="/login" element={<LogIn />} />
        <Route path="/signup" element={<Signup />} />
      </Route>
      <Route path="/dashboard/" element={<Dashboard />}>
        <Route path="manage-classes" element={<ManageClass />} />
        <Route path="all-users" element={<AllUsers />} />
        <Route path="my-classes" element={<MyClasses />} />
        <Route path="add-class" element={<AddClass />} />
        <Route path="update-class" element={<UpdateClass />} />
        <Route path="selected-classes" element={<SelectClass />} />
        <Route path="enrolled-classes" element={<EnrolledClasses />} />
        <Route path="payment/:id" element={<Payment />} />
        <Route path="payment-history" element={<PaymentHistory />} />
        <Route path="*" element={<ErrorPage />} />
      </Route>
    </Route>
  )
);

function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
