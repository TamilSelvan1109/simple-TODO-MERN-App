import Todo from "../models/todo.model.js";

const addTodo = async (req, res) => {
  const todo = new Todo({
    text: req.body.text,
  });
  try {
    const newTodo = await todo.save();
    res.status(200).json(newTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const getAllTodo = async (req, res) => {
  try {
    const todos = await Todo.find({});
    res.status(200).json(todos);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const updateTodo = async (req, res) => {
  try {
    const todo = await Todo.findById(req.params.id);
    if (!todo) return res.status(404).json({ message: "Todo not found!" });
    if (req.body.text !== undefined) {
      todo.text = req.body.text;
    }
    if (req.body.completed !== undefined) {
      todo.completed = req.body.completed;
    }
    const updatedTodo = await todo.save();
    res.status(200).json(updatedTodo);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

const deleteTodo = async (req, res) => {
  try {
    const todo = await Todo.findByIdAndDelete(req.params.id);
    if (!todo) {
      return res.status(404).json({ message: "Todo not found!" });
    }
    res.status(200).json({ message: "Todo deleted!" });
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export  { addTodo, getAllTodo, updateTodo, deleteTodo };
