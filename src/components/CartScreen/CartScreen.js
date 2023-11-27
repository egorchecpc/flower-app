import React from 'react';
import { SafeAreaView, View, StyleSheet, FlatList, TouchableOpacity, Text } from 'react-native';
import colors from '../../helpers/colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import Card from '../Card';
import { useState, useEffect } from 'react';



const CartScreen = ({navigation, flowers, likeFlower, addToCart, removeFromCart}) => {

  const [cartFlowers,setCartFlowers] = useState(flowers)
  const [test, setTest] = useState(0)
  console.log(removeFromCart.toString())
  useEffect(() => {
    setCartFlowers(flowers);
    console.log(flowers)
  }, [flowers]);
  
  useEffect(()=>{
    console.log(test)
  },[test])
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      
      <TouchableOpacity onPress={()=>setTest(test + 1)}><Text>${test}</Text></TouchableOpacity>
      <View style={styles.header}>
        <MaterialIcons name='arrow-back' size={28} onPress={() => navigation.goBack()} />
      </View>
      <FlatList contentContainerStyle={{ alignItems: 'center', justifyContent: 'center' }}
                showsVerticalScrollIndicator={false}
                numColumns={1}
                data={cartFlowers} renderItem={(item) => <Card flower={item} navigation={navigation} likeFlower={likeFlower} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
    </SafeAreaView>
  )
}



const styles = StyleSheet.create({
  header: {
    paddingHorizontal: 20,
    marginTop: 20, 
    flexDirection: 'row', 
    justifyContent: 'space-between'
  },
})

export default CartScreen;