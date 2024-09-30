/// <reference types="vite/client" />
declare namespace NodeJS {
  interface ProcessEnv {
    TOKEN: string;
    RESERVA_URL: string;
    URL: string;
  }
}
