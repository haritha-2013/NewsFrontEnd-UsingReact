import axios from "axios"
import { useForm } from "react-hook-form"

export default function SignupForm() {
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()

  const onSubmit = (data) => {
    axios.post (`${import.meta.env.VITE_API_BASE_URL}/users` , data)
    .then(() => console.log("Signed up"))
    .catch(error => console.log(error))
  }

  console.log(watch("example")) // watch input value by passing the name of it

  return (
    /* "handleSubmit" will validate your inputs before invoking "onSubmit" */
    <form className="signupForm" onSubmit={handleSubmit(onSubmit)}>
      {/* register your input into the hook by invoking the "register" function */}
      
      <label htmlFor="name">Name</label>
      <input id="name" {...register("name", {required: true , maxLength: 25})} />
      { errors.name && <span>This field is required</span>}

      <label htmlFor="email">Email</label>
      <input type="email" {...register("email", {required: true , pattern : /^[^\s@]+@[^\s@]+\.[^\s@]+$/})} />
      { errors.email && <span>This field is required</span>}


      <label htmlFor="password">Password</label>
      <input type="password" {...register("password" , {required:true })}
      />
      { errors.password && <span>This field is required</span>}

    
      {/* errors will return when field validation fails  */}
      { /*errors.exampleRequired && <span>This field is required</span>*/}

      <input type="submit" />
    </form>
  )
}
