import axios from "axios"
import { useForm } from "react-hook-form"
import { useState } from "react"
import "../components/Cards.css"

const DB_URL = import.meta.env.VITE_API_BASE_URL

export default function LoginForm() {
  const [loginSuccess, setLoginSuccess] = useState(false);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    axios.post(`${DB_URL}/auth/login`, data, 
      {withCredentials: true})
    .then(res => {
   
      setLoginSuccess(true); 
    })
    .catch(error => {
      console.error('Login error:', error);
      setLoginSuccess(false); 
    });
};

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="loginForm" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      <label htmlFor="email">Email</label>
      <input  type="email" {...register("email" , { required:true , pattern : /^[^\s@]+@[^\s@]+\.[^\s@]+$/ })} />

      {/* include validation with required or other standard HTML validation rules */}
      <label htmlFor="password">Password</label>
      <input type="password" {...register("password", { required: true })} />
      {/* errors will return when field validation fails  */}
      {errors.exampleRequired && <span>This field is required</span>}

      <input type="submit"  value={"Login"} />
    </form>
  )
}