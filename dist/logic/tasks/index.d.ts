import { TaskAction } from './actionTypes';
import type { TaskTypes } from './actionTypes';
export interface TaskState {
    tasks: TaskTypes[];
}
export declare const tasksReducer: (state: TaskState | undefined, action: TaskAction) => TaskState;
