import React  from "react";
import {Text} from "react-native";
import {TouchableOpacity} from "react-native";
import { colors } from "../../utils";

const Button = ({onPress, title, colorT, colorB}) => {
    return (
        <TouchableOpacity style={{
            backgroundColor:colorB,
            borderRadius:25,
            justifyContent:'center',
            alignItems:'center',
            paddingVertical:10,
          }} onPress={onPress}>
            <Text style={{
                fontSize:20,
                color: colorT,
                fontWeight:'bold',
                textAlign:'center',
            }}>
              {title}
            </Text>
          </TouchableOpacity>
    )

}
export default Button;