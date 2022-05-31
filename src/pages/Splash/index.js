import React, {useEffect}from "react";
import {Image, View, Text}   from "react-native";
import { welcomeImg } from "../../assets";
import { colors } from "../../utils";

const Splash = ({navigation}) => {
    useEffect(() => {
        setTimeout(() => {
            navigation.replace("Welcome");
        }, 2000);
    })
    return (
        <View>
            
            <Image style={styles.image} source={welcomeImg} />
            <Text style={styles.text}>
                Belanja Buah
            </Text>
        </View>
        )
}

export default Splash;

const styles = ({ 
  image:{
    width:280,
    height:175,
    alignSelf:'center',
    marginTop:'50%',
  },
  text:{
        color: colors.dark,
        fontSize:40,
        fontWeight:'bold',
        fontFamily:'lucida grande',
        textAlign:'center',
        marginTop:100,
    }
})