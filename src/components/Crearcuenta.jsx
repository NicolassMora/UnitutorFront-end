import React, { useState } from 'react';

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
  signin: {
    color: 'rgba(88, 87, 87, 0.822)',
    fontSize: '14px',
    textAlign: 'center',
  },
  signinLink: {
    color: 'royalblue',
    textDecoration: 'none',
  },
  signinLinkHover: {
    textDecoration: 'underline',
  },
};

function Crearcuenta() {

  const [nombre, setNombre] = useState('');
  const [apellido, setApellido] = useState('');
  const [correo, setCorreo] = useState('');
  const [contrasena, setContrasena] = useState('');
  const [confirmContrasena, setConfirmContrasena] = useState('');
  const [id, setId] = useState('');

  
  const handleInputChange = (e, setter) => {
    setter(e.target.value);
  };

  const handleInputFocus = (setter) => {
    setter('');
  };

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

          <button style={crearcuentaStyles.submit}>Aceptar</button>
        </div>
      </form>
    </div>
  );
}

export default Crearcuenta;
