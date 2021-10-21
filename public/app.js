const temp = document.getElementById('temp')
const pressure = document.getElementById('pressure')
const humidity = document.getElementById('humidity')
const inputField = document.getElementById('inputField')
const form = document.getElementById('input-elements')


form.addEventListener('submit', async (e) => {
    e.preventDefault()
    const city = inputField.value
    updateWeather(city)
})

async function updateWeather(city) {

    if(city === ''){
        alert('Please enter a valid city')
        return
    }

    await fetch(`/api?q=${city}`)
    .then(async res => {
        var data = await res.json()
        if(data.cod === 404){
            alert('City not found')
            return
        }
        temp.innerHTML = data.main.temp+' &deg;C'
        pressure.innerHTML = data.main.pressure+' mb'
        humidity.innerHTML = data.main.humidity+' %'

    })
    .catch(e => alert('Server Error'))
    
}
inputField.value = 'Mumbai'
updateWeather('Mumbai')