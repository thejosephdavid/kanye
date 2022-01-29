
function soundChecker(letter) {
        
        switch (letter) {
            case "w":
                var audio = new Audio("sounds/snare-1.wav");
                audio.play();
                document.querySelector(".kanye").setAttribute("src", "images/ye1.png");
                break;

            case "a":
                var audio = new Audio("sounds/snare-2.wav");
                audio.play();
                document.querySelector(".kanye").setAttribute("src", "images/ye2.png");
                break;

            case "s":
                var audio = new Audio("sounds/kick-1.wav");
                audio.play();
                document.querySelector(".kanye").setAttribute("src", "images/ye3.png");
                break;

            case "d":
                var audio = new Audio("sounds/legend.mp3");
                audio.play();
                document.querySelector(".kanye").setAttribute("src", "images/ye4.png");
                break;

            case "j":
                var audio = new Audio("sounds/hithat.wav");
                audio.play();
                document.querySelector(".kanye").setAttribute("src", "images/ye5.png");
                break;

            case "k":
                var audio = new Audio("sounds/claps.wav");
                audio.play();
                document.querySelector(".kanye").setAttribute("src", "images/ye6.png");
                break;
                
            case "l":
                var audio = new Audio("sounds/beat-1.wav");
                audio.play();
                document.querySelector(".kanye").setAttribute("src", "images/ye7.png");
                break;
                
            case "i":
                var audio = new Audio("sounds/robot.mp3");
                audio.play();
                document.querySelector(".kanye").setAttribute("src", "images/ye8.png");
                break;

            default:
                break;
        }

        // setTimeout(backToKim, 1000);
} 

//Button Listeners

for ( var i = 0; i < document.querySelectorAll(".drum").length; i++ ) {

    document.querySelectorAll(".drum")[i].addEventListener("mousedown", function () {
        
        var letter = this.innerHTML
        soundChecker(letter);

    });


    document.querySelectorAll(".drum")[i].addEventListener("mouseup", function () {
        
        document.querySelector(".kanye").setAttribute("src", "images/kim1.png");

    });

    //Touch Listeners

    document.querySelectorAll(".drum")[i].addEventListener("touchstart", function (event) {

        // if (event.repeat === false) {
            var letter = this.innerHTML
            soundChecker(letter);
        // }
    });

    document.querySelectorAll(".drum")[i].addEventListener("touchend", function (event) {

        document.querySelector(".kanye").setAttribute("src", "images/kim1.png");

    });
    

}

//Keyboard Listeners

document.addEventListener("keydown", function (event) {

    if (event.repeat === false) {
        soundChecker(event.key);
    }
});

document.addEventListener("keyup", function (event) {

    document.querySelector(".kanye").setAttribute("src", "images/kim1.png");

});

