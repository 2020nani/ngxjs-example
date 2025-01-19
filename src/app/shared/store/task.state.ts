import { State, Action, StateContext, Selector } from '@ngxs/store';
import { Injectable } from '@angular/core';
import { Task } from '../models/task.model';
import { AddTask, ToggleTask, DeleteTask } from './task.actions';

export interface TaskStateModel {
  Tasks: Task[];
}

@State<TaskStateModel>({
  name: 'Tasks',
  defaults: {
    Tasks: [],
  },
})
@Injectable()
export class TaskState {
  private nextId = 1;

  @Selector()
  static getTasks(state: Task[]): Task[] {
    return state;
  }

  @Action(AddTask)
  addTask(
    { getState, patchState }: StateContext<TaskStateModel>,
    { task }: AddTask
  ): void {
    const state = getState();
    patchState({
      Tasks: [
        ...state.Tasks,
        { id: this.nextId++, task, completed: false },
      ],
    });
    alert(JSON.stringify(state))
  }

  @Action(ToggleTask)
  toggleTask(
    { getState, patchState }: StateContext<TaskStateModel>,
    { id }: ToggleTask
  ): void {
    const state = getState();
    patchState({
      Tasks: state.Tasks.map(Task =>
        Task.id === id ? { ...Task, completed: !Task.completed } : Task
      ),
    });
  }

  @Action(DeleteTask)
  deleteTask(
    { getState, patchState }: StateContext<TaskStateModel>,
    { id }: DeleteTask
  ): void {
    const state = getState();
    patchState({
      Tasks: state.Tasks.filter(Task => Task.id !== id),
    });
  }
}
