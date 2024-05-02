import { useForm } from "react-hook-form";
import { userSesion } from "../../../Api/Auth";
import { TextInput } from '@tremor/react';
import Alert from "../../Components/Alert";
import { useEffect, useState } from "react";
import { setCookies } from "../../../Hooks/useCookies";
import { useAppDispatch } from "../../../Hooks/useAppSelector";
import { login} from "../../../Store/slicer/auth.slice";
import { DoctorID } from "../../../Api/Doctor";
import { setDoctorData } from "../../../Store/slicer/doctor.slice";

const FormLogin = () => {
  const [error, setError] = useState('');
  const {register,handleSubmit,}=useForm();

  useEffect(() => {
    setTimeout(() => {
        setError('')
    }, 5000);
  }, [error])
  
  const dispatch = useAppDispatch()

  const onSubmit = handleSubmit(async(data)=>{

    try {
      const res = await userSesion(data)
      setCookies('token',res.data.token)
      dispatch(login())


      const doctorData= await DoctorID(res.data.doctor)
      dispatch(setDoctorData(doctorData.data))
    } catch (error) {
     
      setError(error.response.data.mensaje);
    }
  })



  return (
    <>
     {error && <Alert message={error}/>}
       <div className="flex min-h-full flex-1 flex-col justify-center px-4 py-10 lg:px-6">
        <div className="sm:mx-auto sm:w-full sm:max-w-sm">
          <h3 className="text-center text-tremor-title font-semibold text-tremor-content-strong dark:text-dark-tremor-content-strong">
            Iniciar sesión
          </h3>
          <form className="mt-6" onSubmit={handleSubmit(onSubmit)}>
            <label
              htmlFor="email"
              className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Email
            </label>
            <TextInput
              type="email"
              autoComplete="email"
              placeholder="john@company.com"
              className="mt-2"
              {...register("email",{required:true})}
            />
            <label
              htmlFor="Password"
              className="text-tremor-default font-medium text-tremor-content-strong dark:text-dark-tremor-content-strong"
            >
              Constraseña
            </label>
            <TextInput
              type="password"
              autoComplete="password"
              placeholder="john@company.com"
              className="mt-2"
              {...register("contraseña",{required:true})}
            />
            
            <button
              type="submit"
              className="btnlogin bg-red-500 mt-4 w-full whitespace-nowrap rounded-tremor-default bg-tremor-brand py-2 text-center text-tremor-default font-medium text-tremor-brand-inverted shadow-tremor-input hover:bg-tremor-brand-emphasis dark:bg-dark-tremor-brand dark:text-dark-tremor-brand-inverted dark:shadow-dark-tremor-input dark:hover:bg-dark-tremor-brand-emphasis"
            >
              Ingresar
            </button>
          </form>
          <br />
         
        </div>
      </div>
    </>
  );
};

export default FormLogin;
