// main.js

// TODO
var number = document.getElementById("volume-number");
var slider = document.getElementById("volume-slider");
var changeImg = document.getElementById("volume-image");
var changeSound = document.getElementById("horn-sound");
var changeImage = document.getElementById("sound-image");
var airHornField = document.getElementById("radio-air-horn");
var carHornField = document.getElementById("radio-car-horn");
var partyHornField = document.getElementById("radio-party-horn");
var buttonAction = document.getElementById("honk-btn");

airHornField.oninput = function() {
    if(airHornField.checked == true){
        changeImage.src = "./assets/media/images/air-horn.svg";
        changeSound.src = "./assets/media/audio/air-horn.mp3";
    }
}

carHornField.oninput = function() {
    if(carHornField.checked == true){
        changeImage.src = "./assets/media/images/car-horn.svg";
        changeSound.src = "./assets/media/audio/car-horn.mp3";
    }
}

partyHornField.oninput = function() {
    if(partyHornField.checked == true){
        changeImage.src = "./assets/media/images/party-horn.svg";
        changeSound.src = "./assets/media/audio/party-horn.mp3";
    }
}


number.oninput = function() {
    slider.value = this.value;
    if (number.value >= 67 && number.value <= 100){
        changeImg.src = "./assets/media/icons/volume-level-3.svg"; 
        buttonAction.disabled = false;
    }
    if (number.value >= 34 && number.value <= 66){
        changeImg.src = "./assets/media/icons/volume-level-2.svg"; 
        buttonAction.disabled = false;
    }
    if (number.value >= 1 && number.value <= 33){
        changeImg.src = "./assets/media/icons/volume-level-1.svg"; 
        buttonAction.disabled = false;
    }
    if (number.value == 0){
        changeImg.src = "./assets/media/icons/volume-level-0.svg"; 
        buttonAction.disabled = true;
    }
}

slider.oninput = function() {
    number.value = this.value;
    if (number.value >= 67 && number.value <= 100){
        changeImg.src = "./assets/media/icons/volume-level-3.svg"; 
        buttonAction.disabled = false;
    }
    if (number.value >= 34 && number.value <= 66){
        changeImg.src = "./assets/media/icons/volume-level-2.svg"; 
        buttonAction.disabled = false;
    }
    if (number.value >= 1 && number.value <= 33){
        changeImg.src = "./assets/media/icons/volume-level-1.svg"; 
        buttonAction.disabled = false;
    }
    if (number.value == 0){
        changeImg.src = "./assets/media/icons/volume-level-0.svg"; 
        buttonAction.disabled = true;
    }
}
