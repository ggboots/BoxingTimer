var appStart = false;
var random = Math.floor(Math.random() * 4)+1; //generates random number
//Math.floor -> returns an integer, not a floating number
console.log(random);

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
        document.body.appendChild(flashCard);
    }

    function createDiv2(){
        var flashCard = document.createElement("div");
        flashCard.setAttribute("id", "flashCard1");
        var flashCardText = document.createTextNode("Cross");
        flashCard.appendChild(flashCardText);
        document.body.appendChild(flashCard);
    }

    function createDiv3(){
        var flashCard = document.createElement("div");
        flashCard.setAttribute("id", "flashCard1");
        var flashCardText = document.createTextNode("Hook");
        flashCard.appendChild(flashCardText);
        document.body.appendChild(flashCard);
    }

    function createDiv4(){
        var flashCard = document.createElement("div");
        flashCard.setAttribute("id", "flashCard1");
        var flashCardText = document.createTextNode("UpperCut");
        flashCard.appendChild(flashCardText);
        document.body.appendChild(flashCard);
    }

    setTimeout(renewDiv, 4000);

    function renewDiv(){
        flashCard1.remove();
    }

    setTimeout(createDiv2, 7000);

})
