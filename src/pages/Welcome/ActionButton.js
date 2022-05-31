import React from "react";
import {View, Text}   from "react-native";
import { colors } from "../../utils";
import { Button } from "../../components";

const ActionButton = ({onPress,instruction, title, cB, cF}) => {
    return (
      <View style={{
        marginBottom:20,
        width:'80%',
      }}>
        <Text style={styles.text.instruction}>
            {instruction}
          </Text>
          <Button onPress={onPress} title={title} colorT={cF} colorB={cB}/>
      </View>
      )
  }
  export default ActionButton;

  const styles = ({
    text:{
      instruction:{
        marginBottom:5,
        marginTop:20,
        alignSelf:'center',
        fontSize:14,
        color:colors.secondary,
        paddingHorizontal:'15%',
      }
    }
  })