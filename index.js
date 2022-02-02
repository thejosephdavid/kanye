
function soundChecker(letter) {
        
        switch (letter) {
            case "w":
                var snare1 = new Audio("sounds/snare-1.wav");
                snare1.play();
                document.querySelector(".kanye").setAttribute("src", "images/ye1.png");
                break;

            case "a":
                var snare2 = new Audio("sounds/snare-2.wav");
                snare2.play();
                document.querySelector(".kanye").setAttribute("src", "images/ye2.png");
                break;

            case "s":
                var kick1 = new Audio("sounds/kick-1.wav");
                kick1.play();
                document.querySelector(".kanye").setAttribute("src", "images/ye3.png");
                break;

            case "d":
                var legend = new Audio("sounds/legend.mp3");
                legend.play();
                document.querySelector(".kanye").setAttribute("src", "images/ye4.png");
                break;

            case "j":
                var hithat = new Audio("sounds/hithat.wav");
                hithat.play();
                document.querySelector(".kanye").setAttribute("src", "images/ye5.png");
                break;

            case "k":
                var claps = new Audio("sounds/claps.wav");
                claps.play();
                document.querySelector(".kanye").setAttribute("src", "images/ye6.png");
                break;
        
            case "l":
                var beat1 = new Audio("sounds/beat-1.wav");
                beat1.play();
                document.querySelector(".kanye").setAttribute("src", "images/ye7.png");
                break;
                
            case "i":
                var robot = new Audio("sounds/robot.mp3");
                robot.play();
                document.querySelector(".kanye").setAttribute("src", "images/ye8.png");
                break;

            default:
                break;
        }

} 

//Button Listeners

for ( var i = 0; i < document.querySelectorAll(".drum").length; i++ ) {

    if (window.matchMedia('(pointer:coarse)').matches === false) {

        document.querySelectorAll(".drum")[i].addEventListener("mousedown", function () {
            
            var letter = this.innerHTML
            soundChecker(letter);

        });


        document.querySelectorAll(".drum")[i].addEventListener("mouseup", function () {
            
            document.querySelector(".kanye").setAttribute("src", "images/kim1.png");

        });

    } else {
    
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


}

//Keyboard Listeners

document.addEventListener("keydown", function (event) {

    if (event.repeat === false) {
        soundChecker(event.key);
        document.querySelector("."+event.key).classList.add("btn-key-hover");
    }
});

document.addEventListener("keyup", function (event) {

    document.querySelector(".kanye").setAttribute("src", "images/kim1.png");
    document.querySelector("."+event.key).classList.remove("btn-key-hover");

});