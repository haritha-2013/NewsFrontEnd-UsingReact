import axios from "axios"

import { useForm } from "react-hook-form"

import "../components/Cards.css"
import { useDispatch } from "react-redux"
import { changeLoginStatus } from "../App/loginSlice"


export default function LoginForm() {
const dispatch = useDispatch()

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    axios.post(`${import.meta.env.VITE_API_BASE_URL}/auth/login`, data, { withCredentials: true })
      .then(res => dispatch(changeLoginStatus(true)))
      .catch(error => dispatch(changeLoginStatus(false)));
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