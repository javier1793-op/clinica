import Cookies from "js-cookie";

export const setCookies = (name, data) => {
  Cookies.set(name, data, { expires: 1 });
};

export const getCookies =(name)=>{
   return Cookies.get(name)
}
export const deleteCookies =(name)=>{
    Cookies.remove(name)
}