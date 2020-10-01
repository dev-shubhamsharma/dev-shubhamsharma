document.getElementById("menu-btn").addEventListener("click",function() {
    if(document.querySelector("#menu-check").checked == true) {
        document.querySelector("#menu-btn .top").style.transform = "";
        document.querySelector("#menu-btn .bottom").style.transform = "";
        document.querySelector("#nav").style.left = "100%";
    }
    else {
        document.querySelector("#menu-btn .top").style.transform = "rotate(135deg) translateY(-5px)";
        document.querySelector("#menu-btn .bottom").style.transform = "rotate(-135deg) translateY(5px)";
        document.querySelector("#nav").style.left = "0";
    }
});