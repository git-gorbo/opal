import React from "react";
import Appstore from "./assets/image/App-Store.svg";
import Playstore from "./assets/image/Google-Play.svg";
import Mock from "./assets/image/Mockup.svg";
import Insta from "./assets/image/instagram.svg";
import Mail from "./assets/image/mail.svg";
import Whatsapp from "./assets/image/whatsapp.svg";
import Logo from "./assets/logo/Logo2.svg";

const MobileView = () => {
  const gradientStyle = {
    background: "linear-gradient(180deg, #FCF9FF 0%, #C98BFB 100%)",
  };
  return (
    <div className="w-[425px] ">
      <div style={gradientStyle}>
        <div className="flex flex-col pr-4 justify-center items-center">
          <img src={Logo} className="px-[20px] pt-[77px]" alt="" />
          <p className=" text-[40px] font-bold pl-[30px] pt-10 ">
            O primeiro app em prol da dignidade menstrual{" "}
          </p>
        </div>
        <div className="pt-[40px] text-[20px] pl-[32px] font-bold">
          <p>Insira o seu nome na lista!</p>
        </div>
        <div className="pl-[30px] pr-[50px] pt-[20px]">
          <input
            type="text"
            placeholder="   Seu e-mail"
            className="w-full py-2 border border-gray-300 rounded-full "
          />
        </div>
        <img src={Mock} className="pt-[30px]" alt="" />
        <p className="text-[#361252] font-normal text-center text-2xl pt-8 ">
          Em breve disponível em:
        </p>
        <div className="flex flex-col justify-center items-center px-[60px]">
          <img
            src={Appstore}
            className="flex justify-center items-center pt-12 cursor-pointer"
            alt=""
          />
          <img
            src={Playstore}
            className="flex justify-center items-center pt-12 cursor-pointer"
            alt=""
          />
        </div>
        <div className="flex pt-[150px] pb-[40px] pl-[60px] items-center gap-2">
          <p className=" text-[#361252] font-normal text-2xl">Fale conosco:</p>
          <div className="flex h-12 w-12 gap-2 ">
            <img src={Whatsapp} alt="" />
            <img src={Mail} alt="" />
            <img src={Insta} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MobileView;
