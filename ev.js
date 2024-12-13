let input=document.getElementById("input")
let buttons=document.querySelectorAll("button")

let string="";  // intha emoty place name valuva store pana poorom

let arr= Array.from(buttons)  // ilaam button nayum na arr indra variable store pannita

//anthA overu button num work aaga na forEach nu oru function add pandra  [arr(ethula ilaa button eruku).forEach(buttons=>{})]
//each button ena pannanu nu solura

arr.forEach(buttons=>{   // inth line na ilaa buttons valum na array store ath eduka naa inth method use pandra
buttons.addEventListener("click",(e)=>{
    if(e.target.innerHTML == '=') 
    {
        string=eval(string); // eval vate anna value na string la store pandra etha nama ilaa arithmatic function kum use pannala
        input.value=string // athna string la store pandra enaku kadacha value va
}
else if(e.target.innerHTML=='AC'){
    string="";
    input.value=string;
}
else if(e.target.innerHTML=='C')
{
    string=string.substring(0,string.length-1);  // enaku string value minus aggi antha string la korancha value string store aagum
    input.value=string
}

else{
    string +=e.target.innerHTML; // = inta function inga evalution ku use aaguthu string erunkuraa valum inputla erukura
    //valum add sub mul deiv aadi namaku varuthu etha pandrathu intha =
    input.value=string;

}
})

});


