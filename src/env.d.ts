interface ImportMetaEnv {
  readonly VITE_APP_KEY: string;
  readonly VITE_APP_SECRET_KEY: string;
  readonly VITE_API_ROOT: string;
  readonly DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
