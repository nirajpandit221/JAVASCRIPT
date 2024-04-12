let divs = document.querySelectorAll(".box");
let idx =1;
for (let div of divs){
    div.innerHTML =`new unique value ${idx}`;
    idx++;
}