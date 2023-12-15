import React from "react";
import { Phone, Facebook, Instagram } from "lucide-react";
import EmailForm from "../_components/EmailForm";

const Contact = () => {
  const socials = [
    {
      social: "Facebook",
      icon: <Facebook />,
      link: "https://www.facebook.com/GalaGymFitness/?locale=ro_RO",
    },
    {
      social: "Instagram",
      icon: <Instagram />,
      link: "https://www.instagram.com/galagymbucuresti/",
    },
  ];
  return (
    <div>
      <h1 className="font-bold text-3xl text-left ml-4 my-8">Contactează-ne</h1>
      <div className="flex flex-col items-center">
        <div className="bg-[#0f0f0f] shadow-[6px_6px] shadow-yellow-400 text-white w-[300px]">
          <h3 className="font-bold text-center text-2xl py-8">
            Ne gasesti si pe <br />
            <span className="text-yellow-400">social media</span>
          </h3>
          <div className="flex flex-col gap-6">
            {socials.map((s) => (
              <div className="flex text-[#0f0f0f] bg-white w-[200px] mx-auto py-2 rounded-full gap-2">
                <i className="ml-4">{s.icon}</i>
                <a href={s.link}>{s.social}</a>
              </div>
            ))}
          </div>
          <div className="my-12 flex flex-col text-center font-semibold gap-3">
            <h3 className="text-2xl">Da-ne un telefon</h3>
            <p className="flex self-center items-center justify-center">
              <Phone className="mr-2 w-4" />
              <span className="text-yellow-400 mr-2">+40</span>750 427 049
            </p>
          </div>
        </div>
        <EmailForm />
      </div>
    </div>
  );
};

export default Contact;
