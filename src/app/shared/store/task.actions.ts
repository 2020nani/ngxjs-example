export class AddTask {
  static readonly type = '[Task] Add Task';
  constructor(public task: string) {}
}

export class ToggleTask {
  static readonly type = '[Task] Toggle Task';
  constructor(public id: number) {}
}

export class DeleteTask {
  static readonly type = '[Task] Delete Task';
  constructor(public id: number) {}
}
