import React, { useEffect, useState } from "react";
import { fetchWeather } from "../config/api";

const Weather = () => {
  const [search, setSearch] = useState("");
  const [data, setData] = useState();

  const searchWeatherByCity = async (e) => {
    e.preventDefault();
    const res = await fetchWeather(search);
    setData(res);
    setSearch("");
    console.log(data);
  };

  return (
    <div>
      <form>
        <input
          type="text"
          value={search}
          placeholder="Search City/Town..."
          onChange={(el) => setSearch(el.target.value)}
          className="border px-4 py-2 rounded-tl-md rounded-bl-md outline-none"
        />
        <button
          type="submit"
          onClick={searchWeatherByCity}
          className="border border-blue-500 px-4 py-2 rounded-tr-md rounded-br-md bg-blue-500 text-white hover:bg-blue-400"
        >
          search
        </button>
      </form>
      {/* showing weather data for a city */}
      {data && (
        <div className="">
          <div className="bg-gray-100 p-4 my-4">
            <div className="flex items-center gap-4">
              <div className="">
                <img
                  src={`http://openweathermap.org/img/w/${data.weather[0].icon}.png`}
                  alt=""
                  className="w-[80px]"
                />
              </div>
              <div className="">
                <h2 className="text-xl font-bold">{data?.main?.temp} C</h2>
                <p className="">{data?.weather[0]?.description}</p>
                <p>{data?.name}</p>
              </div>
            </div>
            <div className=""></div>
          </div>

          <div className="bg-gray-100 p-4 my-4">
            <div className="">
              <div className="p">Humidity {data?.main?.humidity}</div>
              <div className="p">Pressure {data?.main?.pressure}</div>
              <div className="p">Wind speed {data?.wind?.speed}</div>
              <div className="p">Visibility {data?.visibility} m</div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Weather;
