const draggableList = document.getElementById("draggableList");
const rightbox = document.getElementById("right");
const leftbox = document.getElementById("left");
const draggable = document.querySelectorAll(".draggable li");

const itemlist = [
  "draggableItem1",
  "draggableItem2",
  "draggableItem3",
  "draggableItem4",
  "draggableItem5",
];

const listarr = [];
let startindex;

createlist();

function createlist() {
  [...itemlist].forEach((item, index) => {
    const listitem = document.createElement("li");
    listitem.setAttribute("data-index", index);

    listitem.innerHTML = `
        <div class="draggable" draggable="true">${item}</div>
    `;
    listarr.push(listitem);
    // console.log(listitem);
    draggableList.appendChild(listitem);
  });

  addEventListener();
}

function dragstart() {
  startindex = this.closest("li").getAttribute("data-index");
}

function dragover(e) {
  e.preventDefault();
}

function dragdrop() {
  const endindex = +this.getAttribute("data-index");
  swapindex(startindex, endindex);
}

function swapindex(from, to) {
  const firstitem = listarr[from].querySelector(".draggable");
  const seconditem = listarr[to].querySelector(".draggable");

  listarr[from].appendChild(seconditem);
  listarr[to].appendChild(firstitem);
}

function dragenter() {}

function dragleave() {}

function addEventListener() {
  const draggable = document.querySelectorAll(".draggable");
  //   console.log(draggable);
  const draggablelistLi = document.querySelectorAll(".draggableList li");
  //   console.log(draggablelistLi);

  draggable.forEach((item) => {
    item.addEventListener("dragstart", dragstart);
  });

  draggablelistLi.forEach((li) => {
    li.addEventListener("dragover", dragover);
    li.addEventListener("drop", dragdrop);
    li.addEventListener("dragenter", dragenter);
    li.addEventListener("dragleave", dragleave);
  });
}

const draggablelistLi = document.querySelectorAll(".draggableList li");
// console.log(draggablelistLi);

for (listvalue of draggablelistLi) {
  listvalue.addEventListener("dragstart", (e) => {
    let itemselect = e.target;

    rightbox.addEventListener("dragover", (e) => {
      e.preventDefault();
    });

    rightbox.addEventListener("drop", (e) => {
      rightbox.appendChild(itemselect);
    });
  });
}
