let btn1 = document.querySelector("#btn1");
btn1.onclick = (evt) => {
    console.log(evt);
    console.log(evt.type);
    console.log(evt.target);
    console.log(evt.clickx,evt.clicky);

   
};
let div = document.querySelector("div");
div.onmouseover = () => {
    console.log("you are my son");

};