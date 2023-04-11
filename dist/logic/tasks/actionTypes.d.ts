export declare type TaskTypes = {
    id: number;
    description?: string;
    completed?: boolean;
};
export interface TaskAddAction {
    type: TaskActionTypes.ADD;
    payload: TaskTypes;
}
export interface TaskUpdateAction {
    type: TaskActionTypes.UPDATE;
    payload: TaskTypes;
}
export interface TaskDeleteAction {
    type: TaskActionTypes.DELETE;
    payload: TaskTypes;
}
export interface TaskGetAction {
    type: TaskActionTypes.GET;
}
export interface TaskClearAction {
    type: TaskActionTypes.CLEAR;
}
export declare type TaskAction = TaskAddAction | TaskUpdateAction | TaskDeleteAction | TaskGetAction | TaskClearAction;
export declare enum TaskActionTypes {
    ADD = "ADD",
    UPDATE = "UPDATE",
    DELETE = "DELETE",
    GET = "GET",
    CLEAR = "CLEAR"
}
