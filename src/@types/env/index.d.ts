declare namespace NodeJS {
  interface ProcessEnv {
    readonly POSTGRES_DATABASE_URL: string;
    readonly REDIS_APP_URL: string;
    readonly PASSWORD_AUTHENTICATION: string;
    readonly SENTRY_DSN: string;
    readonly APP_HOST: string;
    readonly MAX_TEMPDB_EXPIRATION_MS: string;
  }
}
