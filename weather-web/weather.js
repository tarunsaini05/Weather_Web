let city=document.getElementById("city");
let temp=document.getElementById("temp");
let type=document.getElementById("type");
let image=document.getElementById("img");
let input=document.getElementById("inp")
let ApiKey="9f4cd08022827477b4d6a66767f0c055";
console.log(type.innerHTML)

const Data=async function (search){
    let GetData= await fetch(`https://api.openweathermap.org/data/2.5/weather?q=${search}&appid=${ApiKey}&units=metric`);
    console.log(GetData);
    let JsonData= await GetData.json();
    console.log(JsonData);
    console.log(JsonData.name)

    if(JsonData.cod == 400){
      alert("Please Enter Location")
      image.src="error1.png";
      city.innerHTML="";
      temp.innerHTML="";
      type.innerHTML="";
  }
  if(JsonData.cod == 404){
      alert("Please Enter Write Location")
      image.src="error2.png";
      city.innerHTML=search;
      temp.innerHTML="";
      type.innerHTML="";
  }
   

   city.innerHTML=JsonData.name
   temp.innerHTML= Math.floor(JsonData.main.temp)+"°C."
   type.innerHTML=JsonData.weather[0].main;
   
   if(type.innerHTML=="Clouds"){
    image.src='clouds.png'
     }
     else if(type.innerHTML=="Clear"){
        image.src="clears.png"
     }
     else if(type.innerHTML=="Rain"){
        image.src="rain.png"
     }
     else if(type.innerHTML=="Snow"){
        image.src="rain.jpg"
     }
     else if(type.innerHTML=="Haze"){
        image.src="haze.png"
     }
     else if(type.innerHTML=="Strom"){
        image.src="Strom.png"
     }
     input.value="";
 
}
function myfun(){
    search=input.value
    Data(search);
}

