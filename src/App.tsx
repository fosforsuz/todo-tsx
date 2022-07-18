import "./App.css";
import React, { useEffect, useState } from "react";
import { Button, FormControl, InputLabel, Input } from "@mui/material";
import Todo from "./Todo";
import db from "./firebase";

interface TodoItem {
  id: string;
  todo: string;
}

function App() {
  const [todos, setTodos] = useState<any>([]);
  const [input, setInput] = useState<String>("");

  const addTodo = () => {
    db.collection("todos").add({
      todo: input,
    });
    setInput("");
  };

  useEffect(() => {
    db.collection("todos").onSnapshot((snapshot) => {
      setTodos(
        snapshot.docs.map((doc) => ({ id: doc.id, todo: doc.data().todo }))
      );
    });
  }, []);

  return (
    <div className="App">
      <form>
        <FormControl>
          <InputLabel>Write a Todo</InputLabel>
          <Input
            value={input}
            onChange={(event) => setInput(event.target.value)}
          />
        </FormControl>

        <Button
          type="submit"
          disabled={!input}
          onClick={addTodo}
          variant="contained"
          color="primary"
        >
          Add Todo
        </Button>
      </form>

      <ul>
        {todos.map((todo: TodoItem, id: number) => (
          <Todo key={id} todo={todo} />
        ))}
      </ul>
    </div>
  );
}

export default App;
