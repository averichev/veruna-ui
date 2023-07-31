interface ImportMetaEnvLocal {
  TITLE: string;
  VITE_APP_BASE_URL: string;
  BASE_URL: string;
  MODE: string;
  DEV: boolean;
  PROD: boolean;
  SSR: boolean;
}

const localEnv: ImportMetaEnvLocal = import.meta.env as any;

export default localEnv;
