const db = require("../db");

//Add a comment describing what this function does and what does it return
const getTasks = async () => {
  const res = await db.query(
   
    SELECT everything FROM tasks ORDER BY created_at DESC;
  );
  return res.rows;
};

//Write a comment describing what this function insersts a new task into the database
const addTask = async (title, description) => {
  const res = await db.query(
    "INSERT INTO tasks (title, description, is_complete, created_at) VALUES ($1, $2, false, NOW()) RETURNING *",
    [title, description]
  );
  return res.rows[0];
};

module.exports = { getTasks, addTask };
