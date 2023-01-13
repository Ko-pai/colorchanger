const color = [0,1,2,3,4,5,6,7,8,9,"a","b","c","d","e","f"]
const buttom = document.querySelector(".bott")
const text = document.querySelector(".text")

buttom.addEventListener("click", ()=>{
    let getNum = "#";
    for(let i = 0 ; i < 6 ; i++){
        getNum += color[random()]
    }
    document.body.style.backgroundColor = getNum
    text.style.color = getNum
    text.innerHTML =getNum
})

let random =() =>{
    return Math.floor(Math.random() * color.length)
}

