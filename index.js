for (var i = 0; i < document.querySelectorAll(".drum").length; i++) {

    document.querySelectorAll(".drum")[i].addEventListener("click", function () {

        var buttonInnerHTML = this.innerHTML;

        // for sound generation
        makeSound(buttonInnerHTML);

        // for animation
        buttonAnimation(buttonInnerHTML);
    });

}



// function handleclick() {
//     alert("I got clicked");
// }

document.addEventListener("keypress", function (event) {
    makeSound(event.key);

    // for animation
    buttonAnimation(event.key);
})


function makeSound(key){

    var audio;

    switch (key) {
        case 'w':
            audio = new Audio("sounds/tom-1.mp3");
            audio.play();
            break;


        case 'a':
            audio = new Audio("sounds/tom-2.mp3");
            audio.play();
            break;

        case 's':
            audio = new Audio("sounds/tom-3.mp3");
            audio.play();
            break;

        case 'd':
            audio = new Audio("sounds/tom-4.mp3");
            audio.play();
            break;

        case 'j':
            audio = new Audio("sounds/snare.mp3");
            audio.play();
            break;

        case 'k':
            audio = new Audio("sounds/crash.mp3");
            audio.play();
            break;

        case 'l':
            audio = new Audio("sounds/kick-bass.mp3");
            audio.play();
            break;


        default:
            break;
    }
}

function buttonAnimation(currentKey){

    var activeButton = document.querySelector("." + currentKey);

    activeButton.classList.add("pressed");

    setTimeout(function (){
        activeButton.classList.remove("pressed");
    }, 100);
}