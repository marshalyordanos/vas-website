import React from "react";
import { Route, Routes } from "react-router-dom";
import ProtectedRoute from "./utils/ProtectedRoute";
import LoginPage from "./pages/LoginPage";

const AppRouting = () => {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <Routes>
        <Route element={<ProtectedRoute />}>
          {/* <Route path='/login' element={ <Navigate to="/crm" replace={true} />} /> */}
          {/* <Route path='/login' element={ <Navigate to="/crm" replace={true} />} />  */}
          {/* <Route
          path="/"
          element={<Navigate to="/crm/dashboard" replace={true} />}
        />

        <Route path="/crm/*" element={<LayoutRouting />} />
         */}
        </Route>

        <Route path="/login" element={<LoginPage />} />
        <Route path="/signup" element={<div>Signup</div>} />

        <Route path="*" element={<h1>Page is not found</h1>} />
      </Routes>
    </div>
  );
};

export default AppRouting;
