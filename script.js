//your JS code here. If required.
const btnElem = document.querySelector(".btn");
const modalContainer = document.querySelector(".modal");

btnElem.addEventListener("click", (e) => {
    if (modalContainer.classList.contains("hide")) {
      document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
      modalContainer.style.backgroundColor = "white";
        modalContainer.classList.remove("hide");
    } else {
      document.body.style.backgroundColor = "transparent"
        modalContainer.classList.add("hide");
    }

})

document.querySelector(".close-modal").addEventListener("click",()=>{

  document.body.style.backgroundColor = "transparent"
  modalContainer.classList.add("hide");
})