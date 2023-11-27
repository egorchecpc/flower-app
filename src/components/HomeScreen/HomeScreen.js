import React, {useState, useEffect} from 'react';
import { View, Text, StyleSheet, SafeAreaView, TextInput, FlatList, TouchableOpacity } from 'react-native';
import colors from '../../helpers/colors';
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
import CategoriesList from '../CategoriesList';
import Card from '../Card';




const HomeScreen = ({navigation, flowers, likeFlower, addToCart, removeFromCart}) => {

  const [categoryIndex, setCategoryIndex] = useState(0);

  return (
    <SafeAreaView style={{flex: 1, paddingHorizontal: 20, backgroundColor: colors.white}}>
      <View style={styles.header}>
        <View>
          <Text style={{fontSize:25, fontWeight:'bold'}}>Welcome to</Text>
          <Text style={{fontSize: 38, fontWeight:'bold', color: colors.orange}}>Flower App</Text>
        </View>
        <TouchableOpacity onPress={() => navigation.navigate('Cart') }>
          <MaterialIcons name="shopping-cart" size={30} />
        </TouchableOpacity>
      </View>
      <View style={{marginTop: 30, flexDirection:'row'}}>
        <View style={styles.searchContainer}>
          <Ionicons name='search' size={22} color='gray' style={{marginLeft:20}} />
          <TextInput placeholder="Search" style={styles.input} />
        </View>
        <View style={styles.sort}>
          <MaterialIcons name="sort" size={40} color='#ff5a3c' />
        </View>
      </View>
      <CategoriesList categoryIndex={categoryIndex} setCategoryIndex= {setCategoryIndex} />
      <FlatList columnWrapperStyle={{justifyContent: 'space-between'}}
                showsVerticalScrollIndicator={false}
                numColumns={2}
                data={flowers}
                renderItem={(item) => <Card flower={item} navigation={navigation} likeFlower={likeFlower} addToCart={addToCart} removeFromCart={removeFromCart}/>} />
    </SafeAreaView>
  )
}


const styles = StyleSheet.create({
  header: {
    marginTop: 30,
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  searchContainer: {
    height: 50,
    backgroundColor: colors.light,
    borderRadius: 10,
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center'
  },
  input: {
    paddingLeft: 10,
    fontSize: 20,
    fontWeight: 'bold',
    color: colors.dark,
    flex: 1
  },
  sort :{
    backgroundColor: colors.light,
    marginLeft: 10,
    borderRadius: 10,
    paddingHorizontal: 5,
    alignItems: 'center',
    justifyContent: 'center'
  },
  
})

export default HomeScreen;