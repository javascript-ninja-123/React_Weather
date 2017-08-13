import React,{Component} from 'react';
import {connect} from 'react-redux';
import WeatherChart from '../components/chart'
class WeatherList extends Component {
  renderWeather(cityData){
    const cityName = cityData.city.name,
     cityTemp = cityData.list.map(value=> {
        return value.main.temp;
    }),
    cityPressure = cityData.list.map(value=> {
      return value.main.pressure
    }),
    cityHumidity = cityData.list.map(value=> {
      return value.main.humidity
    })
      return (
        <tr key={cityName}>
          <td>{cityName}</td>
            <td>
              <WeatherChart data={cityTemp} color='red' units='K'/>
            </td>
            <td>
              <WeatherChart data={cityPressure} color='blue' units='Pha'/>
            </td>
            <td>
              <WeatherChart data={cityHumidity} color='green' units='%'/>
            </td>
        </tr>
      )
  }
    render() {
        return (
            <div>
              <table className='table table-hover'>
                <thead>
                  <tr>
                    <th>City</th>
                    <th>Temperature(K)</th>
                    <th>Pressure(hPa)</th>
                    <th>Humidity(%)</th>
                  </tr>
                </thead>
                <tbody>
                  {this.props.weather.map(this.renderWeather)}
                </tbody>
              </table>
            </div>
        );
    }
}

function mapStateToProps({weather}) {
  return{weather}
}

export default connect(mapStateToProps)(WeatherList)
