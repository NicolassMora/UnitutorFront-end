import React, { useState } from "react";
import { Box, Typography, Paper, Select, MenuItem } from "@mui/material";

const Tutorias = () => {
  const [userType, setUserType] = useState(""); 
  const tutorias = [
    { nombre: "Tutoría 1", contenido: "Contenido de la Tutoría 1" },
    { nombre: "Tutoría 2", contenido: "Contenido de la Tutoría 2" },
    { nombre: "Tutoría 3", contenido: "Contenido de la Tutoría 3" },
  ];

  const fondoEstilo = {
    backgroundImage: `url("https://www.roc21.com/blog/wp-content/uploads/2012/09/fondos-para-pa%CC%81ginas-web-6.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Box style={fondoEstilo}>
      <Select
        value={userType}
        onChange={(e) => setUserType(e.target.value)}
        variant="outlined"
        sx={{
          width: "300px",
          marginBottom: "16px",
          backgroundColor: "white",
        }}
      >
        <MenuItem value="Tutor">Tutor</MenuItem>
        <MenuItem value="Alumno">Alumno</MenuItem>
      </Select>
      <div style={{ width: "100%" }}>
        {tutorias.map((tutoria, index) => (
          <Paper
            key={index}
            elevation={3}
            sx={{
              p: 3,
              marginBottom: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start", 
              width: "80%",
              margin: "0 auto",
            }}
          >
            <Typography
              variant="h4" 
              gutterBottom
              style={{ cursor: "pointer" }}
              onClick={() => {
          
                console.log(`Hiciste clic en ${tutoria.nombre}`);
              }}
            >
              {tutoria.nombre}
            </Typography>
            <Typography variant="body1" gutterBottom>
              {tutoria.contenido}
            </Typography>
          </Paper>
        ))}
      </div>
    </Box>
  );
};

export default Tutorias;
