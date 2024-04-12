//const  div= document.querySelector("div");
//console.log(box);
//let id =div.getAttribute("id");
//console.log(id);

//const kumar= div.getAttribute("name");
//console.log(kumar);

//let p =document.querySelector("p");
//console.log(kumar); 
//let name=p.getAttribute("class");
//console.log(name);

//let div = document.querySelector("div");
//div.style.backgroundColor = "green";
//div.style.backgroundColor ="red";
//div.style.fontSize="10px";
//div.style.innertext="niraj!";
let newBtn=document.createElement("button");
newBtn.innerText="click me!";
console.log(newBtn);
let div = document.querySelector("div");
div.append(newBtn);
//div.prepend(newBtn);
//div.before(newBtn);
div.after(newBtn);
let newheading = document.createElement("h1");
newheading.innerHTML="<!>Iam Niraj Pandit</!>";
console.log(newheading);
document.querySelector("body").prepend(newheading);
//newheading.remove();
//let newBtn = document.createElement("button");
//newBtn.innerText="click me!";
//console.log(newBtn)
//let div = document.querySelector("div");
//div.append(newBtn);


