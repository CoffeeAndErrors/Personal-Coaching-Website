import { createPool } from '@vercel/postgres';

// Lazy pool: avoids build-time connection errors on Vercel.
let pool;
let ready;

function getPool() {
  if (!process.env.POSTGRES_URL) throw new Error('POSTGRES_URL is not configured');
  return (pool ??= createPool());
}

// Table is created once per server instance; a failed attempt is retried next time.
function init(db) {
  return (ready ??= (async () => {
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
    await db.sql`ALTER TABLE contacts ADD COLUMN IF NOT EXISTS plan TEXT`;
  })().catch((err) => {
    ready = undefined;
    throw err;
  }));
}

export async function saveContact({ name, email, phone, message, plan }) {
  const db = getPool();
  await init(db);
  await db.query(
    'INSERT INTO contacts (name, email, phone, message, plan) VALUES ($1, $2, $3, $4, $5)',
    [name, email, phone, message, plan || null]
  );
}
