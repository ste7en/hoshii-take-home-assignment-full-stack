/// <reference types="vite/client" />

interface ImportMetaEnv {
  readonly VITE_ENABLE_OTHER_INBOXES: string
  readonly VITE_ENABLE_SEARCH: string
  readonly VITE_ENABLE_UNREADS: string
}

interface ImportMeta {
  readonly env: ImportMetaEnv
}