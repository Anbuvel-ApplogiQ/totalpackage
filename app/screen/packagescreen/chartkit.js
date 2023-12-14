import { StyleSheet, Text, View ,Dimensions} from 'react-native'
import {
  LineChart,
  ProgressChart
} from "react-native-chart-kit";
import React from 'react'
// import { Rect, G, Svg } from 'react-native-svg';


const Chartkit = () => {
  const data = {
    labels: ["Swim", "Bike", "Run"], // optional
    data: [0.4, 0.6, 0.8]
  };
  return (
    <View style={{flex:1,alignItems:'center'}}>
      <Text>chartkit</Text>
      <LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            10,25,30,10,50,60
  
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width -16 } // from react-native
    height={220}
    yAxisLabel={'Rs'}
    chartConfig={{backgroundGradientFrom:"lightblue",
  backgroundGradientTo:"blue",
  decimalPlaces:1,
  color:(opacity=225)=>`rgba(0,0,0,${opacity})`,
  }}
  
  style={{
    borderRadius:10,
    // margin:10
    marginBottom:10
  }}

    
    />
    <ProgressChart
  data={data}
  width={Dimensions.get("window").width -16 } // from react-native
  height={220}
  strokeWidth={16}
  radius={32}
  chartConfig={{backgroundGradientFrom:"lightblue",
  backgroundGradientTo:"blue",
  decimalPlaces:1,
  color:(opacity=225)=>`rgba(0,0,0,${opacity})`,
  }}
  style={{
    borderRadius:10,
    // margin:10
    marginBottom:10

  }}

  // hideLegend={false}
/>
<LineChart
    data={{
      labels: ["January", "February", "March", "April", "May", "June"],
      datasets: [
        {
          data: [
            10,25,30,10,50,60
  
          ]
        }
      ]
    }}
    width={Dimensions.get("window").width -16 } // from react-native
    height={220}
    yAxisLabel={'Rs'}
    chartConfig={{backgroundGradientFrom:"lightblue",
  backgroundGradientTo:"blue",
  decimalPlaces:1,
  color:(opacity=225)=>`rgba(0,0,0,${opacity})`,
  }}
  bezier
  style={{
    borderRadius:10,
    // margin:10
    marginBottom:10

  }}

    
    />
    
    </View>
  )
}

export default Chartkit

const styles = StyleSheet.create({})