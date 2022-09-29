import createHtmlelement from './createHtmlelement.js';

let tasks = [
  {
    description: 'Laundry',
    completed: true,
    index: 1,
  },

  {
    description: 'study',
    completed: true,
    index: 2,
  },

  {
    description: 'play',
    completed: true,
    index: 3,
  },

  {
    description: 'watch',
    completed: true,
    index: 4,
  },

  {
    description: 'hangout',
    completed: true,
    index: 5,
  },
];

const tasksContainer = document.querySelector('.todo-list');

tasks = tasks.sort((a, b) => (b.index - a.index));

export default () => {
  tasks.forEach((element) => {
    createHtmlelement('li', 'task-items', 'task-item', `${element.description}`, tasksContainer);
  });
};
