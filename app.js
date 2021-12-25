var timeMinutes = 3;
var timeSeconds = 0;
var main = document.getElementById("main");
var child = main.getElementsByTagName("div");
var switchToRandom = 2;
var switchUnitOfTime = true;
var selectDeSelectMinutes = true;
var selectDeSelectSeconds = true;

// Last task
// Click on minutes or Seconds to change timer
// Different modes, (Jab+Jab(next move))
// Countdown timer

// Also how to access array of id's being created to save over use

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

    timerElement1.innerHTML = timeMinutes; 
    timerElement1.style.cursor = "pointer";
    timerElement1.addEventListener("click", function(){
        if (selectDeSelectMinutes == true){
            timerElement1.style.background = "#999999";
            switchUnitOfTime = false;
            selectDeSelectMinutes = false;
        } else if (selectDeSelectMinutes == false){
            timerElement1.style.background = "white";
            switchUnitOfTime = true;
            selectDeSelectMinutes = true;
        }
    });
    timerElement2.innerHTML = ":";
    timerElement3.innerHTML = timeSeconds.toLocaleString(undefined,{minimumIntegerDigits:2}); 
    timerElement3.style.cursor = "pointer";
    timerElement3.addEventListener("click", function(){
        // if (selectDeSelectSeconds == true){
        //     timerElement3.style.background = "#999999";
        //     selectDeSelectSeconds = false;
        // } else if (selectDeSelectSeconds == false){
        //     timerElement3.style.background = "white";
        //     selectDeSelectSeconds = true;
        // }
    });
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
        if (switchUnitOfTime == true){
            timeSeconds++;
            if (timeSeconds == 60){
                timeMinutes++;
                timeSeconds = 0;
            }
            } else if (switchUnitOfTime == false){
                timeMinutes++;
            }
            timerElement3.innerHTML = timeSeconds.toLocaleString(undefined,{minimumIntegerDigits:2});
            timerElement1.innerHTML = timeMinutes;
        
    });

    timerArrowDown.addEventListener("click", function(){
        if (switchUnitOfTime == true){
            timeSeconds--;
            if(timeSeconds == -1){
                timeMinutes--;
                timeSeconds = 59;
            }   
            } else if (switchUnitOfTime == false){
                timeMinutes--;
            }
            timerElement3.innerHTML = timeSeconds.toLocaleString(undefined,{minimumIntegerDigits:2});
            timerElement1.innerHTML = timeMinutes;
        
    });

    button.addEventListener("click", button => {
    document.getElementById("playButton").remove();
    document.getElementById("timeSelection").remove();

    function createJab(){
        var flashCard = document.createElement("div");
        flashCard.setAttribute("class", "flashCard1");
        var flashCardText = document.createElement('p');
        flashCardText.style.fontSize = "5rem";
        flashCardText.innerHTML = "Jab";
        flashCard.appendChild(flashCardText);
        main.appendChild(flashCard);
    }

    function createCross(){
        var flashCard = document.createElement("div");
        flashCard.setAttribute("class", "flashCard1");
        var flashCardText = document.createElement('p');
        flashCardText.style.fontSize = "3rem";
        flashCardText.innerHTML = "Cross";
        flashCard.appendChild(flashCardText);
        main.appendChild(flashCard);

    }

    function createHook(){
        var flashCard = document.createElement("div");
        flashCard.setAttribute("class", "flashCard1");
        var flashCardText = document.createElement('p');
        flashCardText.style.fontSize = "3rem";
        flashCardText.innerHTML = "Hook";
        flashCard.appendChild(flashCardText);
        main.appendChild(flashCard);

    }

    function createUpperCut(){
        var flashCard = document.createElement("div");
        flashCard.setAttribute("class", "flashCard1");
        var flashCardText = document.createElement('p');
        flashCardText.style.fontSize = "3rem";
        flashCardText.innerHTML = "UpperCut";
        flashCard.appendChild(flashCardText);
        main.appendChild(flashCard);
    }
    
    function reloadProgram(){
        location.reload();
    }

    function randomFunc(){
        if (time == 0){
            clearInterval(flashCardPresent);
            clearInterval(countDownTimer);
            
            console.log("Times up");
            setTimeout(reloadProgram, 3000);
        } 
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

    function jabJabrandomFunc(){
        if (time == 0){
            clearInterval(flashCardPresent);
            clearInterval(countDownTimer);
            
            console.log("Times up");
            setTimeout(reloadProgram, 3000);
        } 
        
        if (switchToRandom == 0){
            var random = Math.floor(Math.random() * 3)+1;
            switchToRandom = 2;
            switch(random){
                case 1:
                    createUpperCut();
                    break;
                case 2:
                    createCross();
                    break;
                case 3:
                    createHook();
                    break;
            } 
        } else {
            switchToRandom--;
            createJab();
        }
    }

    let time = (timeMinutes * 60) + timeSeconds;

    function countDownTimer(){
        var minutes = Math.floor(time/60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        console.log(`${minutes}:${seconds}`);
        time--;

    }

    var flashCardPresent = setInterval(randomFunc, 2000); 
    // var flashCardJabJab = setInterval(jabJabRandomFunc, 2000);
    var countDownTimer = setInterval(countDownTimer, 1000);


    })
}

setTimeout(start, 1500);