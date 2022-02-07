import {fetchData} from "./utils/fetchData.js"
let characters = document.getElementById("characters")
let API = "https://rickandmortyapi.com/api/character/"
let n=0
let pageNumber=2;
let page=""
let character
let myCharacter;

const personaje = ({name,specie,status,img})=>{{ 
    return{
    name,specie,status,img
}}}


export const anotherFunction = async (url_api) => {


    try{
        if(n==19){
            page=`?page=${pageNumber}`
            pageNumber+=1
            n=0
        }


        const data = await fetchData(url_api+page)
        character = await fetchData(`${url_api}${data.results[n].id}`)

        
        const img = character.image
        const status = character.status
        const name = character.name
        const specie = character.species
        
        myCharacter = personaje({name:name,specie:specie,status:status, img:img})

        if(character.origin.url!==""){
            const origin = await fetchData(character.origin.url)
            myCharacter.dimension=origin.dimension
        } else{        
            origin="Unknown"
            myCharacter.dimension=origin
        }
        n+=1




    } catch(error) {
        console.error(error)
    }
    finally{
        console.log(myCharacter)
        characters.innerHTML+=`
        <article class="characters__card">
            <div class="name-container">
                <p class="characters__card--name">${myCharacter.name}</p>
            </div>
    
    
            <img src="${myCharacter.img}" >
    
    
            <span class="characters__card--subtitle" >STATUS:</span> <span>${myCharacter.status}</span>
            <br>
            <span class="characters__card--subtitle" >SPECIE:</span> <span>${myCharacter.specie}</span>
            <br>
            <span class="characters__card--subtitle" > DIMENSION:</span><span>${myCharacter.dimension}</span>
    
        </article>
        `

}}

setInterval(() => {
    anotherFunction(API)
}, 1500);
