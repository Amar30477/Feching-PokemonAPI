apiLink = "https://pokeapi.co/api/v2/pokemon/ditto" //remove last one to add your chosen one

async function fetchAPI(url){
    try{
        const response = await fetch(url);
        const value =response.json();
        return value;
    }
    catch{
        console.error('error');
    }
}
const submit = document.getElementById("getPoke");
submit.addEventListener('click' , function(event){
    
    const input = document.getElementById("searchFeild").value;
    if (input == "ditto") {

        async function addChar(){
            let result = await fetchAPI(apiLink);
            console.log(result);
            console.log(result.name);
            let CharName = document.querySelector(".name");
            let Charimg = document.querySelector(".sprite");
            let grass =document.querySelector(".type-grass");
            let poison =document.querySelector(".type-poison");
            let id = document.querySelector(".num");
            let Charmove = document.querySelector(".moves");
            let CharHt = document.querySelector(".Ht");
            CharHt.textContent = `Ht ${result.height / 10}m · Wt ${result.weight / 10}kg `
            Charmove.innerText = result.moves[0].move.name;
            Charimg.getAttribute('src');
            Charimg.setAttribute('src', result.sprites.front_default)
            grass.innerText = result.types[0].type.name;
            poison.style.display ="none";
            id.textContent = `# ${result.id}`;
            // console.log(result.sprites.other.official-artwork.front_default)
            CharName.innerText=result.name ;
            // Charimg.componant =result.name ;
            
        }
        
        addChar(input)
    }
    else{
        alert("character note found!");
    }
    } )