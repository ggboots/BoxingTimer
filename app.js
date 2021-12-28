var timeMinutes = 3;
var timeSeconds = 0;
var main = document.getElementById("main");
var child = main.getElementsByTagName("div");
var switchStyle = 1;
var switchToRandom = 1;
var switchUnitOfTime = true;
var selectDeSelectMinutes = true;
var selectDeSelectSeconds = true;
var timesUp1;
var timesUp2;

// improvements - how to access arrays of ID's being created to stop multiple being created

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

    var modeSwitch = document.createElement("button");
    modeSwitch.setAttribute("id", "modeSwitch");
    var boxingIcon = document.createElement("img");
    boxingIcon.src = '/img/boxing.png'; 
    modeSwitch.appendChild(boxingIcon)
    document.getElementById("main").appendChild(modeSwitch);

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

    modeSwitch.addEventListener("click", function(){
        if (switchStyle == 2){
            modeSwitch.style.background = "";
            boxingIcon.src = '/img/boxing.png'; 
            switchStyle = 1;
        } else if (switchStyle == 1){
            modeSwitch.style.background = "green";
            boxingIcon.src = '/img/jabPose.png'; 
            switchStyle = 2;
        }
    })

    button.addEventListener("click", button => {
    document.getElementById("playButton").remove();
    document.getElementById("timeSelection").remove();
    document.getElementById("modeSwitch").remove();

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
            clearInterval(timesUp1);
            clearInterval(timesUp2);
            
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

    function jabJabRandomFunc(){
        if (time == 0){
            clearInterval(timesUp1);
            clearInterval(timesUp2);
            
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

    // function startTimer(){
    //     var loadingScreen = document.createElement("div");
    //     loadingScreen.setAttribute("id", "loadingImage");
    //     var loadingImage = document.createElement("img");
    //     loadingImage.src = "img/boxingIcon.png";
    //     loadingScreen.appendChild(loadingImage);
    //     document.getElementById("main").appendChild(loadingScreen);
    // }

    let time = (timeMinutes * 60) + timeSeconds;

    var downTimer = function countDownTimer(){
        var minutes = Math.floor(time/60);
        let seconds = time % 60;
        seconds = seconds < 10 ? '0' + seconds : seconds;
        console.log(`${minutes}:${seconds}`);
        time--;
    }

    function countInTimer(){
        setTimeout(firstNumber,0001);
        setTimeout(secondNumber,1000);
        setTimeout(thirdNumber,2000);

        function firstNumber(){
            var number1 = document.createElement("div");
            number1.setAttribute("id", "firstNumber");
            var firstNumberText = document.createElement('p');
            firstNumberText.style.fontSize = "5rem";
            firstNumberText.style.color = "#fff";
            firstNumberText.style.display = "flex";
            firstNumberText.style.alignItems = "center";
            firstNumberText.style.justifyContent = "center";
            firstNumberText.innerHTML = "1";
            number1.appendChild(firstNumberText);
            main.appendChild(number1);
        }
        function secondNumber(){
            document.getElementById("firstNumber").remove();
            var secondNumber = document.createElement("div");
            secondNumber.setAttribute("id", "secondNumber");
            var secondNumberText = document.createElement('p');
            secondNumberText.style.fontSize = "7rem";
            secondNumberText.style.color = "#fff";
            secondNumberText.style.display = "flex";
            secondNumberText.style.alignItems = "center";
            secondNumberText.style.justifyContent = "center";
            secondNumberText.innerHTML = "2";
            secondNumber.appendChild(secondNumberText);
            main.appendChild(secondNumber);
        }
        function thirdNumber(){
            document.getElementById("secondNumber").remove();
            var thirdNumber = document.createElement("div");
            thirdNumber.setAttribute("id", "thirdNumber");
            var thirdNumberText = document.createElement('p');
            thirdNumberText.style.fontSize = "10rem";
            thirdNumberText.style.color = "#fff";
            thirdNumberText.style.display = "flex";
            thirdNumberText.style.alignItems = "center";
            thirdNumberText.style.justifyContent = "center";
            thirdNumberText.innerHTML = "3";
            thirdNumber.appendChild(thirdNumberText);
            main.appendChild(thirdNumber);
        }
    }

    setTimeout(countInTimer, 0000);
    
    function mainApp(){
        document.getElementById("thirdNumber").remove();
        if(switchStyle == 1){
            timesUp1 = setInterval(randomFunc, 1500);
            timesUp2 = setInterval(downTimer, 1000);
        }   else if (switchStyle == 2){
            timesUp1 = setInterval(jabJabRandomFunc, 1500);
            timesUp2 = setInterval(downTimer, 1000);
        }
    }

   
    setTimeout(mainApp,3000);
    // var flashCardPresent = setInterval(randomFunc, 2000); 
    // var flashCardJabJab = setInterval(jabJabRandomFunc, 2000);
    // var countDownTimer = setInterval(countDownTimer, 1000);


    })
}

setTimeout(start, 1500);