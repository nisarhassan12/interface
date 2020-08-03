import 'dotenv/config';

export const postgresUrl: string = process.env.DATABASE_URL;

export const shadowPostgresUrl: string = process.env.SHADOW_DATABASE_URL;
