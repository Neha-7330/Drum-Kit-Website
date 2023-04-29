/*
document.querySelector("button").addEventListener("click", handleClick);

function handleClick(){
    alert("I got clicked!");
}

/* Above code can be written as an Anonymous function
an anonymous function is the function with no name. 

document.querySelectorAll("button").addEventListener("click", function (){
    alert("I got clicked!");
});
*/

const audioSrcArray = ['crash.mp3', 'kick-bass.mp3', 'snare.mp3',  'tom-1.mp3', 'tom-2.mp3', 'tom-3.mp3', 'tom-4.mp3']

const drumArray = document.querySelectorAll(".drum");
const numOfDrum = drumArray.length;
for(let i = 0 ; i < numOfDrum ; i++){  
    // FOR MOUSE CLICK
    drumArray[i].addEventListener("click", function (){
        let audio= new Audio(`sounds/${audioSrcArray[i]}`);
        audio.play();

        buttonAnimation(drumArray[i].innerHTML);
    });

};

// FOR KEYBOARD EVENT:-

document.addEventListener("keydown", function (event) {
    makeSound (event.key);
});

function makeSound(key){
    buttonAnimation(key)
    let audio;

    switch (key) {
        case "w":
            audio = new Audio(`sounds/${audioSrcArray[0]}`);
            audio.play();
            break;

        case "a":
            audio = new Audio(`sounds/${audioSrcArray[1]}`);
            audio.play();
            break;

        case "s":
            audio = new Audio(`sounds/${audioSrcArray[2]}`);
            audio.play();
            break;

        case "d":
            audio = new Audio(`sounds/${audioSrcArray[3]}`);
            audio.play();
            break;

        case "j":
            audio = new Audio(`sounds/${audioSrcArray[4]}`);
            audio.play();
            break;

        case "k":
            audio = new Audio(`sounds/${audioSrcArray[5]}`);
            audio.play();
            break;

        case "l":
            audio = new Audio(`sounds/${audioSrcArray[6]}`);
            audio.play();
            break;
    }
};

function buttonAnimation(currentKey){
    let activeButton = document.querySelector(`.${currentKey}`);
    activeButton.classList.add('pressed');
    setTimeout(function(){
        activeButton.classList.remove("pressed");
    }, 100);
}
