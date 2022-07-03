import React from "react";
import { View,Text, TouchableOpacity,Image,StyleSheet } from "react-native";
import Lineone from "./line";



const Chart = ({route}) =>{
    const priceChangeColor = route.params.two > 0 ? 'green' : 'red';

    return(
        <View style={{flex:1}}>
           
            <View style={{flexDirection:'row',marginTop:30,justifyContent:'space-between',margin:10}}>
            <Image  style={{height: 30, width: 30}} source={require('../src/arrow.png')} />
            <Text style={{fontWeight:'bold',fontSize:18}}>{route.params.test}</Text>
            <Image  style={{height: 32, width: 30,}} source={require('../src/bell.png')} />
            </View>
            <View style={{flexDirection:'column',padding:10}}>
                <Image source={{uri:route.params.zero}} style={{borderRadius:50,backgroundColor:'red',height:45,width:45,padding:15,marginLeft:170,marginTop:25}} />
                <Text style={{textAlign:'center',fontSize:25,fontWeight:'bold',marginTop:15}}>${route.params.one}</Text>
                <View style={{flexDirection:'row',marginTop:7,justifyContent:'center'}}>
                <Text>+$5.50</Text>
                <Text style={{color:priceChangeColor,marginLeft:20}}>{route.params.two}%</Text>
                </View>
            </View>
            <View style={{flexDirection:'row',marginBottom:-25}}>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{textAlign:'center'}}>Day</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{textAlign:'center'}}>Week</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{textAlign:'center'}}>Month</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{textAlign:'center'}}>Year</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.btn}>
                    <Text style={{textAlign:'center'}}>All</Text>
                </TouchableOpacity>
            </View>
            <Lineone />
            {/* <TouchableOpacity style={{height:50,width:70,backgroundColor:z}}>
                <Text>BUY</Text>
            </TouchableOpacity> */}
        </View>
    )
}
const styles = StyleSheet.create({
    btn:{
        height: 25,
        marginTop:10,
        width: 67,
        marginLeft: 10,
        padding:2,
        borderRadius: 8,
        elevation:1
    }
    
  })
export default Chart;