import _ from 'lodash'
import React from 'react';
import { Sparklines, SparklinesLine, SparklinesSpots,SparklinesReferenceLine } from 'react-sparklines';

function average(data){
return _.round(_.sum(data)/data.length);
}

const WeatherChart = (props) => {
return(
  <div>
    <Sparklines data={props.data} width={100} height={20}>
      <SparklinesLine color={props.color} />
      <SparklinesReferenceLine type="avg" />
    </Sparklines>
    <div>{average(props.data)} <span>{props.units}</span></div>
  </div>
)
}

export default WeatherChart
