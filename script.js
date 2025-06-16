//your JS code here. If required.
const btnElem = document.querySelector("#openModal");
const modalContainer = document.getElementById("modal");

btnElem.addEventListener("click",(e)=>{
	if(modalContainer.classList.contains("hide")){
		   document.body.style.backgroundColor = 'rgba(0, 0, 0, 0.2)'
		modalContainer.style.backgroundColor = "white";
		modalContainer.classList.remove("hide");
	}else{
		   document.body.style.backgroundColor = 'transparent'
		modalContainer.classList.add("hide");
	}
	
})