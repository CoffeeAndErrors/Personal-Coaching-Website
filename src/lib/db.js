import { createPool } from '@vercel/postgres';

// Use a lazy-loaded pool to prevent build-time connection errors on Vercel
let pool;

const getPool = () => {
  if (!pool) {
    // Only create the pool if the connection string exists
    if (!process.env.POSTGRES_URL) {
      console.warn('POSTGRES_URL is missing. Database operations will fail.');
    }
    pool = createPool();
  }
  return pool;
};

// Initialization function to ensure the table exists
export async function initDb() {
  const db = getPool();
  if (!process.env.POSTGRES_URL) return;

  try {
    await db.sql`
      CREATE TABLE IF NOT EXISTS contacts (
        id SERIAL PRIMARY KEY,
        name TEXT NOT NULL,
        email TEXT NOT NULL,
        phone TEXT NOT NULL,
        message TEXT NOT NULL,
        created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
      )
    `;
    console.log('Database initialized successfully');
  } catch (error) {
    console.error('Error initializing database:', error);
  }
}

// Export the pool getter for runtime use
export default getPool;