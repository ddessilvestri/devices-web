import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext'
import Swal from 'sweetalert2';

export const RegisterPage = () => {

  const { register } = useContext(AuthContext);
  const [form, setForm] = useState({
    name:'test3',
    email:'test3@test.com',
    password:'1234',

  });

  
  const allOk  = ()=>{
    return (form.email.length > 0 && form.password.length > 0 && form.name.length > 0) ? true : false;
  }


  const onSubmit = async (ev)=>{
    ev.preventDefault();
    const {name,email,password} = form;
  
     const msg = await register(name,email,password);
 
    if (msg !== true){
      Swal.fire('Error',msg, 'error');
    }

  }

  const onChange = ({target})=>{
    const {name,value} = target;

    setForm({
      ...form,  // se esparcen todos los campos y solo se modifica el siguiente:
      [name] : value //[Name] es el campo a modificar y Value el valor que va a tomar
    })

  }

  return (
    <form 
      className="login100-form validate-form flex-sb flex-w"
      onSubmit={onSubmit}
      >
      <span className="login100-form-title mb-3">
        Crear Nueva Cuenta
      </span>

      <div className="wrap-input100 validate-input mb-3">
        <input 
          className="input100" 
          type="text" 
          name="name" 
          placeholder="Nombre" 
          value={form.name}
          onChange={onChange}
          />
        <span className="focus-input100"></span>
      </div>

      
      <div className="wrap-input100 validate-input mb-3">
        <input
          className="input100"
          type="email"
          name="email"
          placeholder="Email"
          value={form.email}
          onChange={onChange}
       />
        <span className="focus-input100"></span>
      </div>
      
      
      <div className="wrap-input100 validate-input mb-3">
        <input
        className="input100"
        type="password"
        name="password"
        placeholder="Password"
        value={form.password}
        onChange={onChange}
        />
        <span className="focus-input100"></span>
      </div>
      
      <div className="row mb-3">
        <div className="col text-right">
          <Link to="auth/login" className="txt1">
            Ingresar
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button 
          type="submit"
          className="login100-form-btn"
          disabled={!allOk}
          >
          Crear cuenta
        </button>
      </div>

  </form>
)
}
