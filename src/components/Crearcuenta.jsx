import React, { useState, useEffect } from 'react';
import { useNavigate} from 'react-router-dom';

const crearcuentaStyles = {
  container: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    minHeight: '100vh',
    backgroundImage: `url("https://www.roc21.com/blog/wp-content/uploads/2012/09/fondos-para-pa%CC%81ginas-web-6.jpg")`,
    backgroundSize: 'cover',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    gap: '20px',
    maxWidth: '100%',
    width: '400px',
    backgroundColor: '#fff',
    padding: '20px',
    borderRadius: '20px',
    position: 'relative',
  },
  title: {
    fontSize: '28px',
    color: 'royalblue',
    fontWeight: 600,
    letterSpacing: '-1px',
    position: 'relative',
    display: 'flex',
    alignItems: 'center',
    paddingLeft: '30px',
  },
  message: {
    color: 'rgba(88, 87, 87, 0.822)',
    fontSize: '14px',
  },
  flex: {
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
  },
  label: {
    position: 'relative',
  },
  input: {
    width: '100%',
    padding: '10px',
    outline: '0',
    border: '1px solid rgba(105, 105, 105, 0.397)',
    borderRadius: '10px',
  },
  inputSpan: {
    position: 'absolute',
    left: '10px',
    top: '15px',
    color: 'grey',
    fontSize: '0.9em',
    cursor: 'text',
    transition: '0.3s ease',
  },
  submit: {
    border: 'none',
    outline: 'none',
    backgroundColor: 'royalblue',
    padding: '10px',
    borderRadius: '10px',
    color: '#fff',
    fontSize: '16px',
    transition: '0.3s ease',
    marginTop: '16px',
  },
};

const Crearcuenta = () => {
  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmContrasena, setConfirmContrasena] = useState('');
  const [id, setId] = useState('');

  const navigate = useNavigate();

  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleInputFocus = (setter) => {
    setter('');
  };

  const handleSubmit = async () => {
    try {
      console.log('Nombre:', nombre);
      console.log('Apellido:', apellido);
      console.log('Correo:', correo);
      console.log('Contraseña:', contrasena);
      console.log('Confirmar Contraseña:', confirmContrasena);
      console.log('ID:', id);

      // Simulación de llamada a la API para crear un usuario
      // Reemplaza esto con la lógica real de tu backend
      const response = await fetch('http://localhost:4000/user/create', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          nombre,
          apellido,
          correo,
          contrasena,
          confirmContrasena,
          id,
        }),
      });

      if (!response.ok) {
        throw new Error(`Error al crear usuario: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Usuario creado:', data);

      // Después de crear el usuario, obtener la lista actualizada de usuarios
      obtenerUsuarios();

      // Redirigir a la página principal
      navigate.push('/home');
    } catch (error) {
      console.error('Error al crear usuario:', error.message);
    }
  };

  const obtenerUsuarios = async () => {
    try {
      // Simulación de llamada a la API para obtener usuarios
      // Reemplaza esto con la lógica real de tu backend
      const response = await fetch('http://localhost:4000/user/get-all');

      if (!response.ok) {
        throw new Error(`Error al obtener usuarios: ${response.statusText}`);
      }

      const data = await response.json();
      console.log('Usuarios obtenidos:', data.usuarios);
    } catch (error) {
      console.error('Error al obtener usuarios:', error.message);
    }
  };

  useEffect(() => {
    obtenerUsuarios();
  }, []);

  return (
    <div style={crearcuentaStyles.container}>
      <form style={crearcuentaStyles.form}>
        <p style={crearcuentaStyles.title}>Crear Cuenta</p>
        <p style={crearcuentaStyles.message}>Regístrate para acceder al contenido.</p>
        <div style={crearcuentaStyles.flex}>
          <label style={crearcuentaStyles.label}>
            <input
              style={crearcuentaStyles.input}
              type="text"
              placeholder=""
              required=""
              value={nombre}
              onChange={(e) => handleInputChange(e, setNombre)}
              onFocus={() => handleInputFocus(setNombre)}
            />
            <span style={crearcuentaStyles.inputSpan}>{nombre ? '' : 'Nombres'}</span>
          </label>

          <label style={crearcuentaStyles.label}>
            <input
              style={crearcuentaStyles.input}
              type="text"
              placeholder=""
              required=""
              value={apellido}
              onChange={(e) => handleInputChange(e, setApellido)}
              onFocus={() => handleInputFocus(setApellido)}
            />
            <span style={crearcuentaStyles.inputSpan}>{apellido ? '' : 'Apellido'}</span>
          </label>

          <label style={crearcuentaStyles.label}>
            <input
              style={crearcuentaStyles.input}
              type="email"
              placeholder=""
              required=""
              value={correo}
              onChange={(e) => handleInputChange(e, setCorreo)}
              onFocus={() => handleInputFocus(setCorreo)}
            />
            <span style={crearcuentaStyles.inputSpan}>{correo ? '' : 'Correo Electrónico'}</span>
          </label>

          <label style={crearcuentaStyles.label}>
            <input
              style={crearcuentaStyles.input}
              type="password"
              placeholder=""
              required=""
              value={contrasena}
              onChange={(e) => handleInputChange(e, setContrasena)}
              onFocus={() => handleInputFocus(setContrasena)}
            />
            <span style={crearcuentaStyles.inputSpan}>{contrasena ? '' : 'Contraseña'}</span>
          </label>

          <label style={crearcuentaStyles.label}>
            <input
              style={crearcuentaStyles.input}
              type="password"
              placeholder=""
              required=""
              value={confirmContrasena}
              onChange={(e) => handleInputChange(e, setConfirmContrasena)}
              onFocus={() => handleInputFocus(setConfirmContrasena)}
            />
            <span style={crearcuentaStyles.inputSpan}>
              {confirmContrasena ? '' : 'Confirmar Contraseña'}
            </span>
          </label>

          <label style={crearcuentaStyles.label}>
            <input
              style={crearcuentaStyles.input}
              type="text"
              placeholder=""
              required=""
              value={id}
              onChange={(e) => handleInputChange(e, setId)}
              onFocus={() => handleInputFocus(setId)}
            />
            <span style={crearcuentaStyles.inputSpan}>{id ? '' : 'ID'}</span>
          </label>

          <button style={crearcuentaStyles.submit} onClick={handleSubmit}>
            Aceptar
          </button>
        </div>
      </form>
    </div>
  );
};

export default Crearcuenta;
