import { Pool } from 'pg';

const pool = new Pool({
    user: "manager",
    host: "localhost",
    password: "password1234",
    port: "5432",
    database: "chronomind"
});

pool.on("connect", () => {
    console.log("Database connected");
});

pool.on("error", (err) => {
    console.error("Database error", err);
});

export default pool;