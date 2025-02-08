let toggler=document.getElementById("switch")
toggler.addEventListener("click", () => {
    if(toggler.checked===true){
        document.body.style.backgroundColor='black';
        document.body.style.color="transparent";
        document.querySelector(".text h1").style.webkitTextStroke = "2px white";
        document.querySelector(".text p").style.color= "white";
    }
    else{
        document.body.style.backgroundColor="white";
        document.body.style.color="transparent";
        document.querySelector(".text h1").style.webkitTextStroke = "2px black";
        document.querySelector(".text p").style.color = " black";
    }
});