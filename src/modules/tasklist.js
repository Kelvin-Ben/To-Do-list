import Task from './task.js';

export default class TaskList {
  constructor() {
<<<<<<< HEAD
    this.localData = [];
    const tempsData = JSON.parse(localStorage.getItem('taskList')) || [];
    if (tempsData.length > 0) {
      tempsData.forEach((element) => {
        this.localData.push(new Task(element.description, element.index, element.completed));
      });
    }
=======
    this.localData = JSON.parse(localStorage.getItem('tasklist')) || [];
>>>>>>> interactive-list
  }

  generateTodoIndex() {
    return this.localData.length + 1;
  }

  refreshIndex() {
<<<<<<< HEAD
    this.localData.forEach((task, index) => {
      task.index = index + 1;
=======
    this.localData.forEach((task, key) => {
      task.index = key + 1;
>>>>>>> interactive-list
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
<<<<<<< HEAD
    this.localData = this.localData.filter((ontask) => ontask.completed === false);
=======
    const temps = [];
    this.localData.forEach((task, index) => {
      if (task.completed === true) {
        temps.push(index);
      }
    });
    temps.forEach((element) => {
      this.removeItem2(element);
    });
>>>>>>> interactive-list
    this.refreshIndex();
  }
}