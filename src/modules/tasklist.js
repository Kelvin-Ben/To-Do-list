import Task from './task.js';

export default class TaskList {
  constructor() {
    this.localData = [];
    const tempsData = JSON.parse(localStorage.getItem('taskList')) || [];
    if (tempsData.length > 0) {
      tempsData.forEach((element) => {
        this.localData.push(new Task(element.description, element.index, element.completed));
      });
    }
  }

  generateTodoIndex() {
    return this.localData.length + 1;
  }

  refreshIndex() {
    this.localData.forEach((task, index) => {
      task.index = index + 1;
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
    this.localData = this.localData.filter((ontask) => ontask.completed === false);
    this.refreshIndex();
  }
}