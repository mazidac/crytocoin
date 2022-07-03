import React,{useState,useEffect} from "react";
import { Text, View,StyleSheet, FlatList,SafeAreaView,TouchableOpacity,Image } from "react-native";
import ListItem from "./listitem";
import Chart from "./two";




const PageOne = ({navigation}) =>{
  const [users, setusers] = useState([]);

  const getUsers = async () => {
  
    const response = await fetch("https://comms.globalxchange.com/coin/vault/get/all/coins");

    const data = await response.json()
    
    setusers(data.coins)
  };

  useEffect(() => {
    getUsers();
  }, []);

  

    return(
    <SafeAreaView style={styles.container}>
        <View style={styles.titleWrapper}>
        <TouchableOpacity 
        style={{borderRadius:70,height:42,width:42,backgroundColor:'#405c87'}}
        />
        <Text style={styles.largeTitle}>My balance</Text>
        <Image  style={{height: 35, width: 30,}} source={require('../src/bell.png')} />
        
        </View>
        <View style={{alignItems:'center'}}>
            <Text style={{fontWeight:'bold',fontSize:35,marginTop:20}}>$2,564.25</Text>
            <View style={{flexDirection:'row',marginTop:10}}>
              <Text style={{color:'grey'}}>Updated</Text>
              <Text> 20.03.2019 </Text>
            </View>

        </View>
    
        
      <FlatList
        keyExtractor={(item) => item.id}
        data={users}
        renderItem={({ item }) => (
          <ListItem
          coinName={item.coinName}
            symbol={item.symbol}
            usd_price={item.usd_price}
            _24hrchange={item._24hrchange}
            coinImage={item.coinImage}
            onPress={() => navigation.navigate('two',{test:item.coinName,zero:item.coinImage,one:item.usd_price,two:item._24hrchange.toFixed(2)})}
          
          />
        )}

      />
    </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:'#fff',
    },
    titleWrapper: {
        marginTop:30,
        paddingHorizontal:16,
        flexDirection:'row',
        justifyContent:'space-between'

    },
    largeTitle:{
        fontSize:19,
        fontWeight:'bold'
    },
    divider:{
        height:StyleSheet.hairlineWidth,
        backgroundColor:'#808080',
        marginHorizontal:16,
        marginTop:16
    }
})


export default PageOne;