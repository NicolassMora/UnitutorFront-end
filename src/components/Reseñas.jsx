import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Reseñas = () => {
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [content, setContent] = useState("");
  const [reseñas, setReseñas] = useState([]);
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    const nuevaReseña = {
      author: author,
      rating: rating,
      content: content,
    };

    // Mostrar confirmación
    const confirmacion = window.confirm("¿Estás seguro de enviar esta reseña?");

    if (confirmacion) {
      // Agregar la nueva reseña al array de reseñas
      setReseñas((prevReseñas) => [...prevReseñas, nuevaReseña]);

      // Limpiar los campos después de enviar la reseña
      setAuthor("");
      setRating("");
      setContent("");

      // Mostrar en la consola
      console.log("Reseña enviada:", nuevaReseña);

      // Redirigir a la página principal
      navigate("/");
    } else {
      // Si el usuario elige no enviar, puedes agregar lógica adicional aquí
      console.log("El usuario eligió no enviar la reseña.");
    }
  };

  const fondoEstilo = {
    backgroundImage: `url("https://www.roc21.com/blog/wp-content/uploads/2012/09/fondos-para-pa%CC%81ginas-web-6.jpg")`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    minHeight: "100vh",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <Box style={fondoEstilo}>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          width: "300px",
          padding: "20px",
          backgroundColor: "white",
          borderRadius: "8px",
          boxShadow: "0 0 10px rgba(0, 0, 0, 0.2)",
        }}
      >
        <Typography variant="h5" gutterBottom>
          Deja una reseña
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            label="Nombre del autor"
            variant="outlined"
            margin="normal"
            value={author}
            onChange={(e) => setAuthor(e.target.value)}
            required
          />
          <TextField
            label="Calificación (1-7)"
            variant="outlined"
            margin="normal"
            type="number"
            inputProps={{ min: "1", max: "7" }}
            value={rating}
            onChange={(e) => setRating(e.target.value)}
            required
          />
          <TextField
            label="Contenido de la reseña"
            variant="outlined"
            margin="normal"
            multiline
            rows={8}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            required
          />
          <Button
            variant="contained"
            color="primary"
            size="large"
            type="submit"
            style={{ marginTop: "35px" }}
          >
            Enviar reseña
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Reseñas;

