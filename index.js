const inputVal = document.getElementById("inputVal");
const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let newWord="";
let paraData = "";

const wordGenerator = (randomNbr) => {
    for (let i=0; i<randomNbr; i++){
        const randomIdx = Math.ceil(Math.random()*25);
        newWord += letters[randomIdx]
    }   
    console.log(newWord)
}

const paraGenerator = () =>{

    for (let i=0; i<inputVal.value; i++){
        const randomNbr = Math.ceil(Math.random()*15);
        wordGenerator(randomNbr);
        paraData += newWord.toLowerCase();
        paraData += " ";
        newWord = "";
    }
    
    let divElement = document.getElementsByClassName("container");
    console.log()
    const newParaElement = document.createElement("p");
    newParaElement.setAttribute("class", "para")
    
    newParaElement.innerText = paraData;
    divElement[0].appendChild(newParaElement);
    paraData = ""
}
