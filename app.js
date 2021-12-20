var appStart = false;
var timeMinutes = 5;
var timeSeconds = 30;

setTimeout(start, 1500);

function start(){
    // creates front page element
    var button = document.createElement("button");
    button.setAttribute("id", "playButton");
    var buttonContent = document.createTextNode("Start");
    button.appendChild(buttonContent);
    document.getElementById("main").appendChild(button);
    var timer = document.createElement("div");
    timer.setAttribute("id", "timeSelection");
    document.getElementById("main").appendChild(timer);
    var timerElement1 = document.createElement("div");
    var timerElement2 = document.createElement("div");
    var timerElement3 = document.createElement("div");
    var timerElement4 = document.createElement("div");
    var timerElement5 = document.createElement("button");
    var timerElement6 = document.createElement("button");
    timerElement1.setAttribute("class", "timerElement");
    timerElement2.setAttribute("class", "timerElement");
    timerElement3.setAttribute("class", "timerElement");
    timerElement4.setAttribute("id", "timerButtons");
    timerElement5.setAttribute("id", "timerButtonSelectUp");
    timerElement6.setAttribute("id", "timerButtonSelectDown");
    timerElement1.innerHTML = "5"; 
    timerElement2.innerHTML = ":";
    timerElement3.innerHTML = "00"; 
    timerElement5.innerHTML = "^";
    timerElement6.innerHTML = "^";
    document.getElementById("timeSelection").appendChild(timerElement1);
    document.getElementById("timeSelection").appendChild(timerElement2);
    document.getElementById("timeSelection").appendChild(timerElement3);
    document.getElementById("timeSelection").appendChild(timerElement4);
    document.getElementById("timerButtons").appendChild(timerElement5);
    document.getElementById("timerButtons").appendChild(timerElement6);
   
    // Dynamically access created element
    var timerArrowUp = document.getElementById("timerButtonSelectUp");
    var timerArrowDown = document.getElementById("timerButtonSelectDown");

    timerArrowUp.addEventListener("click", function(){
        timeSeconds++;
        if (timeSeconds == 60){
            timeMinutes++;
            timeSeconds = 0;
        }
        timerElement3.innerHTML = timeSeconds;
        timerElement1.innerHTML = timeMinutes;
    });

    timerArrowDown.addEventListener("click", function(){
        timeSeconds--;
        if(timeSeconds == -1){
            timeMinutes--;
            timeSeconds = 59;
        }
        timerElement3.innerHTML = timeSeconds;
        timerElement1.innerHTML = timeMinutes;
    });



    // .createDocumentFragement() -- Place child element on arbitrary node-like parent
    // 5 five elements needed, 1 Div for minute, 1 semi colon, 2 Div for seconds, and button selection which changes time
    // Alternatively, 3 elements, with button up and down from time

    button.addEventListener("click", button => {
    document.getElementById("playButton").remove();
    document.getElementById("timeSelection").remove();

    function createJab(){
        var flashCard = document.createElement("div");
        flashCard.setAttribute("id", "flashCard1");
        var flashCardText = document.createElement('p');
        flashCardText.style.fontSize = "5rem";
        flashCardText.innerHTML = "Jab";
        flashCard.appendChild(flashCardText);
        document.body.appendChild(flashCard);
    }

    function createCross(){
        var flashCard = document.createElement("div");
        flashCard.setAttribute("id", "flashCard1");
        var flashCardText = document.createElement('p');
        flashCardText.style.fontSize = "3rem";
        flashCardText.innerHTML = "Cross";
        flashCard.appendChild(flashCardText);
        document.body.appendChild(flashCard);
    }

    function createHook(){
        var flashCard = document.createElement("div");
        flashCard.setAttribute("id", "flashCard1");
        var flashCardText = document.createElement('p');
        flashCardText.style.fontSize = "3rem";
        flashCardText.innerHTML = "Hook";
        flashCard.appendChild(flashCardText);
        document.body.appendChild(flashCard);
    }

    function createUpperCut(){
        var flashCard = document.createElement("div");
        flashCard.setAttribute("id", "flashCard1");
        var flashCardText = document.createElement('p');
        flashCardText.style.fontSize = "3rem";
        flashCardText.innerHTML = "UpperCut";
        flashCard.appendChild(flashCardText);
        document.body.appendChild(flashCard);
    }
    function renewDiv(){
            flashCard1.remove();    
    }

    function randomFunc(){
        countDownTimer();
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

    

    startingTimeMinutes = timeMinutes;
    let time = startingTimeMinutes * 60;
    var timeM;

    function countDownTimer(){

        timeM = Math.floor(time/60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        console.log(`${timeM}:${seconds}`);
        time--;
    }

    if (timeM > 4){
        setInterval(randomFunc, 2000); //1.5 seconds till next move
        setInterval(countDownTimer, 1000);
    } else if (timeM = 0){
        clearInterval;
        start;
    }
    

    })
}




// Test code
var fightingStyles = {
    1 : "Jab",
    2 : "Hook",
    3 : "UpperCut",
    4 : "Cross"
};

function currentTime(){
    var startTimeMinute = 5;
    var startTimeSecond = 00;
    console.log(startTimeMinute + " : " + startTimeSecond);
}
