import {CreateItemForm} from "@/common/components/CreateItemForm/CreateItemForm";
import {type Todolist} from "@/features/todolists/model/todolists-reducer";
import {createTaskAC} from "@/features/todolists/model/tasks-reducer";
import {useAppDispatch} from "@/common/hooks/useAppDispatch";
import {TodolistTitle} from "@/features/todolists/ui/Todolists/TodolistItem/TodolistTitle/TodolistTitle";
import {FilterButtons} from "@/features/todolists/ui/Todolists/TodolistItem/FilterButtons/FilterButtons";
import {Tasks} from "@/features/todolists/ui/Todolists/TodolistItem/Task/Tasks";

type Props = {
  todolist: Todolist
}

export const TodolistItem = ({todolist}: Props) => {
  const dispatch = useAppDispatch()

  const createTaskHandler = (title: string) => {
    dispatch(createTaskAC({todolistId: todolist.id, title}))
  }

  return (
    <div>
      <TodolistTitle todolist={todolist} />
      <CreateItemForm onCreateItem={createTaskHandler}/>
      <Tasks todolist={todolist}/>
     <FilterButtons todolist={todolist}/>
    </div>
  )
}


