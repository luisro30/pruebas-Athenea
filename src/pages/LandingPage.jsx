import React from "react";
import ImagenPrincipal from "../Assets/images/landing.svg";

const LandingPage = () => {
  return (
    <div className="block text-center rounded-lg md:grid md:grid-cols-1/5col">
      <div className="flex justify-center">
        <img className="" src={ImagenPrincipal} />
      </div>

      <div className="container_right flex flex-col justify-center bg-white h-screen p-5">
        <h3 className="text-4xl font-bold text-center">!Hola de Nuevo!</h3>
        <form action="" class="h-screen flex flex-col p-12 gap-5">
          <h3 class="font-medium">
            Como ha estado?, es un gusto vovler a tenerlo por aca en Atenea
          </h3>
          <div class="flex flex-col items-start gap-1">
            <label className="font-medium text-[#7064ff]" for="email">
              Usuario / Correo
            </label>
            <input
              className="w-full bg-blue-50 p-2 rounded-md text-sm outline-none"
              type="email"
              name="email"
              placeholder="please Enter your email"
            />
          </div>
          <div class="flex flex-col items-start gap-1">
            <label class="font-medium  text-[#7064ff]" for="password">
              Contraseña
            </label>
            <input
              class="w-full bg-blue-50 p-2 rounded-md outline-none text-sm"
              type="password"
              name="password"
              placeholder="please Enter your password"
            />
          </div>
          <div class="remember_password flex justify-between w-full">
            <label class="remember_password_left flex items-center gap-1 cursor-pointer">
              <input type="checkbox" />
              <span class="text-sm">remember password</span>
            </label>
            <div class="remember_password_right">
              <a class="text-[#7064ff] text-sm" href="">
                Forget Password?
              </a>
            </div>
          </div>
          <div>
            <button className="w-full bg-[#7064ff] text-white rounded-md p-2 transition-all duration-300 ease-in-out hover:bg-blue-400">
              Iniciar sesion
            </button>
          </div>
        </form>
      
      </div>
    </div>
  );
};

export { LandingPage };
