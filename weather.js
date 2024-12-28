const apikey="6553b8559121090fc2176a01469399b2";
const apiurl="https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox=document.querySelector(".search input");
const searchBtn=document.querySelector(".search button");

const weatherIcon=document.querySelector(".weather-icon");

 async function checkweather(city){
    const response= await fetch(apiurl+city+`&appid=${apikey}`)
    if(response.status==404){
        document.querySelector(".error").style.display="block";
        document.querySelector(".weather").style.display="none";
    }else{

    

    var data=await response.json();

    
    document.querySelector(".city").innerHTML=data.name;
    document.querySelector(".temp").innerHTML=Math.round(data.main.temp)+"°C";
    document.querySelector(".humidity").innerHTML=data.main.humidity+"%";
    document.querySelector(".wind").innerHTML=data.wind.speed+"km/ph";

    if (data.weather[0].main=="clouds"){
        weatherIcon.src="clouds.png";
    }
    else if(data.weather[0].main=="Mist"){
        weatherIcon.src="mist.png";
    }
    else if(data.weather[0].main=="Clear"){
        weatherIcon.src="clear.png";
    }
    else if(data.weather[0].main=="Rain"){
        weatherIcon.src="rain.avif";
    } 
    else if(data.weather[0].main=="Drizzle"){
        weatherIcon.src="Drizzle.webp";
    }
    else if(data.weather[0].main=="Humidity"){
        weatherIcon.src="humidity.png";
    }

    document.querySelector(".weather").style.display="block";
    document.querySelector(".error").style.display="none";
    }
 }
 searchBtn.addEventListener("click",()=>{
    checkweather(searchBox.value);
 })