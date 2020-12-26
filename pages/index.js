import { useEffect } from "react";
import Head from "next/head";
import styles from "../styles/Home.module.css";
import axios from "axios";

export default function Home() {
  const apiKey = process.env.apiKey;
  const city = "junin";
  const URL = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric&lang=es`;

  useEffect(() => {
    getData();
  });

  async function getData() {
    const data = await fetch(URL);
    const json = await data.json();
    console.log(json);
  }

  return (
    <main>
      <h1>App de clima</h1>
    </main>
  );
}
