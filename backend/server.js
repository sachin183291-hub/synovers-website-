import express from 'express';
import cors from 'cors';
import sqlite3 from 'sqlite3';
import path from 'path';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const port = process.env.PORT || 5000;

// Allow requests from anywhere (frontend on different domain when deployed)
app.use(cors({
  origin: '*',
  methods: ['GET', 'POST'],
  allowedHeaders: ['Content-Type']
}));
app.use(express.json());

// Use /data directory if available (for persistent disks on Render),
// otherwise fall back to the local __dirname
const dataDir = process.env.DATA_DIR || __dirname;
const dbPath = path.resolve(dataDir, 'database.sqlite');

const db = new sqlite3.Database(dbPath, (err) => {
  if (err) {
    console.error('Error opening database', err);
  } else {
    console.log('Connected to SQLite database at:', dbPath);
    db.serialize(() => {
      db.run(`
        CREATE TABLE IF NOT EXISTS contacts (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          name TEXT,
          email TEXT,
          phone TEXT,
          course TEXT,
          message TEXT,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);

      db.run(`
        CREATE TABLE IF NOT EXISTS newsletter_subscribers (
          id INTEGER PRIMARY KEY AUTOINCREMENT,
          email TEXT UNIQUE,
          created_at DATETIME DEFAULT CURRENT_TIMESTAMP
        )
      `);
    });
  }
});

// Health check endpoint (required by many cloud platforms)
app.get('/api/health', (req, res) => {
  res.status(200).json({ status: 'ok' });
});

// Contact API Endpoint
app.post('/api/contact', (req, res) => {
  const { name, email, phone, course, message } = req.body;

  if (!name || !email || !phone) {
    return res.status(400).json({ success: false, message: 'Missing required fields' });
  }

  const query = `INSERT INTO contacts (name, email, phone, course, message) VALUES (?, ?, ?, ?, ?)`;
  db.run(query, [name, email, phone, course, message], function(err) {
    if (err) {
      console.error('Error saving contact:', err.message);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
    res.status(200).json({ success: true, message: 'Message saved successfully', id: this.lastID });
  });
});

// Newsletter API Endpoint
app.post('/api/newsletter', (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ success: false, message: 'Email is required' });
  }

  const query = `INSERT INTO newsletter_subscribers (email) VALUES (?)`;
  db.run(query, [email], function(err) {
    if (err) {
      if (err.message.includes('UNIQUE constraint failed')) {
        return res.status(400).json({ success: false, message: 'Email is already subscribed' });
      }
      console.error('Error saving newsletter:', err.message);
      return res.status(500).json({ success: false, message: 'Internal Server Error' });
    }
    res.status(200).json({ success: true, message: 'Subscribed successfully', id: this.lastID });
  });
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
