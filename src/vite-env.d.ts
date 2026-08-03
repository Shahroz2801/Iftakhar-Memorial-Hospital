/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_HOSPITAL_PHONE?: string
  readonly VITE_HOSPITAL_EMAIL?: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}
