//let student = {
    //fullname: "nirajpandit",
    //marks: 76.9,
    //printmarks: function (){
      //  console.log("marks=",this.marks);

    //},
//};
//const employee = {
  //  calcTax(){
    //    console.log("tax rate is 10%");

    //},
//};
//const karanArjun = {
  //  salary:50000,
//};
//karanArjun.__proto__ = employee;








//const employee1 = {
  //  caltext(){
    //    console.log("niraj");
    //},
//};
//const kumar={
  //  salary:400,
//};
//kumar.__proto__=employee1;
//const saduu={
 //   salary:35000,
//};
//saduu.__proto__=employee1;







//class ToyotaCar{
  //  start(){
    //    console.log("start");
    //}
    //stop(){
      //  console.log("stop");
    //}
//}
//let fortuner = new ToyotaCar();








///synchronous
//console.log("niraj");
//console.log("kumar");
//console.log("pandit");


//Asynchronous/
//function Niraj() {
 //   console.log("Niraj");
//}
//setTimeout(Niraj,8000);//timeout

///callback
//function sum(a,b){
  //  console.log(a+b);
//}
//function calculator(a, b, sumCallback) {
  //  sumCallback(a,b);
//}
//calculator(1,3, sum );




//Nested
//for(let i=0; i<5; i++){
  //for(let j=0; j<5; j++) {
  //  console.log(j);
  //}
//}

//for (let i=0; i<9; i++){
  //for(let j=0; i<9; i++){
   // console.log(j)
  //}
//}



///promise
//let promise = new promise ((resolve, reject) =>{
  //console.log("i am niraj");

//});     



//Array//
//const myArr = [0,1,2,3,4,5]
//const myheros = ["niraj","kumar"]
//const myArr2 = new Array (1,2,3,4)
//console.log(myArr[0]);
//myArr.push(5)
//myArr.push(6)
//console.log(myArr);
//console.log(myArr.includes(8));


//api

//function api() {
  //return new Promise((resolve, reject) => {
    //setTimeout(()=>{
    //console.log("weather date");
    //resolve(200);
    //},2000);
  //});
//}
//async function getweatherData(){
  //await api();
//}
//function getData(dataid) {
  //return new Promise((resolve,reject))=> {
    //setTimeout(() =>{
      
    //})
  //}
//}




//fetch pi
const url = "https://cat-facts.herokuapp.com/fact"

const getfacts = async () => {
  console.log("getting data ......");
  let response = await facts (URL);
  console.log(response);
  let data = await response.json();
  console.log(data);
};