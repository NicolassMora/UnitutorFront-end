// Tutorias.jsx
import React, { useState } from "react";
import { Box, Typography, Paper, Select, MenuItem, TextField, Button } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Tutorias = ({ tutoriasInscritas, userType }) => {
  const [tutoriasSeleccionadas, setTutoriasSeleccionadas] = useState([]);
  const [enlaces, setEnlaces] = useState({
    video: "",
    pdf: "",
  });

  const { navigate } = useNavigate();

  const tutorias = [
    { id: 1, nombre: "Tutoría 1", contenido: "Contenido de la Tutoría 1" },
    { id: 2, nombre: "Tutoría 2", contenido: "Contenido de la Tutoría 2" },
    { id: 3, nombre: "Tutoría 3", contenido: "Contenido de la Tutoría 3" },
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

  const handleTutoriaClick = (tutoria) => {
    console.log(`Hiciste clic en ${tutoria.nombre}`);
    // Toggle la selección de la tutoría
    if (tutoriasSeleccionadas.includes(tutoria.id)) {
      setTutoriasSeleccionadas((prevSelected) => prevSelected.filter((id) => id !== tutoria.id));
    } else {
      setTutoriasSeleccionadas((prevSelected) => [...prevSelected, tutoria.id]);
    }
  };

  const handleEnlaceChange = (type, value) => {
    setEnlaces((prevEnlaces) => ({
      ...prevEnlaces,
      [type]: value,
    }));
  };

  const handleAgregarEnlace = () => {
    // Aquí puedes guardar los enlaces en tu estado o hacer otra acción necesaria
    console.log("Enlaces:", enlaces);
  };

  return (
    <Box style={fondoEstilo}>
      <Select
        value={userType}
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

      {userType === "Tutor" && (
        <Box>
          <TextField
            label="Enlace a video (YouTube, etc.)"
            variant="outlined"
            fullWidth
            margin="normal"
            value={enlaces.video}
            onChange={(e) => handleEnlaceChange("video", e.target.value)}
          />
          <TextField
            label="Enlace a PDF u otro recurso"
            variant="outlined"
            fullWidth
            margin="normal"
            value={enlaces.pdf}
            onChange={(e) => handleEnlaceChange("pdf", e.target.value)}
          />
          <Button variant="contained" color="primary" onClick={handleAgregarEnlace}>
            Agregar Enlaces
          </Button>
        </Box>
      )}

      <div style={{ width: "100%" }}>
        {tutorias.map((tutoria) => (
          <Paper
            key={tutoria.id}
            elevation={3}
            sx={{
              p: 3,
              marginBottom: "16px",
              display: "flex",
              flexDirection: "column",
              alignItems: "flex-start",
              width: "80%",
              margin: "0 auto",
              backgroundColor: tutoriasSeleccionadas.includes(tutoria.id) ? "#f0f0f0" : "white",
            }}
          >
            <Typography
              variant="h4"
              gutterBottom
              style={{ cursor: "pointer" }}
              onClick={() => handleTutoriaClick(tutoria)}
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
