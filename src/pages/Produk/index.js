import React, {useEffect, useState}from "react";
import {
  Button,
  Text,
  View,
  FlatList,
  ScrollView,
}   from "react-native";
import {Card} from '../../components'

import {useSelector, useDispatch} from "react-redux";
import { colors } from "../../utils";
import axios from 'axios';

const Produk = ({navigation}) => {
  
  const [products,setProduct] = useState([]);

  const getData = () => {
    axios.get('https://fakestoreapi.com/products')
    .then(res => {
      console.log(res.data);
      setProduct(res.data);
    })
    
  }
  useEffect(() => {
    getData();

  },[])
  
  return (
    <ScrollView>
    <View style={{
      flex: 1,
      flexDirection: 'column',
      alignItems: 'center',
    }}>
      <Text style={{
        
      }}
      >
        </Text>
        {products.map(product => {
          return (
            <View>
            <Card
              title={product.title}
              price={product.price}
              category={product.category}
              description={product.description}
              image={'https://1.bp.blogspot.com/-xaGLx_YZWKc/WtTt4dtbEMI/AAAAAAAABqU/VHggwTYH1JcXmjUGMUJEVJQwaaIdtsurgCLcBGAs/s1600/Ayam.png'}
              navigation={navigation}
            />
          </View>
          )
        }
        )}
        </View>
    </ScrollView>
  )
}

export default Produk;