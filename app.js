var appStart = false;


var button = document.createElement("button");
button.setAttribute("id", "timerButton");
var buttonContent = document.createTextNode("Reveal Strike");
button.appendChild(buttonContent);
document.body.appendChild(button);
        


button.addEventListener("click", button => {
    document.getElementById("timerButton").remove();

    setTimeout(createDiv, 1000);

    function createDiv(){
        
        var flashCard = document.createElement("div");
        flashCard.setAttribute("id", "flashCard1");
        var flashCardText = document.createTextNode("Jab");
        flashCard.appendChild(flashCardText);
        //document.getElementById('flashCard1').style.backgroundColor = "#e2e2e2";
        document.body.appendChild(flashCard);
    }

    setTimeout(renewDiv, 4000);

    function renewDiv(){
        flashCard1.remove();
    }
})
