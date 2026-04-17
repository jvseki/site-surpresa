const mensagem = "Meu amor, este site foi dedicado a você, a mulher mais incrível do mundo que eu tive o privilégio de estar ao lado e, principalmente, poder compartilhar minha vida maluca e tirar alguns risos. Nossa relação vale mais que mil beijos e abraços, pois estar ao seu lado significa querer crescer como pessoa e sempre torcer pelas suas conquistas. Como eu já havia falado antes, é um crime falarem que são apenas 7 maravilhas do mundo, sendo que todo dia, nem que seja por 5 minutos, eu consigo conversar e rir com a oitava maravilha do mundo! Eu te amo muito, meu amor! <3";

const startOverlay = document.getElementById("start-overlay");
const startBtn = document.getElementById("start-btn");
const textContainer = document.getElementById("text-container");
const videoContainer = document.getElementById("video-container");
const finalMessage = document.getElementById("final-message");
const video = document.getElementById("meu-video");
const audio = document.getElementById("musica-fundo");

let i = 0;
const speed = 60; 


startBtn.addEventListener("click", () => {
    startOverlay.style.display = "none";
    textContainer.style.display = "block";
    
    
    audio.currentTime = 64; 
    audio.play();

    
    typeWriter();
});

function typeWriter() {
    if (i < mensagem.length) {
        textContainer.innerHTML += mensagem.charAt(i);
        i++;
        setTimeout(typeWriter, speed);
    } else {
        
        setTimeout(() => {
            textContainer.style.display = "none";
            videoContainer.style.display = "block";
            
          
            audio.pause();
            video.play();
        }, 7000); 
    }
}


video.addEventListener("ended", () => {
    videoContainer.style.display = "none";
    finalMessage.style.display = "block";
    
    
    audio.play(); 
});