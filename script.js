let inputEle = document.getElementById("location-input")
let tempEle = document.getElementById("temp-value")
let locEle = document.getElementById("location")
let weatherdesEle = document.getElementById("weather-desc")
let buttonEle = document.getElementById("button")
let icon = document.getElementById("icon")

const apikey = '1c9cea00e232079f954411be98ad5385';

buttonEle.onclick = function(){
    if(inputEle.value=="")
        alert("Please enter the location name")
    else{
        loc = inputEle.value;
        url = `https://api.openweathermap.org/data/2.5/weather?q=${loc}&appid=${apikey}`
        fetch(url).then(res => res.json())
        .then(data => {
            console.log(data)
            const{name} = data
            const{feels_like} = data.main
            const{description} = data.weather[0]
            tempEle.innerText = Math.floor(feels_like - 273);
            locEle.innerText = name;
            weatherdesEle.innerText = description;
        })
        .catch(() => {
            alert("Enter valid location")
        })
        inputEle.value=""

    }
}