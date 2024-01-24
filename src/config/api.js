import axios from "axios";
const URL = "https://api.openweathermap.org/data/2.5/weather";

const API_KEY = process.env.REACT_APP_API_KEY;

export const fetchWeather = async (query) => {
  try {
    const { data } = await axios.get(URL, {
      params: {
        q: query,
        units: "metric",
        APPID: API_KEY,
      },
    });
    console.log(data);
    return data;
  } catch (err) {
    console.log(err.message);
  }
};
