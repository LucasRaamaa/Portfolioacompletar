let menuVisible = false;
// funciones que oculta y muestran el menu
function mostrarOcultarMenu(){
    if(menuVisible){
        document.getElementById("nav").classList="";
        menuVisible = false;
    }else{
        document.getElementById("nav").classList="responsive";
        menuVisible = true;
    }
}

function seleccionar(){
    //oculto el menu una vez que se selecciona uno
    document.getElementById("nav").classList="";
    menuVisible = false;
}

// animaciones a los skills
function efectoHabilidades(){
    var skills = document.getElementById("skills");
    var distancia_skills = window.innerHeight - skills.getBoundingClientRect().top
    if(distancia_skills >= 300){
        let habilidades = document.getElementsByClassName("progreso");
        habilidades[0].classList.add("javascript");
        habilidades[1].classList.add("htmlcss");
        habilidades[2].classList.add("react");
        habilidades[3].classList.add("professional");
        habilidades[4].classList.add("trabajoequipo");
        habilidades[5].classList.add("autodidacta");
    }
}

//detecto scrolling para aplicar la animación
window.onscroll = function(){
    efectoHabilidades();

}