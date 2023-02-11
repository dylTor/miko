//import axios from 'axios';

const API_KEY = import.meta.env.VITE_API_KEY;

const API_URL = `https://api.openweathermap.org/data/2.5/weather?q=london&units=metric&mode=json&APPID=${API_KEY}`;

async function apiCall () {
    const response = await fetch(API_URL);
    const data = await response.json();
    console.log(data);
    return data;

    /*
    const response = await fetch(`https://api.openweathermap.org/data/2.5/weather?q=khartoum&units=metric&mode=json&APPID=${API_KEY}`);

    const data = await response.json();
    console.log(data);
    */

};

export default apiCall;
