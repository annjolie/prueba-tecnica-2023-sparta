import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import {
  AddTask,
  UpdateTask,
  DeleteTask,
  ClearTask
} from '../../../logic/tasks/actions';
import { LogOut } from '../../../logic/auth/actions';
import { EditItem } from './types';
import { TaskTypes } from '../../../logic/tasks/actionTypes';

export const useLogic = () => {
  // inicializacion de variables
  const router = useRouter();

  const tasks = useSelector((state: any) => state.tasksReducer.tasks);

  const dispatch = useDispatch();
  // estado para editar las tareas
  const [editingList, setEditingList] = useState<EditItem[]>(
    tasks
      .filter((i: TaskTypes) => i.editing)
      .map((i: TaskTypes) => ({ id: i.id, value: i.description }))
  );
  // modificar la descripcion de la tarea
  const handleItemDescriptionChange = useCallback(
    (itemId: string, description: string) => {
      const item = editingList.find((i: EditItem) => i.id === itemId);
      if (!item) {
        return;
      }
      item.value = description;
      setEditingList([...editingList]);
    },
    [setEditingList, editingList]
  );
  // agregar una nueva tarea
  const handleAddItem = useCallback(() => {
    const task = {
      id: uuidv4(),
      description: 'New task',
      completed: false,
      editing: false
    };
    dispatch(AddTask(task));
  }, [dispatch, AddTask]);

  // mostrar el input para editar la tarea
  // 1 se ejecuta un trigger para editar la tarea colocando editing en true
  // 2 se agrega el id y la descripcion de la tarea a la lista de edicion
  const handleEditItem = useCallback(
    (itemId: string) => {
      const task = tasks.find((i: TaskTypes) => i.id === itemId);
      if (!task) {
        return;
      }
      const newTask = {
        id: task.id,
        description: task.description,
        completed: task.completed,
        editing: true
      };
      dispatch(UpdateTask(newTask));
      const copyList = [...editingList];
      copyList.push({
        id: itemId,
        value: task.description || ''
      });
      setEditingList(copyList);
    },
    [dispatch, UpdateTask, tasks, setEditingList, editingList]
  );

  // marcar completado o no completado la tarea
  const handleToggleItem = useCallback(
    (itemId: string) => {
      const task = tasks.find((i: TaskTypes) => i.id === itemId);
      if (!task) {
        return;
      }
      const newTask = {
        id: task.id,
        description: task.description,
        completed: !task.completed,
        editing: false
      };
      dispatch(UpdateTask(newTask));
    },
    [dispatch, UpdateTask, tasks]
  );

  // guardar la tarea editada
  const handleUpdateItem = useCallback(
    (itemId: string) => {
      const task = tasks.find((i: TaskTypes) => i.id === itemId);
      const editingItem = editingList.find((i) => i.id === itemId);
      if (!task || !editingItem) {
        return;
      }
      const newTask = {
        id: task.id,
        description: editingItem.value,
        completed: task.completed,
        editing: false
      };
      dispatch(UpdateTask(newTask));
      setEditingList((prev) =>
        prev.filter((editItem) => editItem.id !== itemId)
      );
    },
    [dispatch, UpdateTask, tasks, editingList]
  );

  // eliminar la tarea
  const handleDeleteItem = useCallback(
    (itemId: string) => {
      const task = tasks.find((i: TaskTypes) => i.id === itemId);
      if (!task) {
        return;
      }
      dispatch(DeleteTask(task));
    },
    [dispatch, DeleteTask, tasks]
  );

  // cancelar la edicion de la tarea
  const handleCancelItemChange = useCallback(
    (itemId: string) => {
      const task = tasks.find((i: TaskTypes) => i.id === itemId);
      if (!task) {
        return;
      }
      const newTask = {
        id: task.id,
        description: task.description,
        completed: task.completed,
        editing: false
      };
      dispatch(UpdateTask(newTask));
      setEditingList((prev) =>
        prev.filter((editItem) => editItem.id !== itemId)
      );
    },
    [dispatch, UpdateTask, tasks, setEditingList]
  );

  // cerrar sesion
  // envia  la vista de login
  const handleLogout = useCallback(() => {
    dispatch(LogOut());
    dispatch(ClearTask());
    router.push('/login');
  }, [dispatch, LogOut, ClearTask, router]);

  // devuelve el valor de la tarea a editar
  const getEditingValue = useCallback(
    (itemId: string) => {
      const editingItem = editingList.find((i) => i.id === itemId);
      return editingItem ? editingItem.value : '';
    },
    [editingList]
  );

  return {
    tasks,
    handleItemDescriptionChange,
    handleAddItem,
    handleEditItem,
    handleToggleItem,
    handleDeleteItem,
    handleCancelItemChange,
    handleUpdateItem,
    handleLogout,
    getEditingValue
  };
};
