export default (newElement, id, className, innerHTML, parent) => {
  const element = document.createElement(`${newElement}`);
  element.id = `${id}`;
  element.className = `${className}`;
  element.innerHTML = `${innerHTML}`;
  parent.appendChild(element);
  return element;
};