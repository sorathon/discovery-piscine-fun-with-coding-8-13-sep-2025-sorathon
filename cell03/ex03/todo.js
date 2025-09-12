const list = document.getElementById("ft_list");
const btn = document.getElementById("newBtn");


function setCookie(name, value, days) {
  const d = new Date();
  d.setTime(d.getTime() + (days*24*60*60*1000));
  document.cookie = name + "=" + encodeURIComponent(value) + ";expires=" + d.toUTCString() + ";path=/";
}

function getCookie(name) {
  const cookies = document.cookie.split("; ");
  for (let c of cookies) {
    const [key, val] = c.split("=");
    if (key === name) return decodeURIComponent(val);
  }
  return "";
}


function saveTodos() {
  const todos = [];
  document.querySelectorAll("#ft_list .todo").forEach(todo => {
    todos.push(todo.textContent);
  });
  setCookie("todos", JSON.stringify(todos), 7);
}


function addTodo(text, save = true) {
  if (!text) return;
  const div = document.createElement("div");
  div.className = "todo";
  div.textContent = text;


  div.addEventListener("click", () => {
    if (confirm("Do you want to remove this TO DO?")) {
      div.remove();
      saveTodos();
    }
  });

 
  list.insertBefore(div, list.firstChild);

  if (save) saveTodos();
}


window.onload = function() {
  const cookieData = getCookie("todos");
  if (cookieData) {
    try {
      const todos = JSON.parse(cookieData);
      todos.forEach(t => addTodo(t, false));
    } catch(e) {
      console.error("Invalid cookie data", e);
    }
  }
};


btn.addEventListener("click", () => {
  const todoText = prompt("Enter a new TO DO:");
  if (todoText && todoText.trim() !== "") {
    addTodo(todoText.trim());
  }
});
