document.body.style.cursor = "url(./icons/scythe.png), auto;";

document.addEventListener("click", (e) => {
  e.preventDefault();
  if(e.target.parentElement){
    e.target.parentElement.removeChild(e.target);
  }
});
