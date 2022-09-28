// eslint-disable-next-line no-unused-vars
import createElement from './HtmlElement.js';

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
];
const taskcontainer = document.querySelector('to-do-list');
tasks = tasks.sort((a, b) => (b.index - a.index));
export default () => {
  tasks.forEach((tasks) => {
    createElement = ('li', 'task-item', 'task-item', `${tasks.description}`, taskcontainer);
  });
};
