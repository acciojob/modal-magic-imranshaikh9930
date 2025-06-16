//your JS code here. If required.
const btnElem = document.querySelector(".btn");
const modalContainer = document.getElementById("modal");

btnElem.addEventListener("click",(e)=>{
	if(modalContainer.classList.contains("hide")){
		modalContainer.classList.remove("hide");
	}else{
		
		modalContainer.classList.add("hide");
	}
	
})