import React, {useEffect, useState}from "react";
import {getCities} from "../../redux/actions"; 
import {
  Button,
  Text,
  View,
  FlatList,
}   from "react-native";

import {useSelector, useDispatch} from "react-redux";
import { colors } from "../../utils";

const Login = ({navigation}) => {
  const cities =  useSelector(state => state.reducer1);
  const dispatch = useDispatch();

  const pressed = (screen) => {
    // dispatch({type: 'GET_CITIES'});
    dispatch(getCities());
    // navigation.replace(screen);
  }
  // useEffect(() => {
  //   dispatch(getCities());
  // },[]);
  return (
    <View>
      <Button title={cities.name} onPress={() =>pressed('Splash')}/>
      <FlatList
        data={cities}
        renderItem={({item}) =>(
        <View>
          <Text>{item.country}</Text>
          <Text>{item.city}</Text>
        </View>
        )}
        keyExtractor={(item, index) => index.toString()}
      />
    </View>
  )
}

export default Login;