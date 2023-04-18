document.addEventListener("DOMContentLoaded", () => {
  // your code here
  const form = document.querySelector("form");
  form.addEventListener("submit", (e) => {
    e.preventDefault();
    implementToDos();
    form.reset();
  });

  function implementToDos() {
    const input = document.getElementById("new-task-description");
    const description = input.value;
    const liElement = document.createElement("li");
    const ulElement = document.getElementById("tasks");
    const button = document.createElement("button");

    liElement.textContent = `${description} `;
    ulElement.append(liElement);

    button.textContent = "x";
    liElement.appendChild(button);

    button.addEventListener("click", deleteToDos);
  }

  function deleteToDos(e) {
    e.target.parentNode.remove();
  }
});
