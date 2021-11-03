var appStart = false;


var button = document.createElement("button");
button.setAttribute("id", "timerButton");
var buttonContent = document.createTextNode("Start Timer");
button.appendChild(buttonContent);
document.body.appendChild(button);
        


button.addEventListener("click", button => {
    document.getElementById("timerButton").remove();

    setTimeout(createDiv, 1000);

    function createDiv(){
        
        var flashCard = document.createElement("div");
        flashCard.setAttribute("id", "flashCard1");
        // document.getElementById('flashCard1').style.height ='100px';
        document.body.appendChild(flashCard);
    }
})
