var appStart = false;
 //generates random number
//Math.floor -> returns an integer, not a floating number


var button = document.createElement("button");
button.setAttribute("id", "timerButton");
var buttonContent = document.createTextNode("Reveal Strike");
button.appendChild(buttonContent);
document.body.appendChild(button);
        

button.addEventListener("click", button => {
    document.getElementById("timerButton").remove();

    setTimeout(createJab, 1000);

    function createJab(){
        var flashCard = document.createElement("div");
        flashCard.setAttribute("id", "flashCard1");
        var flashCardText = document.createTextNode("Jab");
        flashCard.appendChild(flashCardText);
        document.body.appendChild(flashCard);
    }

    function createCross(){
        var flashCard = document.createElement("div");
        flashCard.setAttribute("id", "flashCard1");
        var flashCardText = document.createTextNode("Cross");
        flashCard.appendChild(flashCardText);
        document.body.appendChild(flashCard);
    }

    function createHook(){
        var flashCard = document.createElement("div");
        flashCard.setAttribute("id", "flashCard1");
        var flashCardText = document.createTextNode("Hook");
        flashCard.appendChild(flashCardText);
        document.body.appendChild(flashCard);
    }

    function createUpperCut(){
        var flashCard = document.createElement("div");
        flashCard.setAttribute("id", "flashCard1");
        var flashCardText = document.createTextNode("UpperCut");
        flashCard.appendChild(flashCardText);
        document.body.appendChild(flashCard);
    }
    function renewDiv(){
        flashCard1.remove();
    }

    function randomFunc(){
        var random = Math.floor(Math.random() * 4)+1;
        switch(random){
            case "1":
                console.log("Jab");
                break;
            case "2":
                console.log("Cross");
                break;
            case "3":
                console.log("Hook");
                break;
            case "4":
                console.log("upperCut");
                break;
        }
    }

    
    setTimeout(renewDiv, 4000);

    setTimeout(createCross, 6000);
    setTimeout(renewDiv, 8000);
    setTimeout(createHook, 10000);
    setTimeout(renewDiv, 12000);
    setTimeout(createUpperCut, 14000);
    setTimeout(renewDiv, 16000);

    randomFunc();



})
