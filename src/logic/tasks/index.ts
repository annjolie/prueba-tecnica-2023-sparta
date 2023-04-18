// Import required dependencies and action types
import {
  localStorageGetItem,
  localStorageRemoveItem,
  localStorageSetItem
} from '../localStorage';
import { TaskAction, TaskActionTypes } from './actionTypes';
import type { TaskTypes } from './actionTypes';
import type { Reducer } from '@reduxjs/toolkit';

// Define the initial state for authentication
export interface TaskState {
  tasks: TaskTypes[];
}

const initialAuthState: TaskState = {
  tasks: JSON.parse(localStorageGetItem('todoTasks') || '[]')
};

const updateTasks = (tasks: TaskTypes[], task: TaskTypes) => {
  const updatedTasks = tasks.map((item) => {
    if (item.id === task.id) {
      return task;
    }
    return item;
  });
  return updatedTasks;
};

// Define the authReducer function to handle authentication actions
// esta funcion es la encargada de manejar los cambios de estado de las tareas
export const tasksReducer: Reducer<TaskState> = (
  state = initialAuthState,
  action: TaskAction
): TaskState => {
  switch (action.type) {
    case TaskActionTypes.ADD:
      // Add new task in local storage and return new state with tasks
      // agrega una nueva tarea en el local storage y devuelve un nuevo estado con las tareas
      localStorageSetItem(
        'todoTasks',
        JSON.stringify([...state.tasks, action.payload])
      );
      return {
        ...state,
        tasks: [...state.tasks, action.payload]
      };
    case TaskActionTypes.UPDATE:
      // Updating task in local storage and return new state with updated tasks
      // actualiza una tarea en el local storage y devuelve un nuevo estado con las tareas actualizadas
      localStorageSetItem(
        'todoTasks',
        JSON.stringify(updateTasks(state.tasks, action.payload))
      );
      return {
        ...state,
        tasks: updateTasks(state.tasks, action.payload)
      };
    case TaskActionTypes.DELETE:
      // Delete task in local storage and return new state with updated tasks
      // elimina una tarea en el local storage y devuelve un nuevo estado con las tareas actualizadas
      localStorageSetItem(
        'todoTasks',
        JSON.stringify(
          state.tasks.filter((item) => item.id !== action.payload.id)
        )
      );
      return {
        ...state,
        tasks: state.tasks.filter((item) => item.id !== action.payload.id)
      };
    case TaskActionTypes.GET:
      // Get state with all tasks
      // devuelve el estado con todas las tareas
      return {
        ...state,
        tasks: JSON.parse(localStorageGetItem('todoTasks') || '[]')
      };
    case TaskActionTypes.CLEAR:
      // Clear all tasks from local storage and return new state without tasks
      // elimina todas las tareas del local storage y devuelve un nuevo estado sin tareas
      localStorageRemoveItem('todoTasks');
      return {
        ...state,
        tasks: []
      };
    default:
      return { ...state };
  }
};
