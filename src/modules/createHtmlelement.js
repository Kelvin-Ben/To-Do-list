const createHTMLElement = (newElement, className, id, inHTML, parent) => {
  const element = document.createElement(`${newElement}`);
  element.className = `${className}`;
  element.id = `${id}`;
  element.innerHTML = `${inHTML}`;
  parent.appendChild(element);
  return element;
};

const createInputElement = (newElement, className, id, type, name, value, parent) => {
  const element = document.createElement(`${newElement}`);
  element.className = `${className}`;
  element.id = `${id}`;
  element.type = `${type}`;
  element.name = `${name}`;
  element.value = `${value}`;
  parent.appendChild(element);
  return element;
};

export { createHTMLElement, createInputElement };