//import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;


async function apiCaller (cityName) {
    const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&units=metric&mode=json&APPID=${API_KEY}`;

    try {
        const response = await fetch(API_URL);
        const data = await response.json();

        if (data.cod === '404') return ('City Not Found');
        if (data.cod === '400') return ('Enter Your Location')

        console.log(data);
        const {
            name,
            coords,
            main: {
                temp,
                humidity,
                pressure,
            },
            weather: [
                {
                    description: desc,
                },
            ],
            wind : {speed,}
        } = data;

        return {temp: temp, desc: desc, pressure: pressure, wind: speed, humidity: humidity,};
    
    } catch (error) {
        console.error(error)
    }
    
};

export default apiCaller;
