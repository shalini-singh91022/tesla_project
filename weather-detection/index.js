
let btn = document.querySelector(".weather");
let key = "4c68accde590e24996b46a45a6c3f436";
 let tem= document.querySelector(".report") ;
btn.addEventListener("click",(e) => {
e.preventDefault();
let city = document.querySelector('#cityname').value.trim();
console.log("clicked");
if (city!=""){
 fetchweather(city);
}
});
 async function fetchweather(city) {
  console.log("done");
  let url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${key}&units=metric
`;
try {
 let response = await fetch(url);
 if(response.ok){
  console.log(response);
  
 let data =await  response.json();
 console.log(data.main);
  tem.innerHTML= `${data.main.temp}`;


};
 
}
catch (err) {
console.log(err);
};
 }