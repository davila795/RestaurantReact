import { API, Reserva } from "../types/platos";
const TOKEN = process.env.TOKEN;
const URL = process.env.URL;
const RESERVA_URL = process.env.RESERVA_URL;

export const getPlatos = async () => {
  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        accept: "application/json",
        "xc-token": TOKEN,
      },
    };
    const res = await fetch(URL, options);
    const data: API = await res.json();
    return data.list;
  } catch (error) {
    console.error(error);
    throw error;
  }
};

export const getMenu = async () => {
  try {
    const options: RequestInit = {
      method: "GET",
      headers: {
        accept: "application/json",
        "xc-token": TOKEN,
      },
    };
    const urlMenu = `${URL}&where=where%3D%28Menu%2Ceq%2Ctrue%29`;
    const response = await fetch(urlMenu, options);
    const data: API = await response.json();
    return data.list;
  } catch (error) {
    console.error;
    throw error;
  }
};

export const postReserva = async (reserva: Reserva) => {
  console.log(reserva);
  try {
    const options: RequestInit = {
      method: "POST",
      headers: {
        accept: "application/json",
        "xc-token": TOKEN,
        "Content-Type": "application/json",
      },
      body: JSON.stringify(reserva),
    };

    const response = await fetch(RESERVA_URL, options);
    const message = await response.json();
    response.ok ? alert("Reserva completada!") : alert(message.msg);
  } catch (error) {
    console.error(error);
    throw error;
  }
};
