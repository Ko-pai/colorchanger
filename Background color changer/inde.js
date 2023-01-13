const buttom = document.querySelector(".bott")
const main =document.querySelector(".text")
const navbar =document.getElementsByTagName("a")


buttom.addEventListener("click",()=>{
    let color = "#" + randomNumber()
    document.body.style.backgroundColor = color
    main.innerHTML = color
    main.style.color = color
})

const randomNumber = () =>{
    const num = "0123456789abcdef"
    let numlength = "6"
    let colorName =""
    
    for (let i = 0; i < numlength; i++) {
        const randomCo = Math.floor(Math.random() * num.length)
        colorName += num.substring(randomCo,randomCo + 1)
        
    }
    return colorName
}


