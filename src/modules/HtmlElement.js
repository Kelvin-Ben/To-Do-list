export default (newElement, id, className, inerHTML, parent) => {
  const element = document.createElement(`${newElement}`);
  Element.id = `${id}`;
  Element.className = `${className}`;
  Element.innerHTML = `${inerHTML}`;
  parent.appendChild(element);
  return element;
};