import { TaskActionTypes, TaskTypes } from './actionTypes';

export const AddTask = (task: TaskTypes) => ({
  type: TaskActionTypes.ADD,
  payload: task
});

export const UpdateTask = (task: TaskTypes) => ({
  type: TaskActionTypes.UPDATE,
  payload: task
});

export const DeleteTask = (task: TaskTypes) => ({
  type: TaskActionTypes.DELETE,
  payload: task
});

export const ClearTask = () => ({
  type: TaskActionTypes.CLEAR
});
