import { NestFactory } from '@nestjs/core';
import { AppModule } from './app.module';
import pool from './database'

async function initializeDatabase() {
  const databaseCreateQuery = `CREATE DATABASE IF NOT EXISTS "chronomind";`
  const tableCreationQuery = `
  CREATE TABLE IF NOT EXISTS "user" (
    "id" SERIAL PRIMARY KEY,
    "email" VARCHAR(100) NOT NULL,
    "username" VARCHAR(100) NOT NULL,
    "password" VARCHAR(100) NOT NULL,
  );
  `
  await pool.query(databaseCreateQuery);
  await pool.query(tableCreationQuery);
  console.log('✅ Users table checked/created.');
}

async function bootstrap() {
  initializeDatabase();
  const app = await NestFactory.create(AppModule);
  await app.listen(process.env.PORT ?? 3000);
}
bootstrap();
