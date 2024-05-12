const colordata=document.querySelector(".color-data");
const centercolor= document.querySelector(".center-color");
const body=document.querySelector("body");
const color=[1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];
let flag=0;
for(let i=0;i<color.length;i++){
    flag=flag*10+i;
}

centercolor.addEventListener("click",()=>{
    let randomcolor="#";
for(let i=0;i<6;i++){

    randomcolor=randomcolor+color[Math.floor(Math.random()*color.length)]
}
colordata.innerHTML=randomcolor;
console.log(randomcolor)
body.style.backgroundColor=randomcolor;
})