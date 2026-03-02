import mysql from 'mysql2/promise';

const pool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD || process.env.DB_PASS,
  database: process.env.DB_NAME,
});

export async function query(sql: string, values: any[] = []): Promise<any> {
  const [results] = await pool.execute(sql, values);
  return results;
}
