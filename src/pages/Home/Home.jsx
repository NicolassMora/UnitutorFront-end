import React from "react";
import { Box, Button, Typography, AppBar, Toolbar } from "@mui/material";
import { Link } from "react-router-dom";

const buttonStyles = {
  "--border-radius": "15px",
  "--border-width": "4px",
  appearance: "none",
  position: "relative",
  padding: "1em 2em",
  border: 0,
  backgroundColor: "#212121",
  fontFamily: "Roboto, Arial, 'Segoe UI', sans-serif",
  fontSize: "15px",
  fontWeight: 500,
  color: "#fff",
  zIndex: 2,
};

const buttonContainerStyles = {
  display: "flex",
  flexDirection: "row",
  gap: "10px", 
};

const Home = () => {
  const backgroundImageUrl =
    "https://uv.cl/templates/yootheme/cache/73/2-Ingenieria%20Hucke2-min-73f82e89.jpeg";

  const backgroundStyle = {
    backgroundImage: `url(${backgroundImageUrl})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
    backgroundPosition: "center",
    minHeight: "91vh", 
  };

  return (
    <Box
      display="flex"
      flexDirection="column"
      justifyContent="center"
      alignItems="center"
      style={backgroundStyle}
    >
      <AppBar position="fixed" color="transparent">
        <Toolbar style={{ justifyContent: "flex-end" }}>
          <Link to="/crear-cuenta">
            <Button
              color="primary"
              variant="outlined"
              sx={buttonStyles}
              style={{
                borderRadius: buttonStyles["--border-radius"],
                borderWidth: buttonStyles["--border-width"],
              }}
            >
              Crear Cuenta
            </Button>
          </Link>
        </Toolbar>
      </AppBar>
      <Box style={buttonContainerStyles}>
        <Typography variant="h3" gutterBottom></Typography>
        <Link to="/alumnos">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              ...buttonStyles,
              borderRadius: buttonStyles["--border-radius"],
              borderWidth: buttonStyles["--border-width"],
              fontSize:"25px"
            }}
          >
            Alumnos
          </Button>
        </Link>
        <Link to="/tutores">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{
              ...buttonStyles,
              borderRadius: buttonStyles["--border-radius"],
              borderWidth: buttonStyles["--border-width"],
              fontSize:"25px"
            }}
          >
            Tutores
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Home;
