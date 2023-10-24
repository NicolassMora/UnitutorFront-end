import React from "react";
import { Box, Button } from "@mui/material";
import { Link } from "react-router-dom";

const buttonStyles = {

  "--border-radius": "15px",
  "--border-width": "4px",
  appearance: "none",
  position: "relative",
  padding: "1em 2em",
  border: 0,
  fontFamily: "Roboto, Arial, 'Segoe UI', sans-serif",
  fontSize: "15px",
  fontWeight: 500,
  color: "#fff",
  zIndex: 2,
};

const buttonContainerStyles = {
  display: "flex",
  flexDirection: "row",
  alignItems: "center",
  justifyContent: "center",
  minHeight: "100vh",
  backgroundImage: `url("https://www.roc21.com/blog/wp-content/uploads/2012/09/fondos-para-pa%CC%81ginas-web-6.jpg")`,
};

const customButtonStyles = {

  width: "200px",
  height: "300px",
  marginRight: "30px",
  backgroundColor: "#212121",
  borderRadius: "var(--border-radius)",
  borderWidth: "4px",
  borderColor: "white", 
  color: "white",
};

const Paginaprincipal = () => {
  return (
    <Box sx={buttonContainerStyles}>
      <Box sx={{ display: "flex", flexDirection: "row", gap: "10px" }}>
        <Link to="/Inscribirtutor">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ ...buttonStyles, ...customButtonStyles }} // 
            className="custom-button"
          >
            Inscribir tutor
          </Button>
        </Link>

        <Link to="/Inscribirtutorias">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ ...buttonStyles, ...customButtonStyles }}
            className="custom-button"
          >
            Inscribir tutoría
          </Button>
        </Link>

        <Link to="/Calendario">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ ...buttonStyles, ...customButtonStyles }}
            className="custom-button"
          >
            Calendario Tutorías
          </Button>
        </Link>

        <Link to="/Tutorias">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ ...buttonStyles, ...customButtonStyles }}
            className="custom-button"
          >
            Tutorías
          </Button>
        </Link>

        <Link to="/Reseñas">
          <Button
            variant="contained"
            color="primary"
            size="large"
            sx={{ ...buttonStyles, ...customButtonStyles }}
            className="custom-button"
          >
            Reseñas
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default Paginaprincipal;
