declare namespace NodeJS {
  interface ProcessEnv {
    readonly POSTGRES_DATABASE_URL: string;
  }
}
