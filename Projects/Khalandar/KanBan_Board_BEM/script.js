const addButton = document.querySelector(".btn--add");
const modalCont = document.querySelector(".modal-cont");

let addTaskFlag = false;

addButton.addEventListener("click", () => {
  addTaskFlag = !addTaskFlag;
  if (addTaskFlag) {
    modalCont.style.display = "flex";
  } else {
    modalCont.style.display = "none";
  }
});
