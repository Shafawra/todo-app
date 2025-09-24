const input = document.getElementById("inputTask");
const btnAdd = document.getElementById("addBtn");
const todoList = document.getElementById("todoList");
const resetBtn = document.getElementById("resetBtn");

// bikin function tuk btnAdd
function todo() {

    // ambil nilai input
    let task = input.value.trim();

    if(task === ""){
        alert("Tugas belum diisi!");
        return;
    }

    // elemen li masukin nilai dari input
    const li = document.createElement("li");
    li.className = "todoLi justify-between my-2 border p-3 rounded-[1000vh] bg-[#333] hover:bg-[#444] relative text-xl pr-5 pl-5"
    li.innerHTML = `
        <div class="flex gap-5">
            <input type="checkbox">
            <span class="todoText">${task}</span>
        </div>
        <button class ="btnHapus absolute right-0 top-0 p-3 border rounded-[1000vh] bg-rose-500 hover:cursor-pointer hover:brightness-125 px-5">hapus</button>
    `;

    // append li ke ul
    todoList.appendChild(li);

    // reset input
    input.value = "";

    // tombol hapus di tiap li
    let btnHapus = li.querySelector(".btnHapus");
    btnHapus.addEventListener("click", () => {
        li.remove();
    });

    // kalo li di check bakalan kecoret
    let checkbox = li.querySelector("input[type='checkbox']");
    checkbox.addEventListener("change", () => {
        li.querySelector(".todoText").classList.toggle("line-through")
    })

}

// pake fungsi di btnAdd
btnAdd.addEventListener("click", todo);

input.addEventListener("keyup", (e) => {
    if(e.key === "Enter"){
        todo();
    }
});

resetBtn.addEventListener("click", () => {
    todoList.remove();
})