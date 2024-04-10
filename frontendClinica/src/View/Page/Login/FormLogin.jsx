import { useForm } from "react-hook-form";
import { userSesion } from "../../../Api/Auth";
import { useEffect, useState } from "react";

const FormLogin = () => {
  const [error, setError] = useState([]);
  const { register, handleSubmit } = useForm();

  const onSubmit = handleSubmit(async (value) => {
    try {
      const res = await userSesion(value);
    } catch (error) {
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
      <form onSubmit={onSubmit}>
        <label>Email</label>
        <input
          className="inputLogin"
          type="text"
          placeholder="Ingrese su Email"
          {...register("email", { required: true })}
        />
        <label>Contraseña</label>
        <input
          className="inputLogin"
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
