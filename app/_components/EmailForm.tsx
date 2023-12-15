"use client";

import React, { ChangeEvent, useState } from "react";

type Props = {};

const EmailForm = (props: Props) => {
  const emptyData = {
    email: "",
    name: "",
    message: "",
    subject: "",
  };
  const [message, setMessage] = useState("");
  const [data, setData] = useState(emptyData);

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    try {
      const res = await fetch("/api/sendEmail", {
        method: "POST",
        body: JSON.stringify(data),
      });

      if (res.ok) {
        setData(emptyData);
      } else {
        setData(data)
      }
    } catch (error) {
      setMessage("Eroare de conexiune. Incercati mai tarziu");
    }
  };

  const inputStyles = "border-b-2 pb-1 focus:outline-none";

  return (
      <form
        onSubmit={handleSubmit}
        className="border-4 border-[#0f0f0f] p-8 flex flex-col w-[290px] sm:w-[330px] xl:w-[500px] xl:h-[520px]"
      >
        <h1 className="text-2xl font-semibold text-[#0f0f0f] lg:text-3xl xl:text-5xl">
          Trimite-ne un mail
        </h1>
        <h3 className="text-2xl xl:text-3xl font-bold text-[#0f0f0f] mb-10">
          contact@galagym.ro
        </h3>
        <div className="flex flex-col gap-8 xl:gap-10">
          <input
            type="text"
            name="name"
            value={data.name}
            onChange={handleChange}
            placeholder="Nume intreg"
            required
            className={inputStyles}
          />
          <input
            type="email"
            name="email"
            value={data.email}
            onChange={handleChange}
            placeholder="Adresa de email"
            required
            className={inputStyles}
          />
          <input
            type="text"
            name="subject"
            value={data.subject}
            onChange={handleChange}
            placeholder="Subiect"
            required
            className={inputStyles}
          />
          <input
            type="text"
            name="message"
            value={data.message}
            onChange={handleChange}
            placeholder="Mesaj"
            required
            className={inputStyles}
          />
          <button
            type="submit"
            className=" bg-[#0f0f0f] px-4 xl:px-6 xl:text-2xl text-center xl:py-2  text-white rounded-lg mx-auto mt-2 py-1 hover:shadow-[2px_2px] hover:shadow-yellow-400 hover:scale-105 active:scale-105 active:shadow-yellow-400 active:shadow-[2px_2px] active:text-yellow-400"
          >
            Trimite
          </button>
        </div>
      </form>
  );
};

export default EmailForm;
