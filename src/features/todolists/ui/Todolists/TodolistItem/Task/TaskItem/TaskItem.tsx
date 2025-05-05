import ListItem from "@mui/material/ListItem";
import Checkbox from "@mui/material/Checkbox";
import {EditableSpan} from "@/common/components/EditableSpan/EditableSpan";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import {
  changeTaskStatusAC,
  changeTaskTitleAC,
  deleteTaskAC,
  type Task
} from "@/features/todolists/model/tasks-reducer";
import type {ChangeEvent} from "react";
import {useAppDispatch} from "@/common/hooks/useAppDispatch";
import {
  getListItemSx
} from "@/features/todolists/ui/Todolists/TodolistItem/Task/TaskItem/TaskItem.styles";

type Props = {
  todolistId: string
  task: Task
}
export const TasksItem = ({todolistId, task}: Props) => {
  const dispatch = useAppDispatch()

  const deleteTaskHandler = () => {
    dispatch(deleteTaskAC({todolistId, taskId: task.id}))
  }

  const changeTaskStatusHandler = (e: ChangeEvent<HTMLInputElement>) => {
    const newStatusValue = e.currentTarget.checked
    dispatch(changeTaskStatusAC({
      todolistId,
      taskId: task.id,
      isDone: newStatusValue
    }))
  }

  const changeTaskTitleHandler = (title: string) => {
    dispatch(changeTaskTitleAC({todolistId, taskId: task.id, title}))
  }

  return (
    <ListItem sx={getListItemSx(task.isDone)}>
      <div>
        <Checkbox checked={task.isDone}
                  onChange={changeTaskStatusHandler}/>
        <EditableSpan value={task.title}
                      onChange={changeTaskTitleHandler}/>
      </div>
      <IconButton onClick={deleteTaskHandler}>
        <DeleteIcon/>
      </IconButton>
    </ListItem>
  )
}


