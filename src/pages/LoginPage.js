import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../auth/AuthContext';
import Swal from 'sweetalert2'

export const LoginPage = () => {

  const { login } = useContext(AuthContext);

  const [form, setForm] = useState({
    email:'test3@test.com',
    password:'1234',
    rememberme:false
  });

  useEffect(() => {
    const email = localStorage.getItem('email');
    if (email){
      setForm( (form) => ({  // al poner (form) => le estamos diciendo que es el valor actual que debe cambiar.
        ...form,
        email,
        rememberme:true,
      }))
    }
  }, [])
  

  const onChange = ({target})=> {
    const {name,value} = target;
    setForm({
      ...form,        // esparce todos los campos del form
      [name] : value // solo le pide al campo name que cambie su valor. Cuando se encierra entre [] es para que respete ese campo y no cree uno nuevo
     })
  }

  const toggleCheck = ()=>{
    setForm({
      ...form,
      rememberme: !form.rememberme
    })
  }

  const onSubmit = async (ev)=> {
    ev.preventDefault();

    (form.rememberme) 
      ? localStorage.setItem('email',form.email)
      : localStorage.removeItem('email');

    const  {email,password} = form;
    const ok = await login(email,password);
    if (!ok){
      Swal.fire('Error','Check the user and password', 'error');
    }
  }

  const allOk  = ()=>{
      return (form.email.length > 0 && form.password.length > 0) ? true : false;
  }

  return (
    <form 
      className="login100-form validate-form flex-sb flex-w"
      onSubmit={onSubmit}
      
      >
      <span className="login100-form-title mb-3">
        Ingresar
      </span>
      
      <div className="wrap-input100 validate-input mb-3">
        <input 
          className="input100"  
          type="email" 
          name="email" 
          placeholder="Email" 
          value = {form.email}
          onChange= {onChange}
        />
        <span className="focus-input100"></span>
      </div>
      
      
      <div className="wrap-input100 validate-input mb-3">
        <input 
          className="input100" 
          type="password" 
          name="password" 
          placeholder="Password" 
          value = {form.password}
          onChange= {onChange}
        />
        <span className="focus-input100"></span>
      </div>
      
      <div className="row mb-3">
        <div 
          className="col"
          onClick={()=> toggleCheck()}
        >
          <input  
            className="input-checkbox100"  
            id="ckb1"  
            type="checkbox"  
            name="rememberme" 
            checked = {form.rememberme}
            readOnly
          />
          <label className="label-checkbox100">
            Recordarme
          </label>
        </div>

        <div className="col text-right">
          <Link to="/auth/register" className="txt1">
            Crear Cuenta
          </Link>
        </div>
      </div>

      <div className="container-login100-form-btn m-t-17">
        <button 
          type="submit"
          className="login100-form-btn"
          disabled={!allOk()}
          >
          Ingresar
        </button>
      </div>
    </form>
  )
}
