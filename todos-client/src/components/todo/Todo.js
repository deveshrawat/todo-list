import React, { useState } from "react";
import ListItem from "@material-ui/core/ListItem";
import ListItemText from "@material-ui/core/ListItem";
import Checkbox from "@material-ui/core/Checkbox";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import AddIcon from "@material-ui/icons/Add";
import ListItemSecondaryAction from "@material-ui/core/ListItemSecondaryAction";
import SubTasks from "./SubTasks";

import EditTodoForm from "./EditTodoForm";

function Todo({ id, description, status, removeTodo, toggleTodo, editTodo, subTasks }) {
   const [isEditing, toggle] = useState(false);
   const [showSubtasks, setShowSubtasks] = useState(false);

   return (
      <>
         <ListItem style={{ height: "64px" }}>
            {isEditing ? (
               <EditTodoForm
                  editTodo={editTodo}
                  id={id}
                  task={description}
                  toggleEditForm={toggle}
               />
            ) : (
               <>
                  <Checkbox
                     tabIndex={-1}
                     checked={status === "completed"}
                     onClick={() => toggleTodo(id)}
                  />
                  <ListItemText
                     style={{
                        textDecoration: status === "completed" ? "line-through" : "none",
                     }}>
                     {description}
                  </ListItemText>
                  <ListItemSecondaryAction>
                     <IconButton aria-label='Delete' onClick={() => removeTodo(id)}>
                        <DeleteIcon />
                     </IconButton>
                     <IconButton aria-label='Edit' onClick={toggle}>
                        <EditIcon />
                     </IconButton>

                     <IconButton
                        aria-label='Add SubTask'
                        onClick={() => setShowSubtasks(!showSubtasks)}>
                        <AddIcon />
                     </IconButton>
                  </ListItemSecondaryAction>
               </>
            )}
         </ListItem>
         {showSubtasks && (
            <SubTasks taskId={id} subtasks={subTasks} show={showSubtasks} />
         )}
      </>
   );
}

export default Todo;
