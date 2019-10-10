var number1 = document.querySelector("#randNum");
var number2 = document.querySelector("#userScore");
var winCount = document.querySelector("#wins");
var lossCount = document.querySelector("#losses");
var resetBtn = document.querySelector("#reset");

var wins = 0;
var losses = 0;
var compNum = "Click Here to Begin!";
var userNum = 0;
var gemIndex = ["1","2","3","4","5","6","7","8","9","10","11","12"];

number1.innerText = compNum;
number2.innerText = userNum;
winCount.innerText = ("Wins: " + wins);
lossCount.innerText = ("Losses: " + losses);

if (number1.innerText === compNum){
    $("#randNum").on("click", function(){
        number1.innerText = Math.floor(Math.random()*(102)+19);
        var blueValue = gemIndex[Math.floor(Math.random()*(12))];
        var greenValue = gemIndex[Math.floor(Math.random()*(12))];
        var pinkValue = gemIndex[Math.floor(Math.random()*(12))];
        var purpValue = gemIndex[Math.floor(Math.random()*(12))];

        var resetG = function(){
            number1.innerText = compNum;
            number2.innerText = 0;
            blueValue = 0;
            greenValue = 0;
            pinkValue = 0;
            purpValue = 0;
            blueNum.innerText ="";
            greenNum.innerText ="";
            pinkNum.innerText ="";
            purpNum.innerText ="";
            winCount.innerText = ("Wins: " + wins);
            lossCount.innerText = ("Losses: " + losses);
        };

        if($("#bb").one("click", function(){
            blueNum.innerText = blueValue;
        
            if($("#bb").on("click", function(){
                number2.innerText = (parseFloat(number2.innerText) + parseFloat(blueValue));
            
                if (parseFloat(number2.innerText) === parseFloat(number1.innerText)){
                    wins++;
                    resetG();
                };
            
                if (parseFloat(number2.innerText) > parseFloat(number1.innerText)){
                    losses++;
                    resetG();
                };
            }));
        }));

        if($("#bg").one("click", function(){
            greenNum.innerText = greenValue;
        
            if($("#bg").on("click", function(){
                number2.innerText = (parseFloat(number2.innerText) + parseFloat(greenValue));
            
                if (parseFloat(number2.innerText) === parseFloat(number1.innerText)){
                    wins++;
                    resetG();
                };
        
                if (parseFloat(number2.innerText) > parseFloat(number1.innerText)){
                    losses++;
                    resetG();
                };
            }));
        }));

        if($("#bpi").one("click", function(){
            pinkNum.innerText = pinkValue;
        
            if($("#bpi").on("click", function(){
                number2.innerText = (parseFloat(number2.innerText) + parseFloat(pinkValue));
                if (parseFloat(number2.innerText) === parseFloat(number1.innerText)){
                    wins++;
                    resetG();
                };
        
                if (parseFloat(number2.innerText) > parseFloat(number1.innerText)){
                    losses++;
                    resetG();
                };        
            }));
        }));

        if($("#bpu").one("click", function(){
            purpNum.innerText = purpValue;
        
            if($("#bpu").on("click", function(){
                number2.innerText = (parseFloat(number2.innerText) + parseFloat(purpValue));
                if (parseFloat(number2.innerText) === parseFloat(number1.innerText)){
                    wins++;
                    resetG();
                };
        
                if (parseFloat(number2.innerText) > parseFloat(number1.innerText)){
                    losses++;
                    resetG();
                };        
            }));
        }));
    });
};


