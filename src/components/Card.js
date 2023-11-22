import React, {useState} from 'react';
import { View, Text, StyleSheet, Dimensions, Image, TouchableOpacity } from 'react-native';
import colors from '../helpers/colors';
import Ionicons from '@expo/vector-icons/Ionicons'
import MaterialIcons from '@expo/vector-icons/MaterialIcons'
const width = Dimensions.get('screen').width/2 - 30

const Card = ({flower, navigation, likeFlower, addToCart}) => {
  const [isLiked, setLiked] = useState(flower.item.like);
  const [inCart, setCartStatus] = useState(flower.item.cart)
  const handleLikePress = () => {
    setLiked(prevLiked => {
      const newLiked = !prevLiked;
      return newLiked;
    });
    likeFlower(flower.item.id)
  };
  const handleCartPress = () => {
    setCartStatus(prevInCart => {
      const newInCart = !prevInCart;
      return newInCart;
    });
    addToCart(flower.item.id)
  }
  return (
    <TouchableOpacity onPress={() => navigation.navigate('Details', flower) }>
      <View style={styles.card}>
        <View style={{alignItems: 'flex-end'}}>
          <TouchableOpacity onPress={handleLikePress}>
            <View style={{width: 30, height:30, borderRadius: 15, alignItems: 'center', justifyContent: 'center', backgroundColor: isLiked ? 'rgba(245, 42, 42, 0.2)' : 'rgba(0, 0, 0, 0.2)'}}>
              <MaterialIcons name="favorite" size={18} color={isLiked ? colors.red : colors.dark} />
            </View>
          </TouchableOpacity>
        </View>
        <View style={{height:100, alignItems: 'center'}}>
            <Image style={{flex: 1, height:100, width: 100, resizeMode:'contain'}} source={flower.item.img}></Image>
        </View>
        <Text style={{fontWeight: 'bold', fontSize: 15, marginTop: 10 }}>{flower.item.name}</Text>
        <View style={{flexDirection: 'row', justifyContent: 'space-between', marginTop: 5}}>
          <Text style={{fontSize: 14, fontWeight: 'bold'}}>${flower.item.price}</Text>
          <TouchableOpacity onPress={handleCartPress}>
            <View style={{height:25, width: 25, borderRadius: 5, justifyContent: 'center', alignItems: 'center'}}>
              {inCart
              ?<Ionicons name='md-close-circle' size={25} color={colors.grey} />
              :<Ionicons name='md-add-circle' size={25} color={colors.orange} />
              }
            </View>
          </TouchableOpacity>
        </View>
        <Text>{inCart.toString()}</Text>
        <Text>{flower.item.cart.toString()}</Text>
      </View>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  card: {
    height: 225,
    backgroundColor: '#f5f5f5',
    width,
    marginHorizontal:2,
    borderRadius: 10,
    marginBottom: 20,
    padding: 15
  }
})
export default Card;