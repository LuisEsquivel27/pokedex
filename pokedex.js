const fetchPokemon = () => {
    const pokeNameInput = document.getElementById("pokeName");
    if ( pokeNameInput.value == ""){
        document.getElementById("msgIn").style.display = "block";
        return;
    }
    document.getElementById("msgIn").style.display = "none";
    let pokeName = pokeNameInput.value;
    pokeName = pokeName.toLowerCase();
    const url = `https://pokeapi.co/api/v2/pokemon/${pokeName}`;
    fetch(url).then((res) => {
        if (res.status != "200") {
            console.log(res);
            pokeImage("./assets/pokeball.png");
            document.getElementById("msgErr").style.display = "block";
            document.getElementById("infoPokemon").style.display = "none";
        }
        else {
            document.getElementById("msgErr").style.display = "none";
            document.getElementById("infoPokemon").style.display = "block";
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

const pokeImage = (data) => {
    const pokePhoto = document.getElementById("pokeImg");
    pokePhoto.src = data.sprites.other.home.front_shiny;

    document.getElementById("lbNombre").innerText = data.forms[0].name.toUpperCase() + " (" + data.id + ")";
    document.getElementById("lbTipo").innerText = data.types[0].type.name.toUpperCase();

    document.getElementById("stat1").innerText = data.stats[0].stat.name;
    document.getElementById("progress1").style.width = `${data.stats[0].base_stat}%`;
    document.getElementById("progress1").innerText = data.stats[0].base_stat;

    document.getElementById("stat2").innerText = data.stats[1].stat.name;
    document.getElementById("progress2").style.width = `${data.stats[1].base_stat}%`;
    document.getElementById("progress2").innerText = data.stats[1].base_stat;

    document.getElementById("stat3").innerText = data.stats[2].stat.name;
    document.getElementById("progress3").style.width = `${data.stats[2].base_stat}%`;
    document.getElementById("progress3").innerText = data.stats[2].base_stat;

    document.getElementById("stat4").innerText = data.stats[3].stat.name;
    document.getElementById("progress4").style.width = `${data.stats[3].base_stat}%`;
    document.getElementById("progress4").innerText = data.stats[3].base_stat;

    document.getElementById("stat5").innerText = data.stats[4].stat.name;
    document.getElementById("progress5").style.width = `${data.stats[4].base_stat}%`;
    document.getElementById("progress5").innerText = data.stats[4].base_stat;

    recorreArr(data.moves);
}

const recorreArr = (arr) => arr.forEach(item => {
    const itemList = `<li>${item.move.name}</li>`;
    document.getElementById("listMovs").innerHTML += itemList;
});

const prueba = () =>{
    console.log("hola");
}
