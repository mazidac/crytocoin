import React, { useState,useEffect } from "react";
import { View,StyleSheet, Text, StatusBar,Dimensions } from "react-native";
import {LineChart} from "react-native-chart-kit";
import { TouchableOpacity } from "react-native-gesture-handler";



const Lineone = () =>{
    const[chart,setChart] = useState([]);


    const getCharts = async () => {
  
        const response = await fetch("https://min-api.cryptocompare.com/data/v2/histoday?fsym=BTC&tsym=USD&limit=10");
    
        const data = await response.json()
        
        setChart(data.Data.Data)
      };

    useEffect(() => {
        getCharts();
      }, []);


    return(
        <View style={styles.container}>
          


            <LineChart
    data={{
      labels: ["04", "05", "07", "08", "09", "10","11","Now"],
      datasets: [
        {
          data: [21098.41,21870.07,22092.16,22292.96,21295.95,2195.85,21195.95,21192,21195,21192]
        }
      ]
    }}
    width={Dimensions.get("window").width} 
    height={350}
    yAxisLabel=""
    yAxisSuffix=""
    yAxisInterval={9} 
    chartConfig={{
      backgroundColor: "#faf5fc",
      backgroundGradientFrom: "#faf5fc",
      backgroundGradientTo: "#faf5fc",
      decimalPlaces: 0, 
      color: (opacity = 1) => `rgba(102, 32, 140, ${opacity})`,
      labelColor: (opacity = 1) => `rgba(102, 32, 140, ${opacity})`,
      style: {
        borderRadius: 16
      },
      propsForDots: {
        r: "4",
        strokeWidth: "1",
        stroke: "#ffa726"
      }
    }}
    bezier
    style={{
      marginVertical: 8,
      borderRadius: 16
    }}
  />
<View style={{flexDirection:'row'}}>
<TouchableOpacity style={{height:55,width:150,backgroundColor:'green',borderRadius:10}}>
                <Text style={{textAlign:'center',marginTop:14,fontSize:18,color:'#fff',fontWeight:'bold'}}>BUY</Text>
            </TouchableOpacity>
            <TouchableOpacity style={{height:55,width:150,backgroundColor:'red',borderRadius:10,marginLeft:30}}>
                <Text style={{textAlign:'center',marginTop:14,fontSize:18,color:'#fff',fontWeight:'bold'}}>SELL</Text>
            </TouchableOpacity>
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',
    }
})

export default Lineone;