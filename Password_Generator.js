const password = document.getElementById("password")
const copy = document.getElementById("copy")
const length = document.getElementById("length")
const uppercase = document.getElementById("uppercase")
const lowercase = document.getElementById("lowercase")
const symbol = document.getElementById("symbols")
const number = document.getElementById("number")
const generate = document.getElementById("generate")


const UC ="QWERTYUIOPLKJHGFDSAZXCVBNM"
const LC ="qwertyuioplkjhgfdsazxcvbnm"
const num ="0123456789"
const sym ="!@#$%^&*()_-=+?><`"

 function genpass(){
    let getlength = length.value;
    let getpassword ="";
    let chars ="";

    chars+= uppercase.checked ?  UC: "";
    chars+= lowercase.checked ?  LC: "";
    chars+= number.checked ?  num: "";
    chars+= symbol.checked ? sym: "";

    for(let i=0;i<getlength;i++){
let random =Math.floor(Math.random()*chars.length)
        getpassword = getpassword+chars.substring(random,random+1);
    }
password.value =getpassword;
}

generate.addEventListener("click",genpass);

async function copypassword(){
    if(navigator.clipboard){
        await navigator.clipboard.writeText(password.value);
        alert("Password copied to clipboard");
    }
}
copy.addEventListener("click",copypassword)