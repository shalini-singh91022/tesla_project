

let ul = document.querySelector('ul');
let container = document.querySelector('#container');
 let score_record = [];
let score = 0;
let attemts = [];
 let attemt= 1;
let currentques = 0;
let started =false;
 let box  = document.querySelector('.body');  
 let hadanswered = false;
 let btn2 = document.querySelector('#btn2');
 btn2.innerHTML= "next";
 btn2.classList.add('btn1');
  let click =0;
   let div = document.querySelector(".timer");
  let span= document.createElement("span");
 let showtime= null;


 let ques = document.querySelector('#question');
 function question_genrator(i) {
   
   
  div.innerText=`Time left: ${span.innerText}`;
  Time();
  div.appendChild(span);
  container.appendChild(div);
  ul.innerHTML ="";
ques.innerHTML = questions[i].question; 
let options = questions[i].option;

for( let option of options  ) {
 let li = document.createElement('li');
 li.classList.add('option');
 li.innerHTML = option;
 ul.appendChild(li);

}

currentques++;
};

function Time() {
 let timeleft = 10;
if (showtime) clearInterval(showtime) ;
span.innerText = timeleft ;
 showtime = setInterval(() => {
  timeleft--;
  span.innerText = timeleft;
  if (timeleft <= 0) {
   
   
    timeup();
  }
}, 1000) 

}
function timeup() {
 
  alert("Time up !")
  hadanswered= true;
  btn2.click();
  
}


const questions = [
  {
    question: "What is the value of 7 + 5?",
    option: ["10", "11", "12", "13"],
    answer: "12"
  },
  {
    question: "Capital of France?",
    option: ["Rome", "Berlin", "Madrid", "Paris"],
    answer: "Paris"
  },
  {
    question: "Which is the smallest prime number?",
    option: ["0", "1", "2", "3"],
    answer: "2"
  },
  {
    question: "Product of 9 × 2?",
    option: ["16", "18", "20", "17"],
    answer: "18"
  },
  {
    question: "What color is made by mixing red and blue?",
    option: ["Green", "Orange", "Purple", "Brown"],
    answer: "Purple"
  },
  {
    question: "Which planet is closest to the Sun?",
    option: ["Venus", "Earth", "Mercury", "Mars"],
    answer: "Mercury"
  },
  {
    question: "Square of 6?",
    option: ["36", "12", "24", "30"],
    answer: "36"
  },
  {
    question: "Which animal is known as the King of the Jungle?",
    option: ["Tiger", "Elephant", "Lion", "Wolf"],
    answer: "Lion"
  },
  {
    question: "Who invented the light bulb?",
    option: ["Newton", "Edison", "Darwin", "Tesla"],
    answer: "Edison"
  },
  {
    question: "What is 15 divided by 3?",
    option: ["5", "4", "3", "6"],
    answer: "5"
  }
];

document.body.addEventListener("click", (e) => {
  if( e.target.classList.contains("btn1") && e.target.innerText== "let's start the quize"){
    
 
 console.log("clicked");
 document.querySelector(".loader").style.display = "block";

  setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
   box.style.display="none";

 btn2.style.display
= "block";

container.classList.add("container");
 container.style.display="flex";



 
 ques.classList.add('ques');
 
 question_genrator(currentques);
// btn2.addEventListener("click", () => 
// );


//  function question_genrator(i) {
//   ul.innerHTML ="";
// ques.innerHTML = questions[i].question; 
// let options = questions[i].option;

// for( let option of options  ) {
//  let li = document.createElement('li');
//  li.classList.add('option');
//  li.innerHTML = option;
//  ul.appendChild(li);

// }

// currentques++;
// };


    alert("Quiz started!");
  }, 2000);

// -----------------------------------------------
  }
  else if (e.target.innerHTML=="next"){
click=0;
 if(hadanswered){
  span.innerText="";
  hadanswered=false;
  if ( currentques < questions.length){

question_genrator(currentques);
 }
else {
   score_record.push(score);
// document.body.removeChild(document.querySelector('#container'));

// -------
document.querySelector('#container').style.display="none";
btn2.style.display="none";
  let div = document.createElement('div');
  div.classList.add('score-card');
  div.innerHTML=`your current score is : ${score}`;
  let table = document.createElement('table');
   let head =document.createElement('tr');
  let  th1 = document.createElement('th');
  th1.innerText = "attempt";
  let th2 = document.createElement('th');
  th2.innerText = "score";
  head.appendChild(th1);
  head.appendChild(th2);
  table.appendChild(head);
   attemts.push(attemt);
   

  for( let i=0;i<score_record.length;i++) {

   
    let row =document.createElement('tr') ;
    let td1 = document.createElement('td') ;
    td1.innerText = attemts[i];
    
    row.appendChild(td1);
    let td2 = document.createElement('td');
    td2.innerText= score_record[i];
    row.appendChild(td2);
    table.appendChild(row);
   
  }
  document.body.appendChild(div);
  div.appendChild(table);
let resrt = document.createElement('button');
resrt.classList.add('restart');
resrt.innerText= "Restart";
div.appendChild(resrt);

};
 }
 
 else {
  alert("You  haven't attempted the question! ")
 }
 
 
}
  
  
   else if(e.target.classList.contains("restart") && e.target.innerText == "Restart"){
    attemt++;
    currentques = 0;
    score = 0;
    click = 0;
    hadanswered = false;
    let sc = document.querySelector('.score-card');
    if (sc) sc.remove();
    let box = document.querySelector('.body');
    if (box) box.style.display = "block";
    // let ques = document.querySelector('#question');
    // if (ques) ques.classList.add('ques');
    
//  document.querySelector('#container').display="block";

    // question_genrator(currentques);
    
}


  }
  
  
);
ul.addEventListener("click", (e) => {
  hadanswered=true;
  click++;
 if ( click === 1) {
  if(e.target.classList.contains("option")) {
  clearInterval(showtime);
  e.target.style.backgroundColor= '#CBC0D3';

  let answer = questions[currentques-1].answer;
  if( e.target.innerHTML === answer){
   score++;
  alert("correct answer");
   console.log("yes");
  }
  else {console.log("no");
alert("wrong answer");
  }
 };
 };
});




