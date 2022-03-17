let nombrePkm = "";
let numeroPkm = 0;

const randomPokemon = () => {
    document.getElementById("ganador").style.display = "none";
    document.getElementById("erroneo").style.display = "none";
    document.getElementById("revelar").style.display = "none";
    let pokeName = getRandom();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./assets/pokeball.png")
        }
        else {
            return res.json();
        }
    }).then((data) => {
        if (data) {
            console.log(data);
            let pokeImg = data.sprites.other.home.front_shiny;
            pokeImage(data);
            console.log(pokeImg);
        }
    });
}

const getRandom = () =>{
    let num= Math.random() * 898;
    num = Math.round(num);
    return num;
}

const pokeImage = (data) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.style.filter = "brightness(0.0)"
    pokePhoto.src = data.sprites.other.home.front_shiny;
    nombrePkm = data.forms[0].name.toLowerCase();
    numeroPkm = data.id;
    document.getElementById("pokeName").value = "";
}

const revisaRespuesta = () =>{
    let respuesta = document.getElementById("pokeName").value;
    document.getElementById("revelar").style.display = "none";
    if ( respuesta == ""){
        document.getElementById("msgIn").style.display = "block";
        return;
    }
    document.getElementById("msgIn").style.display = "none";
    if ( respuesta.toLowerCase() == nombrePkm || respuesta == numeroPkm){
        document.getElementById("ganador").style.display = "block";
        document.getElementById("erroneo").style.display = "none";
        document.getElementById("lbNombre").innerText = nombrePkm.toUpperCase() + " (" + numeroPkm + ")";
        document.getElementById("pokeImg").style.filter = "none";
    } else {
        document.getElementById("ganador").style.display = "none";
        document.getElementById("erroneo").style.display = "block";
        document.getElementById("pokeImg").style.filter = "brightness(0.0)";
    }
}

const revelarRespuesta = () =>{
    document.getElementById("pokeImg").style.filter = "none"; 
    document.getElementById("erroneo").style.display = "none";
    document.getElementById("revelar").style.display = "block";    
    document.getElementById("lbRevela").innerText = nombrePkm.toUpperCase() + " (" + numeroPkm + ")";
}

randomPokemon();