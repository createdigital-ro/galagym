'use client'

import React, { ChangeEvent, useState } from "react";

type Props = {};

const EmailForm = (props: Props) => {
  const [data, setData] = useState({
    email: "",
    name: "",
    message: "",
    subject: "",
  });

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setData((prevData) => ({
      ...prevData,
      [name]: value
    }));
  }

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("yes")
  }

  return (
    <form onSubmit={handleSubmit}>
      <input
        type="text"
        name="name"
        value={data.name}
        onChange={handleChange}
        placeholder="Nume intreg"
        required
      />
      <input
        type="email"
        name="email"
        value={data.email}
        onChange={handleChange}
        placeholder="Adresa de email"
        required
      />
      <input
        type="text"
        name="subject"
        value={data.subject}
        onChange={handleChange}
        placeholder="Subiect"
        required
      />
      <input
        type="text"
        name="message"
        value={data.message}
        onChange={handleChange}
        placeholder="Mesaj"
        required
      />
      <button type="submit">Trimite</button>
    </form>
  );
};

export default EmailForm;
