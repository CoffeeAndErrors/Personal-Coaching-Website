import sqlite3 from 'sqlite3';
import { promisify } from 'util';

const db = new sqlite3.Database('./contacts.db');

// Promisify the run method
db.runPromise = promisify(db.run).bind(db);

db.serialize(() => {
  db.run(`
    CREATE TABLE IF NOT EXISTS contacts (
      id INTEGER PRIMARY KEY AUTOINCREMENT,
      name TEXT,
      email TEXT,
      phone TEXT,
      message TEXT,
      created_at DATETIME DEFAULT CURRENT_TIMESTAMP
    )
  `);

  // Migration: Add phone column to existing tables
  db.run("ALTER TABLE contacts ADD COLUMN phone TEXT", (err) => {
    if (err) {
      // Column likely already exists, ignore error
    }
  });
});

export default db;