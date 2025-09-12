
    $(document).ready(function() {
      const $list = $("#ft_list");
      const $btn = $("#newBtn");

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
        $list.find(".todo").each(function() {
          todos.push($(this).text());
        });
        setCookie("todos", JSON.stringify(todos), 7);
      }

      function addTodo(text, save = true) {
        if (!text) return;
        const $div = $("<div></div>").addClass("todo").text(text);

        $div.on("click", function() {
          if (confirm("Do you want to remove this TO DO?")) {
            $(this).remove();
            saveTodos();
          }
        });

        $list.prepend($div); // เพิ่มไว้ด้านบนสุด

        if (save) saveTodos();
      }

      // โหลดจาก cookie
      const cookieData = getCookie("todos");
      if (cookieData) {
        try {
          const todos = JSON.parse(cookieData);
          todos.forEach(t => addTodo(t, false));
        } catch(e) {
          console.error("Invalid cookie data", e);
        }
      }

      // ปุ่มเพิ่ม To Do
      $btn.on("click", function() {
        const todoText = prompt("Enter a new TO DO:");
        if (todoText && todoText.trim() !== "") {
          addTodo(todoText.trim());
        }
      });
    });
  
