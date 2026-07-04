const copybtn = document.getElementById("copybtn");
const hidebtn = document.getElementById("hidebtn");
const copied  = document.getElementById("copied");

let currentPassword = "";
let hidden = false;

const btn = document.getElementById("btn");
const result = document.getElementById("result");
btn.onclick = function(){
    const length = Number(document.getElementById("length").value);

    const lowercase = document.getElementById("lowercase").checked;
    const uppercase = document.getElementById("uppercase").checked;
    const numbers = document.getElementById("numbers").checked;
    const symbols = document.getElementById("symbols").checked;

    const password = generate(
        length,
        lowercase,
        uppercase,
        numbers,
        symbols
    );

   currentPassword = password;

   if(hidden){result.textContent = "•".repeat(password.length)} else{result.textContent = password;};

}

hidebtn.onclick = function(){
    if(currentPassword === "") return;
    hidden = !hidden;
    if(hidden){
        result.textContent = "•".repeat(currentPassword.length);
        hidebtn.textContent = "🙈"; // We appologize for how lazy the developer is, its literally 4am.
    }
   else{
    result.textContent = currentPassword;
    hidebtn.textContent = "👁";
   } 
}

copybtn.onclick = function(){
    if(currentPassword === "") return;

    navigator.clipboard.writeText(currentPassword);
    copied.textContent = "Copied!";

    setTimeout(function(){
        copied.textContent = "";
    },1500);

}



function generate(length, Ǝlowercase, Ǝuppercase, Ǝnumbers, Ǝsymbols){

    const lowercase = "abcdefghijklmnopqrstuvwxyz";
    const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
    const number    = "0123456789";
    const symbol    = "!@#$%^&*()_+*-/``~";

    let allowed     = "";
    let password    = "";

    allowed        += Ǝlowercase ? lowercase : "";
    allowed        += Ǝuppercase ? uppercase : "";
    allowed        += Ǝnumbers   ?    number : "";
    allowed        += Ǝsymbols   ?    symbol : "";

    if(length <= 0 )  {return `(password length must be atleast 1)`;}
    
    if(allowed.length === 0){ return `(At least 1 set of characters needs to be selected)`;}


    for(let p = 0; p < length; p++){
        const randomp = Math.floor(Math.random() * allowed.length);
        password += allowed[randomp];
    }
    return  password;
}
const length     = 12;
const Ǝlowercase = true;
const Ǝuppercase = true;
const Ǝnumbers   = true;
const Ǝsymbols   = true;

const password = generate(length, Ǝlowercase, Ǝuppercase, Ǝnumbers, Ǝsymbols);

console.log(`Generated password: ${password}`);


const generatebtn = document.getElementById("btn")