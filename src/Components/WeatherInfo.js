import './WeatherInfo.css'

function WeatherInfo() {
    return (
        <div classname="weather">
            <div classname="top">
                <p> Random stuff </p>
                <p classname="city"> City Name </p>
                <p classname="weather-desc"> Weather Description </p>
            </div>
            <img alt="weather" classname="weather-icon" src="unknown.png" />
            <div classname="bottom">
                <p> Humidity </p>
                <p> Pressure </p>
                <p> Wind Speed </p>
            </div>

        </div>

    );
}

export default WeatherInfo;