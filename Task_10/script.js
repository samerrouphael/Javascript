let openbutton = document.getElementById("openBtn");
let modal = document.getElementById("modal");
openbutton.addEventListener("click", function () {
    modal.style.display = "block";
})




let closebutton = document.getElementById("closeBtn");
closebutton.addEventListener("click", function () {
    modal.style.display = "none";
})
modal.addEventListener("click", function (){
    modal.style.display = "none";})