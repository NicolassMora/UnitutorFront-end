import React, { useState } from "react";
import { Box, Button, TextField, Typography } from "@mui/material";
import { Link } from "react-router-dom";

const Inscribirtutor = () => {
  const [formData, setFormData] = useState({
    nombre: "     ",
    apellido: "     ",
    tutorias: ["  ", "  ", "  "],
    idtutor: "  ",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };
  const handleTutoriaChange = (index, value) => {
    const updatedTutorias = [...formData.tutorias];
    updatedTutorias[index] = value;
    setFormData({
      ...formData,
      tutorias: updatedTutorias,
    });
  };

  const handleSubmit = () => {
    setFormSubmitted(true);
  };

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
    <Box
      style={fondoEstilo}
    >
      <Box
        bgcolor="white"
        p={3}
        borderRadius={4}
        display="flex"
        flexDirection="column"
        alignItems="center"
      >
        <Typography variant="h4" gutterBottom>
          Inscribir Tutor
        </Typography>
        <TextField
          label="Nombre"
          name="nombre"
          value={formData.nombre}
          onChange={handleInputChange}
          margin="normal"
        />
        <TextField
          label="Apellido"
          name="apellido"
          value={formData.apellido}
          onChange={handleInputChange}
          margin="normal"
        />
        {formData.tutorias.map((tutoria, index) => (
          <TextField
            key={index}
            label={`Tutoría ${index + 1}`}
            value={tutoria}
            onChange={(e) => handleTutoriaChange(index, e.target.value)}
            margin="normal"
          />
        ))}
        <TextField
          label="ID del Alumno"
          name="idAlumno"
          value={formData.idAlumno}
          onChange={handleInputChange}
          margin="normal"
        />
        {formSubmitted ? (
          <Link to="/Paginaprincipal">Ir a la página principal</Link>
        ) : (
          <Button
            variant="contained"
            color="primary"
            size="large"
            onClick={handleSubmit}
            sx={{ marginTop: "20px" }}
          >
            Enviar
          </Button>
        )}
      </Box>
    </Box>
  );
};

export default Inscribirtutor;
