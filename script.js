const appurl = "https://api.openweathermap.org/data/2.5/weather?&units=metric&q=";
const appid = "017569ee51c5a255c72adb1c42854543"

const inputbox = document.querySelector(".inputbox")
const searchbtn = document.querySelector(".searchbutton")


async function weather(city){
  const response = await fetch(appurl  + city +`&appid=${appid}`);
  if(response.status == 404){
    alert("pls enter cityname correct")
  }
  else{
    var data = await response.json()
    // console.log(data)
  
    document.querySelector(".city-name h2").innerHTML = data.name
    document.querySelector(".temperature h2").innerHTML = Math.round(data.main.temp)+ "°C";
    document.querySelector(".city-name h2").style.display = "block";
    document.querySelector(".temperature h2").style.display = "block";
  }

}

searchbtn.addEventListener('click',()=>{
  weather(inputbox.value);
})