import Task from './task.js';

export default class TaskList {
  constructor() {
    this.localData = JSON.parse(localStorage.getItem('tasklist')) || [];
  }

  generateTodoIndex() {
    return this.localData.length + 1;
  }

  refreshIndex() {
    this.localData.forEach((task, key) => {
      task.index = key + 1;
    });
    this.localStrore();
  }

  generateTaskList() {
    let content = '';
    this.localData.forEach((task) => {
      content += task.renderLi();
    });
    return content;
  }

  addTask(description) {
    this.localData.push(new Task(description, this.generateTodoIndex(), false));
    this.refreshIndex();
  }

  removeItem(index) {
    this.localData.splice(index, 1);
    this.refreshIndex();
  }

  removeItem2(index) {
    this.localData.splice(index, 1);
  }

  localStrore() {
    localStorage.setItem('taskList', JSON.stringify(this.localData));
  }

  clearCompletedTasks() {
    const temps = [];
    // console.log('inside the task list and the task'+key+1+' statut == '+task.completed);
    this.localData.forEach((task, index) => {
      if (task.completed === true) {
        temps.push(index);
      }
    });
    temps.forEach((element) => {
      this.removeItem2(element);
    });
    this.refreshIndex();
  }
}