import {Component} from 'react';

class Weather extends Component {
    capitalize = str => str.charAt(0).toUpperCase() + str.substring(1)

    processWeatherCondition = weather_code => {
        let arr = weather_code.split('_');
        arr.map(this.capitalize);
        return arr.join(' ');
    }

    render() {
        return(
            <div className="weather">
                <p>{this.props.data.observation_time.value}</p>
                <h2>Temperature: {this.props.data.temp[0].min.value}C to {this.props.data.temp[1].max.value}C</h2>
                {<h2>Weather Condition: {this.processWeatherCondition(this.props.data.weather_code.value)}</h2>}
            </div>
        )
    }
}

export default Weather;