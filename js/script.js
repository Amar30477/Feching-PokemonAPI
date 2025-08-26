// const { createElement } = require("react");

apiLink = "https://pokeapi.co/api/v2/pokemon/" //remove last one to add your chosen one

async function fetchAPI(url){
    try{
        const response = await fetch(url);
        const value = await response.json();
        // const statuscode = response.status;
        const status = response.status;

        return value ,status;
        
    }
    catch{
        console.error('error');
    }
}
async function fetchAPIdata(url){
    try{
        const response = await fetch(url);
        const value = await response.json();
        // const statuscode = response.status;
        // const status = response.status;

        return value ;
        
    }
    catch{
        console.error('error');
    }
}
const submit = document.getElementById("getPoke");
submit.addEventListener('click' , function(event){
    
    
    // if (statuscode == '200') {
        // if (input == "ditto") {
            
    async function addChar(){
        const input = document.getElementById("searchFeild").value;
        let url = `${apiLink}${input}`;
        let result = await fetchAPI(url);
        let result2 = await fetchAPIdata(url);
        console.log(url)

        
        if (result == 200) {
            console.log(result2);
            // console.log(result.name);
            let CharName = document.querySelector(".name");
            let Charimg = document.querySelector(".sprite");
            // let grass =document.querySelector(".type-grass");
            // let poison =document.querySelector(".type-poison");
            let id = document.querySelector(".num");
            let Charmove = document.querySelector(".moves");
            let CharHt = document.querySelector(".Ht");
            CharHt.textContent = `Ht ${result.height / 10}m · Wt ${result.weight / 10}kg `
            Charmove.innerText = result2.moves[0].move.name;
            Charimg.getAttribute('src');
            Charimg.setAttribute('src', result2.sprites.front_default)
            // grass.innerText = result2.types[0].type.name;
            // poison.style.display ="none";
            document.querySelector(".types").innerHTML=""
            id.textContent = `# ${result2.id}`;
            // console.log(result.sprites.other.official-artwork.front_default)
            CharName.innerText=result2.name ;
            for (let index = 0; index < result2.types.length; index++ ){
                let spantypes = document.createElement('span');
                let typename = result2.types[index].type.name;
                spantypes.classList.add('badge')
                spantypes.classList.add(`type-${typename}`)
                spantypes.innerText = typename;
                document.querySelector(".types").appendChild(spantypes)
            }
            // Charimg.componant =result.name ;
            
            // addChar(input)
        }
        else{
            alert("character note found!");
        }
    }
    addChar()
        
    } )