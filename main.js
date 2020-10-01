document.getElementById("menu-btn").addEventListener("click", function(){
    document.querySelector("#menu-btn .top").style.transform = "rotate(135deg) translateY(-5px)";

    document.querySelector("#menu-btn .bottom").style.transform = "rotate(-135deg) translateY(5px)";

    document.querySelector("#nav").style.left = "0";
});