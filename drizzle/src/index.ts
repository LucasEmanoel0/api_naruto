import 'dotenv/config';
import { drizzle } from 'drizzle-orm/node-postgres';

if (!process.env.DATABASE_URL) {
  throw new Error('DATABASE_URL não está definida');
}

const db = drizzle(process.env.DATABASE_URL);
const pool = db.$client;

export { pool,db };
