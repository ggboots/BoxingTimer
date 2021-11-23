var appStart = false;
 //generates random number
//Math.floor -> returns an integer, not a floating number

var button = document.createElement("button");
button.setAttribute("id", "playButton");
var buttonContent = document.createTextNode("Reveal Strike");
button.appendChild(buttonContent);
document.body.appendChild(button);

var timer = document.createElement("div");
timer.setAttribute("id", "timeSelection");
document.body.appendChild(timer);
        
button.addEventListener("click", button => {
    document.getElementById("playButton").remove();
    document.getElementById("timeSelection").remove();

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
            flashCard.remove();
    }

    function randomFunc(){
        var random = Math.floor(Math.random() * 4)+1;
        switch(random){
            case 1:
                createJab();
                break;
            case 2:
                createCross();
                break;
            case 3:
                createHook();
                break;
            case 4:
                createUpperCut();
                break;
        }
    }

    function timer{
        
    }

    setInterval(randomFunc, 1500); //1.5 seconds till next move


    const minute = 1000*60;
    const time = new Date();
    let output = Math.round(time.getTime() / minute);

    // Date.Now()
    console.log(output);

    
})


var fightingStyles = {
    1 : "Jab",
    2 : "Hook",
    3 : "UpperCut",
    4 : "Cross"
};