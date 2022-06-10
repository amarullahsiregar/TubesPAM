import React  from "react";
import {Image,Text, View} from "react-native";
import ActionButton from './ActionButton';
import {Button} from '../../components'
import { colors } from "../../utils";

const Card = ({navigation, title,price,category,description,image}) => {
    return (
      <View style={{
        width: 332,
        height: 245,
        backgroundColor: colors.background,
        borderRadius: 34,
        padding: 14,
        margin: 10,
        }}>
            <Image source={{uri: 'https://api.adorable.io/avatars/150/prawito@adorable.io.png'}} />
            <Text>image</Text>
            <Text style={{
                fontSize: 16,
                color:colors.dark
            }}>{title}</Text>
            <Text>Harga : {price}</Text>
            <Text>Kategori : {category}</Text>
            {/*
            <Text>{description}</Text>
            */}
            <ActionButton
                cB={colors.primary}
                cF={colors.dark}
                title='Detail'
                onPress={() =>
                navigation.navigate('Splash')}

            />
            
        </View>
    )
  };

  export default Card;