// InscribirTutor.jsx
import React, { useState } from "react";
import { Box, Button, FormControl, InputLabel, MenuItem, Select, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const generarHorarios = (dias, duracionHoraMinutos) => {
  const horarios = [];
  const horaInicio = 8; // 8:00 AM
  const minutosInicio = 30; // 8:30 AM
  const duracionTotalMinutos = duracionHoraMinutos || 90; // Duración predeterminada: 1 hora 30 minutos

  for (let i = 0; i < dias; i++) {
    const fecha = new Date();
    fecha.setDate(fecha.getDate() + i);
    const diaSemana = fecha.getDay();

    // Verificar si es un día laborable (lunes a viernes)
    if (diaSemana >= 1 && diaSemana <= 5) {
      const hora = horaInicio + Math.floor((minutosInicio + duracionTotalMinutos * i) / 60);
      const minutos = (minutosInicio + duracionTotalMinutos * i) % 60;

      horarios.push({
        fecha: fecha.toISOString().split("T")[0],
        hora: `${hora.toString().padStart(2, "0")}:${minutos.toString().padStart(2, "0")}`,
      });
    }
  }

  return horarios;
};

const horariosDisponibles = generarHorarios(30);

const asignaturasDisponibles = [
  { id: 1, nombre: "Fundamento de Software" },
  { id: 2, nombre: "Álgebra" },
  { id: 3, nombre: "Álgebra Lineal" },
  { id: 4, nombre: "Fundamento de Matemáticas" },
  { id: 5, nombre: "Cálculo Diferencial" },
  { id: 6, nombre: "Cálculo Integral" },
  { id: 7, nombre: "Ecuación Diferencial" },
  { id: 8, nombre: "Estructura de Datos" },
  { id: 9, nombre: "Redes de Computadores" },
  { id: 10, nombre: "Bases de Datos" },
  { id: 11, nombre: "Bases de Datos 2" },
  { id: 12, nombre: "Bases de Datos y Programación Web" },
  { id: 13, nombre: "Inglés 1" },
  { id: 14, nombre: "Inglés 2" },
  { id: 15, nombre: "Inglés 3" },
  { id: 16, nombre: "Inglés 4" },
  { id: 17, nombre: "Fundamentos Física" },
  { id: 18, nombre: "Física Mecánica" },
  { id: 19, nombre: "Física Calor y Onda" },
  { id: 20, nombre: "Arquitectura de Computadores" },
  { id: 21, nombre: "Metodología de Análisis" },
].map((asignatura, index) => ({
  ...asignatura,
  fecha: horariosDisponibles[index].fecha,
  hora: horariosDisponibles[index].hora,
}));

const InscribirTutor = () => {
  const [formData, setFormData] = useState({
    nombre: "",
    apellido: "",
    tutoriasSeleccionadas: [],
    idAlumno: "",
  });

  const [formSubmitted, setFormSubmitted] = useState(false);
  const [asignaturaSeleccionada, setAsignaturaSeleccionada] = useState(null);
  const [horariosOcupados, setHorariosOcupados] = useState([]);

  const navigate = useNavigate();

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleTutoriaChange = (event, tutoriaIndex) => {
    const selectedTutoria = event.target.value;

    // Verificar si el horario ya está ocupado
    if (horariosOcupados.includes(selectedTutoria)) {
      alert("Este horario ya está ocupado. Por favor, elija otro horario.");
      return;
    }

    const nuevasTutorias = [...formData.tutoriasSeleccionadas];
    nuevasTutorias[tutoriaIndex] = selectedTutoria;

    setFormData({
      ...formData,
      tutoriasSeleccionadas: nuevasTutorias,
    });

    const asignatura = asignaturasDisponibles.find((asig) => asig.id === selectedTutoria);
    setAsignaturaSeleccionada(asignatura);

    // Marcar el horario como ocupado
    setHorariosOcupados([...horariosOcupados, selectedTutoria]);
  };

  const handleAgregarTutoria = () => {
    if (formData.tutoriasSeleccionadas.length < 2) {
      const tutoriasDisponibles = asignaturasDisponibles.filter(
        (asignatura) => !formData.tutoriasSeleccionadas.includes(asignatura.id)
      );
      if (tutoriasDisponibles.length > 0) {
        const primeraTutoriaDisponible = tutoriasDisponibles[0].id;
        const nuevasTutorias = [...formData.tutoriasSeleccionadas, primeraTutoriaDisponible];
        setFormData({
          ...formData,
          tutoriasSeleccionadas: nuevasTutorias,
        });
      } else {
        alert("No hay más tutorías disponibles para agregar.");
      }
    } else {
      alert("No puedes agregar más tutorías, ya has seleccionado 2.");
    }
  };

  const handleSubmit = () => {
    setFormSubmitted(true);
    // Aquí puedes enviar los datos del formulario a tu backend o realizar otras acciones necesarias.
    
    // Navegar a la página principal después de enviar el formulario
    navigate("/Paginaprincipal");
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
    <Box style={fondoEstilo}>
      <Box bgcolor="white" p={3} borderRadius={4} display="flex" flexDirection="column" alignItems="center">
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

        {formData.tutoriasSeleccionadas.map((tutoria, index) => (
          <FormControl key={index} fullWidth margin="normal">
            <InputLabel id={`tutorias-label-${index}`}>{`Tutoría ${index + 1}`}</InputLabel>
            <Select
              labelId={`tutorias-label-${index}`}
              id={`tutorias-${index}`}
              name={`tutoriasSeleccionadas-${index}`}
              value={tutoria}
              onChange={(e) => handleTutoriaChange(e, index)}
            >
              {asignaturasDisponibles.map((asignatura) => (
                <MenuItem key={asignatura.id} value={asignatura.id}>
                  {`${asignatura.nombre} - ${asignatura.fecha} ${asignatura.hora}`}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
        ))}

        {asignaturaSeleccionada && (
          <Box mt={2}>
            <Typography variant="h6">Información de la Asignatura Seleccionada:</Typography>
            <Typography>{`Nombre: ${asignaturaSeleccionada.nombre}`}</Typography>
            <Typography>{`Fecha: ${asignaturaSeleccionada.fecha}`}</Typography>
            
          </Box>
        )}

        <Button
          variant="contained"
          color="primary"
          size="large"
          onClick={handleAgregarTutoria}
          sx={{ marginTop: "20px" }}
        >
          Agregar Tutoría
        </Button>
        <TextField
          label="ID del Alumno"
          name="idAlumno"
          value={formData.idAlumno}
          onChange={handleInputChange}
          margin="normal"
        />
        {formSubmitted ? (
          <Typography variant="body1" sx={{ marginTop: "20px" }}>
            Inscripción exitosa. <br />
            <a href="/Paginaprincipal">Ir a la página principal</a>
          </Typography>
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

export default InscribirTutor;
