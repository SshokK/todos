/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_LINKEDIN_LINK: string;
  readonly VITE_GITHUB_LINK: string;
  readonly VITE_API_URL: string;
}

interface ImportMeta {
  readonly env: ImportMetaEnv;
}
