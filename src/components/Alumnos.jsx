import React, { useState } from "react";
import { Box, Button, TextField } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Alumnos = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    if (username === "123" && password === "contraseña123") {
      navigate("/Paginaprincipal");
    } else {
      alert("Credenciales incorrectas. Por favor, inténtalo de nuevo.");
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

  return (
    <Box style={fondoEstilo}>
      <Box
        border="1px solid #e0e0e0"
        borderRadius="4px"
        boxShadow="0px 0px 10px 0px rgba(0, 0, 0, 0.1)"
        padding="20px"
        width="400px"
        textAlign="center"
        backgroundColor="#ffffff"
      >
        <TextField
          label="ID"
          variant="outlined"
          fullWidth
          margin="normal"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
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
