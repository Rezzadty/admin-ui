import React, { useState } from "react";
import AuthLayout from "../components/Layouts/AuthLayout";
import FormSignup from "../components/Fragments/FormSignUp";
import AppSnackbar from "../components/Elements/AppSnackbar";
import { registerService } from "../services/authServices";

function SignUp({ onToggle }) {
  const [snackbar, setSnackbar] = useState({
    open: false,
    message: "",
    severity: "success",
  });

  const handleCloseSnackbar = () => {
    setSnackbar((prev) => ({ ...prev, open: false }));
  };

  const handleRegister = async (name, email, password) => {
    try {
      const response = await registerService(name, email, password);
      
      setSnackbar({ 
        open: true, 
        message: response.msg || "Register Berhasil", 
        severity: "success" 
      });
      
      console.log("User registered:", response);
      
    } catch (err) {
      setSnackbar({ 
        open: true, 
        message: err.msg || "Register Gagal", 
        severity: "error" 
      });
    }
  };

  return (
    <AuthLayout>
      <FormSignup onSubmit={handleRegister} />
      <AppSnackbar
        open={snackbar.open}
        message={snackbar.message}
        severity={snackbar.severity}
        onClose={handleCloseSnackbar}
      />
    </AuthLayout>
  );
}

export default SignUp