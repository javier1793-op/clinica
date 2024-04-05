import "../../../Scss/login.scss";

import LayaoutLogin from "../../../assets/Img/graphic-1.png";
import { FcElectricalSensor } from "react-icons/fc";
import Logo from '../../../assets/Img/1.png'
import FormLogin from "./FormLogin";

const index = () => {



  return (
    <>
     <div className="containerLogin">
    <div className="layaoutLogin">
      <img src={LayaoutLogin} alt="Imagen"/>
    </div>
    <div className="formLogin">
      <img src={Logo} alt="Logo" className="logoLogin" />
      <section className="titleFormLogin">
        <h3>Bienvenido al sistema!</h3>
        
      <FcElectricalSensor className="iconLoginTitle" />
      </section>
      <h4>{'"¡Bienvenido de vuelta! Por favor, inicia sesión para acceder a tu cuenta."'}</h4>
      <FormLogin/>
    </div>
  </div>
    </>
  );
};

export default index;
