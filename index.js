const letters =["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"];
const numbers = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9"];
const symbols = [ "~","`","!","@","#","$","%","^","&","*","(",")","_","-","+","=","{","[","}","]",",","|",":",";","<",">",".","?","/"]
charset = letters

let pass1 = document.querySelector("#btn-1")
let pass2 = document.querySelector("#btn-2")

function generate() {
    
    let s = document.getElementById("symbol").checked
    let n = document.getElementById("num").checked
    let length = document.getElementById("length").value

    if (s) {
        charset = charset.concat(symbols)
    }
    if (n) {
        charset = charset.concat(numbers)
    }
    console.log(charset)

    let ind
    password = []
    for (let i = 0; i < length * 2; i++){
        ind = Math.floor(Math.random() * charset.length)
        password.push(charset[ind])
    }
    let len = Math.ceil(password.length / 2)
    pass1.textContent = password.slice(0, len).join("")
    pass2.textContent = password.slice(len).join("")

}