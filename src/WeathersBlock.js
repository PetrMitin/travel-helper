import {Component} from 'react';
import Weather from './Weather';

class WeatherBlock extends Component {
    constructor(props) {
        super(props);
        this.state = {
            days: []
        }
        this.getForecast = this.getForecast.bind(this);
    }


    getEndDate = () => {
        var result = new Date();
        result.setDate(result.getDate() + 3);
        result.setHours(6, 0, 0, 0);
        return result.toISOString();
      }

    getLatLng = async () => {
        const apikey = 'a6bb959a5522421d88e84c307325540c';
        const url = `https://api.opencagedata.com/geocode/v1/json?q=${this.props.city}&key=${apikey}`
        try {
            const res = await fetch(url);
            if (res.ok) {
                const jsonRes = await res.json();
                return jsonRes.results[0].geometry;
            }
        } catch(e) {
            alert('Enter correct destination point!');
            window.location.reload();
        }
    }

    getForecast = async () => {
        const apiKey = 'BD9uw9yKHkhaHYQg6vmGRKEXmw321nIu';
        const latLng = await this.getLatLng();
        const startTime = new Date();
        startTime.setHours(6, 0, 0, 0);
        const endTime = this.getEndDate();
        const url = `https://api.climacell.co/v3/weather/forecast/daily?apikey=${apiKey}&fields=temp,weather_code&lat=${latLng.lat}&lon=${latLng.lng}&start_time=${startTime.toISOString()}&end_time=${endTime}`;
          try {
            const response = await fetch(url);
            if (response.ok) {
              const jsonResponse = await response.json();
              return jsonResponse;
            }
        }
        catch(error){
            alert('Enter correct destination point!');
          window.location.reload();
        }
      }

      async componentDidMount() {
        const days = await this.getForecast();
        this.setState({days})
    }

    render() {
        return(
            <div id="weather">
                {this.state.days && this.state.days.map((elem, index) => <Weather data={elem} key={index} />)}
            </div>
        )
    }
}

export default WeatherBlock;