const apikey = 'db90bcd7712735def1469c9cf5fddaaf'
const apiurl = `https://api.openweathermap.org/data/2.5/weather?&appid=${apikey}&units=metric`



async function checkWeather(city){
    const response = await  fetch(apiurl + `&q=${city}`)
    const data = await response.json()

    if(response.status === 404){
        document.querySelector('.error').style.display = 'block'
        document.querySelector('.weather').style.display = 'none'
    }
    else{

    document.querySelector('.city').innerHTML = data.name
    document.querySelector('.temp').innerHTML = `${Math.round(data.main.temp)}°C`
    document.querySelector('.humidity').innerHTML = `${data.main.humidity}%`
    document.querySelector('.wind').innerHTML = `${data.wind.speed} km/h`

    const weatherIcon = document.querySelector('.weather-icon')

    if(data.weather[0].main === 'Clouds'){
        weatherIcon.src = 'images/clouds.png'
    }
    else  if(data.weather[0].main == 'Clear'){
        weatherIcon.src = './images/clear.png'
    }
    else  if(data.weather[0].main == 'Drizzle'){
        weatherIcon.src = './images/drizzle.png'
    }
    else  if(data.weather[0].main == 'Mist'){
        weatherIcon.src = './images/mist.png'
    }
    else  if(data.weather[0].main == 'Rain'){
        weatherIcon.src = './images/rain.png'
    }
    else  if(data.weather[0].main == 'Snow'){
        weatherIcon.src = './images/snow.png'
    }
    document.querySelector('.error').style.display = 'none'
    document.querySelector('.weather').style.display = 'block'
}
}

const searchBox = document.querySelector('.search input')
const searchBtn = document.querySelector('.search button')

searchBtn.addEventListener('click', ()=>{
    const city = searchBox.value
    checkWeather(city)
    searchBox.value = ''
})
searchBox.addEventListener('keypress', (e)=>{
    if(e.code === 'Enter'){
        const city = searchBox.value
        checkWeather(city)
        searchBox.value = ''
    }
})
