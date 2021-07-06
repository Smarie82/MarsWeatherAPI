const baseURl = "https://api.nasa.gov/insight_weather/?api_key=0C11ZfycTILeBrJ6lrdb3jEy5WAN7hWysisFtKOa&feedtype=json&ver=1.0";
//const key = '0C11ZfycTILeBrJ6lrdb3jEy5WAN7hWysisFtKOa';

const cardTitleOne = document.querySelector('.card-title-one');

fetch(baseURl)
    .then(response => response.json())
    .then(json => displayWeather(json));

function displayWeather(marsWeather) {
        console.log(marsWeather);
        
    let title = document.createElement('h1');
    title.className = 'card-title';
    title.innetText = marsWeather.validity_check;

    cardTitleOne.appendChild(title);

    }