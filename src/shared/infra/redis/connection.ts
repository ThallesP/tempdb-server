import Redis from "ioredis";

export const redisConnection = new Redis(process.env.REDIS_APP_URL, { maxRetriesPerRequest: null });
