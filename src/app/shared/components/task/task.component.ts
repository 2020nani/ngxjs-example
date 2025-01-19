import { Component } from '@angular/core';
import { Store, Select } from '@ngxs/store';
import { Observable } from 'rxjs';
import { TaskState } from '../../store/task.state';
import { Task } from '../../models/task.model';
import { AddTask, DeleteTask, ToggleTask } from '../../store/task.actions';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html',
  styleUrls: ['./task.component.css'],
})
export class TaskComponent {
  @Select(TaskState.getTasks) tasks$!: Observable<Task[]>;
  newTask: string = '';

  constructor(private store: Store) {}

  addTask(): void {
    console.log(this.newTask)
    if (this.newTask.trim()) {
      this.store.dispatch(new AddTask(this.newTask.trim()));
      this.newTask = '';
    }
  }

  toggleTask(id: number): void {
    this.store.dispatch(new ToggleTask(id));
  }

  deleteTask(id: number): void {
    this.store.dispatch(new DeleteTask(id));
  }
}
