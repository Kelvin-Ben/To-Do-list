export default class Task {
  constructor(description, index, completed) {
    this.description = description;
    this.completed = completed;
    this.index = index;
  }

  getCompleted() {
    return this.completed;
  }

  setCompleted(statut) {
    this.completed = statut;
  }

  renderLi() {
    const linethrough = this.completed ? ' line_through ' : '';
    const displayUnCompleted = `<img src="./assets/todouncompleteicon.svg" alt="todo statut icon" class="uncomplete${this.index}" onclick="completeTask(${this.index})"> `
    + `<img src="./assets/completeicon.svg" alt="todo statut icon" class="complete${this.index} hidden_item" onclick="uncompleteTask(${this.index})"> `;
    const displayCompleted = `<img src="./assets/todouncompleteicon.svg" alt="todo statut icon" class=" hidden_item uncomplete${this.index}" onclick="completeTask(${this.index})"> `
    + `<img src="./assets/completeicon.svg" alt="todo statut icon" class="complete${this.index} " onclick="uncompleteTask(${this.index})"> `;
    const completedIcon = this.completed ? displayCompleted : displayUnCompleted;
    return `<li class="todo_details li${this.index}" onmouseover="displayDeleteButton(${this.index})" onmouseleave="hideDeleteButton(${this.index})"><div class="statut_and_detail">${completedIcon

    }<input class="todo_description ${linethrough}input${this.index}" value="${this.description}" onfocusout="lifocusout(${this.index})" onclick="focusInput(${this.index})" onchange="taskUpdate(${this.index})"></input>`
    + `</div><img src="assets/detail_icon.svg" alt="action icon" class="doto_action details${this.index}">`
    + `<img src="assets/tododelete.svg" alt="action icon" class="doto_action delete${this.index} hidden_item" onclick="removeTask(${this.index})">`
    + '</li>';
  }
}