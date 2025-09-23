import express from "express";
import {
  addTodo,
  deleteTodo,
  getAllTodo,
  updateTodo,
} from "../controllers/todo.controller.js";
const router = express.Router();

// Get All todos
router.get("/", getAllTodo);

// Add new todo
router.post("/", addTodo);

// Update a todo (text / completed)
router.patch("/:id", updateTodo);

// Delete a todo
router.delete("/:id", deleteTodo);

export default router;
