// const express = require('express');
// const cors = require('cors');
// const mysql = require('mysql2/promise');


import express from 'express';
import cors from 'cors';
import mysql from 'mysql2/promise';

// import dotenv from 'dotenv';
// dotenv.config(); // Загружаем переменные окружения из .env файла

// Создаем подключение к БД
const pool = mysql.createPool({
  host: 'localhost',
  user: 'ваш_пользователь',
  password: 'ваш_пароль',
  database: 'child_landing'
});


const app = express();
const port = 3001; // Порт бэкенда
app.use(cors()); // Разрешает запросы с любого origin (для разработки)

// Пример запроса
app.get('/api/profile', async (req, res) => {
  const [rows] = await pool.query('SELECT * FROM user_profile');
  res.json(rows);
});

// Middleware для обработки JSON
app.use(express.json());

// Тестовый роут
app.get('/', (req, res) => {
  res.send('Привет! Это бэкенд лендингssssа!');
});

// Запуск сервера
app.listen(port, () => {
  console.log(`Сервер запущен на http://localhost:${port}`);
});
