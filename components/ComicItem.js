import React from 'react';
import {View, Image, StyleSheet, Dimensions} from 'react-native';
import Header from './Header';

class ComicItem extends React.Component {
  render() {
    const {params} = this.props.navigation.state;
    return (
        <View style={styles.container}>
          <Header hide={false} navigation={this.props.navigation}/>
          <Image style={styles.backgroundImage} source={{uri: params.img}}/>
        </View>
    )
  }
}

const window = Dimensions.get('window');

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flex: 1,
  },
  backgroundImage: {
    flex: 1,
    width: window.width,
    height: window.height - 100,
    resizeMode: 'contain'
  }
})

export default ComicItem;
