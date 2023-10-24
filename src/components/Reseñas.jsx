import React, { useState } from "react";
import { Box, TextField, Button, Typography } from "@mui/material";

const Reseñas = () => {
  const [author, setAuthor] = useState("");
  const [rating, setRating] = useState("");
  const [content, setContent] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    console.log("Autor:", author);
    console.log("Calificación:", rating);
    console.log("Contenido:", content);
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
