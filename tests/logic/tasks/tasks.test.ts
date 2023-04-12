import { TaskState, tasksReducer } from '../../../src/logic/tasks';
import {
  TaskActionTypes,
  TaskClearAction,
  TaskGetAction
} from '../../../src/logic/tasks/actionTypes';

describe('tasksReducer', () => {
  it('should add a new task', () => {
    const action = {
      type: TaskActionTypes.ADD,
      payload: {
        id: '1',
        description: 'Task 1',
        completed: false
      }
    };

    const newState = tasksReducer({ tasks: [] }, action);

    expect(newState.tasks.length).toEqual(1);
    expect(newState.tasks[0].id).toEqual(1);
    expect(newState.tasks[0].description).toEqual('Task 1');
    expect(newState.tasks[0].completed).toEqual(false);
  });

  it('should update an existing task', () => {
    const prevState: TaskState = {
      tasks: [
        {
          id: '1',
          description: 'Task 1',
          completed: false
        },
        {
          id: '2',
          description: 'Task 2',
          completed: false
        }
      ]
    };

    const action = {
      type: TaskActionTypes.UPDATE,
      payload: {
        id: 2,
        description: 'Task 2 updated',
        completed: true
      }
    };

    const newState = tasksReducer(prevState, action);

    expect(newState.tasks.length).toEqual(2);
    expect(newState.tasks[1].id).toEqual(2);
    expect(newState.tasks[1].description).toEqual('Task 2 updated');
    expect(newState.tasks[1].completed).toEqual(true);
  });

  it('should delete an existing task', () => {
    const prevState = {
      tasks: [
        {
          id: '1',
          description: 'Task 1',
          completed: false
        },
        {
          id: '2',
          description: 'Task 2',
          completed: false
        }
      ]
    };

    const action = {
      type: TaskActionTypes.DELETE,
      payload: {
        id: '2',
        description: 'Task 2',
        completed: false
      }
    };

    const newState = tasksReducer(prevState, action);

    expect(newState.tasks.length).toEqual(1);
    expect(newState.tasks[0].id).toEqual(1);
    expect(newState.tasks[0].description).toEqual('Task 1');
    expect(newState.tasks[0].completed).toEqual(false);
  });

  it('should clear all existing tasks', () => {
    const prevState = {
      tasks: [
        {
          id: '1',
          description: 'Task 1',
          completed: false
        },
        {
          id: '2',
          description: 'Task 2',
          completed: false
        }
      ]
    };

    const action: TaskClearAction = {
      type: TaskActionTypes.CLEAR
    };

    const newState = tasksReducer(prevState, action);

    expect(newState.tasks.length).toEqual(0);

    const getAction: TaskGetAction = {
      type: TaskActionTypes.GET
    };

    const getState = tasksReducer({ tasks: [] }, getAction);
    expect(getState.tasks.length).toEqual(0);
  });

  it('handles action with unknown type', () => {
    const action = { type: 'UNKNOWN' };
    const newState = tasksReducer({ tasks: [] }, action as any);
    expect(newState.tasks).toEqual([]);
  });
});
