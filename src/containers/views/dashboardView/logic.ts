import { useRouter } from 'next/router';
import { useCallback, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { v4 as uuidv4 } from 'uuid';
import { TaskState } from '../../../logic/tasks';
import { AddTask, UpdateTask, DeleteTask } from '../../../logic/tasks/actions';
import { LogOut } from '../../../logic/auth/actions';
import { EditItem } from './types';

export const useLogic = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const tasks = useSelector((state: TaskState) => state.tasks);
  const [editingList, setEditingList] = useState<EditItem[]>([]);

  const handleItemDescriptionChange = useCallback(
    (itemId: string, description: string) => {
      const task = tasks.find((i) => i.id === itemId);
      if (!task) {
        return;
      }
      task.description = description;
      dispatch(UpdateTask(task));
    },
    [dispatch, UpdateTask, tasks]
  );

  const handleAddItem = useCallback(
    (description: string) => {
      const task = {
        id: uuidv4(),
        text: description,
        completed: false
      };
      dispatch(AddTask(task));
    },
    [dispatch, AddTask]
  );

  const handleEditItem = useCallback(
    (itemId: string) => {
      const task = tasks.find((i) => i.id === itemId);
      if (!task) {
        return;
      }
      task.editing = true;
      dispatch(UpdateTask(task));
      const copyList = [...editingList];
      copyList.push({
        id: itemId,
        value: task.description || ''
      });
      setEditingList(copyList);
    },
    [dispatch, UpdateTask, tasks]
  );

  const handleToggleItem = useCallback(
    (itemId: string) => {
      const task = tasks.find((i) => i.id === itemId);
      if (!task) {
        return;
      }
      task.completed = !task.completed;
      dispatch(UpdateTask(task));
    },
    [dispatch, UpdateTask, tasks]
  );

  const handleUpdateItem = useCallback(
    (itemId: string) => {
      const task = tasks.find((i) => i.id === itemId);
      const editingItem = editingList.find((i) => i.id === itemId);
      if (!task || !editingItem) {
        return;
      }
      task.editing = false;
      task.description = editingItem.value;
      dispatch(UpdateTask(task));
      setEditingList((prev) =>
        prev.filter((editItem) => editItem.id !== itemId)
      );
    },
    [dispatch, UpdateTask, tasks, editingList]
  );

  const handleDeleteItem = useCallback(
    (itemId: string) => {
      const task = tasks.find((i) => i.id === itemId);
      if (!task) {
        return;
      }
      dispatch(DeleteTask(task));
    },
    [dispatch, DeleteTask, tasks]
  );

  const handleCancelItemChange = useCallback(
    (itemId: string) => {
      const task = tasks.find((i) => i.id === itemId);
      if (!task) {
        return;
      }
      task.editing = false;
      dispatch(UpdateTask(task));
      setEditingList((prev) =>
        prev.filter((editItem) => editItem.id !== itemId)
      );
    },
    [setEditingList]
  );

  const handleLogout = useCallback(() => {
    dispatch(LogOut());
    router.push('/login');
  }, [router]);

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
