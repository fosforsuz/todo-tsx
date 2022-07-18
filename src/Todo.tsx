import { List, ListItem, ListItemText } from "@mui/material";
import DoneIcon from "@mui/icons-material/Done";
import React from "react";
import db from "./firebase";

interface TodoItem {
  id: string;
  todo: string;
}

interface Props {
  key: number;
  todo: TodoItem;
}

function Todo(props: Props) {
  const firebaseDelete = () => {
    db.collection("todos")
      .doc(props.todo.id)
      .delete()
      .then(() => console.log("Activity deleted successfuly"))
      .catch((error) => console.log(error));
  };

  return (
    <List>
      <ListItem onClick={firebaseDelete}>
        <DoneIcon fontSize="medium" color="primary" />
        <ListItemText primary={props.todo.todo} />
      </ListItem>
    </List>
  );
}

export default Todo;
