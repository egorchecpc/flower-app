import React from 'react';
import { SafeAreaView, View, StyleSheet, FlatList } from 'react-native';
import colors from '../helpers/colors';
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import flowers from '../../data'
import Card from './Card';
import { useState, useEffect } from 'react';

const CartScreen = ({navigation}) => {

  const [cartFlowers,setCartFlowers] = useState(flowers.filter(flower => flower.cart == true))
  useEffect(() => {
    setCartFlowers(flowers.filter(flower => flower.cart === true));
  }, [flowers]);
  
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: '#f5f5f5'}}>
      <View style={styles.header}>
        <MaterialIcons name='arrow-back' size={28} onPress={() => navigation.goBack()} />
      </View>
      <FlatList columnWrapperStyle={{justifyContent: 'space-between'}}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={cartFlowers} renderItem={(item) => <Card flower={item} navigation={navigation} />} />
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