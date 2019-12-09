import React from 'react';
import {Text, Image, View} from 'react-native';

const ListItem = props => {
  const {title, img} = props;
  return (
    <View>
      <Text>{title}</Text>
      <Image style={{width: 150, height: 150, resizeMode: 'stretch'}} source={img}/>
    </View>
  )
}

export default ListItem;