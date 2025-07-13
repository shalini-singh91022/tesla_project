let box  = document.querySelector('.body');
let btn1 = document.querySelector('.btn1');
let ul = document.querySelector('ul');
let container = document.querySelector('.container');
 let score_record = [];
let score = 0;
let attemt = 1;
let currentques = 0;
let started =false;




const questions =[
 {
  question :" sum of 2+2 ?",
  option : ["3","4","5", "6"],
  answer : "4"
 },
 {
  question :" product of 3*2 ?",
  option : ["3","4","5", "6"],
  answer : "6"
 },
 {
  question :" product of 5*1 ",
  option : ["3","4","5", "6"],
  answer : "5"
 }
];
document.body.addEventListener("click", (e) => {
  if( e.target.classList.contains("btn1")){
     let click =0;
 console.log("clicked");
 document.querySelector(".loader").style.display = "block";

  setTimeout(() => {
    document.querySelector(".loader").style.display = "none";
    document.body.removeChild(document.getElementsByClassName("body")[0]);
 let btn2 = document.querySelector('#btn2');
 btn2.innerHTML= "next";
 btn2.classList.add('btn1');
 btn2.style.visibility
= "visible";

 document.querySelector('#container').classList.add('container');



 let ques = document.querySelector('#question');
 ques.classList.add('ques');
 
 question_genrator(currentques);
btn2.addEventListener("click", () => {
click=0;
 if ( currentques < questions.length){
question_genrator(currentques);
 }
else {
   score_record.push(score);
  document.body.removeChild(document.querySelector('#container'));
  let div = document.createElement('div');
  div.classList.add('score-card');
  div.innerHTML=`your score is : ${score}`;
  let table = document.createElement('table');
   let head =document.createElement('tr');
  let  th1 = document.createElement('th');
  th1.innerText = "attempt";
  let th2 = document.createElement('th');
  th2.innerText = "score";
  head.appendChild(th1);
  head.appendChild(th2);
  table.appendChild(head);
  

  for( let score of score_record) {
    let row =document.createElement('tr') ;
    let td1 = document.createElement('td') ;
    td1.innerText = attemt;
    
    row.appendChild(td1);
    let td2 = document.createElement('td');
    td2.innerText= score;
    row.appendChild(td2);
    table.appendChild(row);
  }
  document.body.appendChild(div);
  div.appendChild(table);
let resrt = document.createElement('button');
resrt.classList.add('btn1');
resrt.innerText= "Restart";
div.appendChild(resrt);
document.body.addEventListener("click",(e) => {
  if( e.target.classList.contains("btn1") && e.target.innerText == "Restart") {
    attemt++;
    
    console.log("clicked");
    currentques =0;
    document.querySelector('.score-card').remove();
    document.body.appendChild(box);
    
    
  }
})
};
 
 
});

ul.addEventListener("click", (e) => {
  click++;
 if ( click === 1) {
  if(e.target.classList.contains("option")) {
  
  e.target.style.backgroundColor= '#CBC0D3';

  let answer = questions[currentques-1].answer;
  if( e.target.innerHTML === answer){
   score++;
  
   console.log("yes");
  }
  else {console.log("no");

  }
 };
 };
});
 function question_genrator(i) {
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
    alert("Quiz started!");
  }, 2000);

// -----------------------------------------------
  }
  }
  
);



