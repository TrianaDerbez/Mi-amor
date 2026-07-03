const abrirLibro = document.getElementById("abrirLibro");

const inicio = document.getElementById("inicio");
const historia = document.getElementById("historia");
const historia2 = document.getElementById("historia2");
const historia3 = document.getElementById("historia3");
const historia4 = document.getElementById("historia4");
const historia5 = document.getElementById("historia5");

const carta = document.getElementById("carta");
const carta2 = document.getElementById("carta2");
const final = document.getElementById("final");

const musica = document.getElementById("musica");
const musicaFinal = document.getElementById("musicaFinal");

function pasarPagina(actual, siguiente){
    if(!actual || !siguiente) return;

    actual.classList.add("desaparecer");

    setTimeout(function(){
        actual.style.display = "none";
        actual.classList.remove("desaparecer");
        siguiente.style.display = "block";
    }, 700);
}

abrirLibro.addEventListener("click", function(){

    musica.volume = 0.25;

    musica.currentTime = 35;   // Empieza en el segundo 35
musica.play().catch(function(){
    console.log("La música inicial no pudo iniciar");
});

    inicio.classList.add("ocultar");

    setTimeout(function(){
        inicio.style.display = "none";
        historia.style.display = "block";
    }, 1000);

});

document.getElementById("irPagina2").addEventListener("click", function(){
    pasarPagina(historia, historia2);
});

document.getElementById("irPagina3").addEventListener("click", function(){
    pasarPagina(historia2, historia3);
});

document.getElementById("irPagina4").addEventListener("click", function(){
    pasarPagina(historia3, historia4);
});

document.getElementById("irPagina5").addEventListener("click", function(){
    pasarPagina(historia4, historia5);
});

document.getElementById("irCarta").addEventListener("click", function(){

    pasarPagina(historia5, carta);

    // Cámara de Faltas inicia en el segundo 15
    musicaFinal.currentTime = 15;
    musicaFinal.volume = 0;
    musicaFinal.play().catch(function(){
        console.log("La música final no pudo iniciar");
    });

    let fade = setInterval(function(){

        // Baja Until I Found You
        if(musica.volume > 0){
            musica.volume = Math.max(0, musica.volume - 0.01);
        }

        // Sube Cámara de Faltas
        if(musicaFinal.volume < 1.00){
            musicaFinal.volume = Math.min(1.00, musicaFinal.volume + 0.01);
        }

        // Cuando termina el cambio
        if(musica.volume <= 0 && musicaFinal.volume >= 1.00){

            musica.pause();
            musica.currentTime = 35;

            clearInterval(fade);

        }

    },100);

});


document.getElementById("irCarta2").addEventListener("click", function(){
    pasarPagina(carta, carta2);
});

document.getElementById("irFeliz").addEventListener("click", function(){

    carta2.classList.add("desaparecer");

    setTimeout(function(){
        carta2.style.display = "none";
        carta2.classList.remove("desaparecer");
        final.style.display = "flex";
    }, 700);

});
