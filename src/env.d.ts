interface ImportMetaEnv {
  readonly VITE_ACCESS_TOKEN: string;
  readonly DEV: boolean;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
