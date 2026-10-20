require('dotenv').config();
const express = require('express');
const mysql = require('mysql2');

const app = express();
const port = process.env.PORT || 8080;

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
});

db.connect((err) => {
  if (err) throw err;
  console.log('Successfully connected to the private RDS MySQL Database!');
});

app.get('/health', (req, res) => {
  res.send('Success! The Web Tier can reach the App Tier, and the App Tier is connected to the DB.');
});

app.listen(port, () => {
  console.log(`Backend server is running on port ${port}`);
});
