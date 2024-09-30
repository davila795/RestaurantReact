/// <reference types="vite/client" />
declare namespace NodeJS {
  interface ProcessEnv {
    REACT_APP_API_URL: string;
    REACT_APP_API_TOKEN: string;
    REACT_APP_API_RESERVA_URL: string;
  }
}
