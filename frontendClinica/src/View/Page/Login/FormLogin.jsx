import { useForm } from "react-hook-form";
import { userSesion } from "../../../Api/Auth";
import { useEffect, useState } from "react";

const FormLogin = () => {
  const [error, setError] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (value) => {
    try {
      const res = await userSesion(value);
      console.log(res.data);
    } catch (error) {
      console.log(error.response.data);
      return setError([error.response.data.mensaje]);
    }
  });

  useEffect(() => {
    const time=setTimeout(() => {
      setError("");
    }, 10000);
    return ()=> clearTimeout(time)
  }, [error]);

  return (
    <>
      {error.length > 0 && <span className="errorFormLogin">{error}</span>}
      <form onClick={onSubmit}>
        <label>Email</label>
        <input
          type="text"
          placeholder="Ingrese su Email"
          {...register("email", { required: true })}
        />
        <label>Contraseña</label>
        <input
          type="password"
          placeholder="Ingrese su contraseña"
          {...register("contraseña", { required: true })}
        />
        <button className="btnLogin">INGRESAR</button>
      </form>
    </>
  );
};

export default FormLogin;
