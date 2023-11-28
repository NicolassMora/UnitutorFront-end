import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Alumnos = () => {
  const navigate = useNavigate();
  const [userId, setUserId] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/login", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id: userId, contrasena: password }),
      });

      if (response.ok) {
        const data = await response.json();
        console.log(data);
        navigate("/Paginaprincipal");
      } else {
        alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
      }
    } catch (error) {
      console.error("Error al iniciar sesión:", error);
      alert("Error al iniciar sesión. Por favor, inténtalo de nuevo.");
    }
  };

  const fondoEstilo = {
    backgroundImage: `url("https://www.roc21.com/blog/wp-content/uploads/2012/09/fondos-para-pa%CC%81ginas-web-6.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
  };

  const cajaEstilo = {
    border: "1px solid #e0e0e0",
    borderRadius: "4px",
    boxShadow: "0px 0px 10px 0px rgba(0, 0, 0, 0.1)",
    padding: "20px",
    width: "400px",
    textAlign: "center",
    backgroundColor: "#ffffff",
  };

  return (
    <Box style={fondoEstilo}>
      <Box style={cajaEstilo}>
        <TextField
          label="ID"
          variant="outlined"
          fullWidth
          margin="normal"
          value={userId}
          onChange={(e) => setUserId(e.target.value)}
        />
        <TextField
          label="Contraseña"
          variant="outlined"
          fullWidth
          margin="normal"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleLogin}
          style={{ marginTop: "16px" }}
        >
          Iniciar Sesión
        </Button>
      </Box>
    </Box>
  );
};

export default Alumnos;
