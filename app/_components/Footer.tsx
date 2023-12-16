import Image from "next/image";
import React from "react";
import Link from "next/link";
import { Facebook, Instagram } from "lucide-react";

type Props = {};

const Footer = (props: Props) => {
  const pages = [
    {
      href: "galerie",
      onPage: "Galerie",
    },
    {
      href: "program",
      onPage: "Program",
    },
    {
      href: "preturi",
      onPage: "Prețuri",
    },
    {
      href: "antrenori",
      onPage: "Antrenori",
    },
    {
      href: "contact",
      onPage: "Contact",
    },
  ];

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
    <footer className="bg-[#0f0f0f] text-white flex flex-col md:flex-row justify-between xl:justify-around px-16 py-6 mt-[200px] items-center ">
      <div className="flex flex-col justify-center gap-2 items-center mb-4 md:mb-0">
        <Image src="/logo.svg" alt="Logo gala gym" width={100} height={100} />
        <address>
          <a href="https://www.google.com/maps/place/Gala+Gym/@44.4100839,26.177722,17z/data=!3m1!4b1!4m6!3m5!1s0x40b1fc22089f71db:0xda6b8e24b73af3dc!8m2!3d44.4100801!4d26.1802969!16s%2Fg%2F11c70j2rmk?entry=ttu">
            B-dul. Theodor Pallady 35, sector 3, Bucuresti
          </a>
        </address>
      </div>
      <div className="flex gap-4 md:gap-20 flex-col md:flex-row">
        <div>
          <h2 className="font-bold mb-2">Descoperă</h2>
          <div>
            <div className="flex flex-col leading-5">
              {pages.map((p, index) => (
                <Link key={index} href={p.href} className="hover:text-gray-300 active:text-gray-400">
                  {p.onPage}
                </Link>
              ))}
            </div>
          </div>
        </div>
        <div>
          <h2 className="font-bold mb-2">Socials</h2>
          <div className="flex flex-col gap-2">
            {socials.map((s, index) => (
              <div className="flex gap-2">
                {s.icon}
                <Link key={index} href={s.link} className="hover:text-gray-300 active:text-gray-400">
                  {s.social}
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
