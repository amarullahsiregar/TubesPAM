import React from "react";
import {View, Text, Image}   from "react-native";
import { colors } from "../../utils";
import ActionButton from './ActionButton';
import { welcomeImg } from "../../assets";

const Welcome = ({navigation}) => {
  const goto = (screen) => {
    navigation.navigate(screen);
  }
  
  return (
      <View style={{
        backgroundColor: colors.background,
        width:"100%",
        alignItems:'center',
        justifyContent:'center',
        flex:1,
        }}>
        <Image style={styles.image} source={welcomeImg} />
        <Text style={styles.text.judul}>Welcome</Text>
        <ActionButton
          cB={colors.primary}
          // instruction='Jika sudah punya akun'
          title='Produk'
          onPress={() =>
          goto('Produk')}
          />
      </View>
    )
}

export default Welcome;

const styles = ({
  image:{
    width:280,
    height:175,
  },
  text:{
    judul:{
        color:colors.dark,
        fontSize:30,
        fontWeight:'bold',
        fontFamily:'robotobold',
        textAlign:'center',
        marginTop:100,
    }
  }
})