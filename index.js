const input = document.getElementById("inputTask");
const btnAdd = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");

function todo() {
    let task = input.value.trim();

    if(task === ""){
        alert("Tugas belum diisi!");
        return;
    }

    const li = document.createElement("li");
    li.className = "todoLi flex justify-between my-2 border p-3 rounded-[1000vh] bg-[#333] hover:bg-[#444] relative text-xl pr-5 pl-5"
    li.innerHTML = `
        <input type="checkbox">
        <span class="todoText">${task}</span>
        <button class ="btnHapus">hapus</button>
    `;

    todoList.appendChild(li);

    input.value = "";

    let btnHapus = li.querySelector(".btnHapus");
    btnHapus.addEventListener("click", () => {
        li.remove();
    });

    let checkbox = li.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", () => {
        li.querySelector(".todoText").classList.toggle("line-through")
    })

}

btnAdd.addEventListener("click", todo);

input.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        todo();
    }
});