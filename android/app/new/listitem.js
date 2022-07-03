import React from "react";
import { Text, TouchableOpacity, View, Image,StyleSheet,Dimensions } from "react-native";


const ListItem = ({coinImage,coinName,usd_price,_24hrchange,symbol,onPress}) =>{

  const priceChangeColor = _24hrchange > 0 ? 'green' : 'red';
    return(
        <TouchableOpacity onPress={onPress} style={{
          height: 120,
          marginTop:20,
          padding:-5,
          width:Dimensions.get("window").width ,
          marginBottom:7,
          
          shadowOpacity: 1.27,
shadowRadius: 5.65,
elevation:0.25
        }}>
            <View style={styles.itemWrapper}>
                <View style={styles.leftWrapper}>
                    <Image source={{ uri:coinImage }} style={styles.Images} />
                    
                    <View style={styles.titleWrapper}>
                        <Text style={styles.title}>{coinName}</Text>
                        <Text style={styles.subtitle}>{symbol.toUpperCase()}</Text>
                    </View>
                </View>

                <View style={styles.rightWrapper}>
                <Text style={styles.title}>${usd_price.toLocaleString('en-US', { currency: 'USD' })}</Text>
                    <Text style={[styles.subtitle,{color:priceChangeColor}]}>{ _24hrchange.toFixed(2)}%</Text>
                </View>

            </View>

        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    itemWrapper: {
      paddingHorizontal: 16,
      marginTop: 24,
      flexDirection: "row",
      justifyContent: "space-between",
      alignItems: 'center',
    },
    leftWrapper: {
      flexDirection: "row",
      alignItems: 'center',
    },
    Images: {
      height: 48,
      width: 48,
      marginRight:10
    },
    titlesWrapper: {
      marginLeft: 5,
    },
    title: {
      fontSize: 18,
    },
    subtitle: {
      marginTop: 4,
      fontSize: 14,
      color: "#A9ABB1",
    },
    rightWrapper: {
      alignItems: 'flex-end',
    },
  })

export default ListItem;