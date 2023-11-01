interface ImportMetaEnv {
  readonly VITE_API_KEY: string;
  readonly VITE_ACCESS_TOKEN: string;
  readonly DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
