// =========================
// UNIQUE EDUZONE SCRIPT
// =========================

// Welcome Message
window.addEventListener("load", function () {
    console.log("Welcome to Unique EduZone");
});

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if(target){
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Scroll To Top Button
const topBtn = document.createElement("button");

topBtn.innerHTML = "⬆";

topBtn.id = "topBtn";

document.body.appendChild(topBtn);

topBtn.style.position="fixed";
topBtn.style.bottom="30px";
topBtn.style.right="30px";
topBtn.style.display="none";
topBtn.style.padding="15px";
topBtn.style.background="gold";
topBtn.style.border="none";
topBtn.style.cursor="pointer";
topBtn.style.borderRadius="50%";

window.addEventListener("scroll",function(){

if(document.documentElement.scrollTop>300){

topBtn.style.display="block";

}else{

topBtn.style.display="none";

}

});

topBtn.onclick=function(){

window.scrollTo({

top:0,

behavior:"smooth"

});

}