import React from 'react';
import {View, ScrollView, Dimensions, StyleSheet} from 'react-native';
import axios from 'axios';
import ListItem from './ListItem';
import Header from './Header';
import Loading from './Loading';

class ComicList extends React.Component {
  state = {
    last: 0,
    cors: 'https://cors-anywhere.herokuapp.com/',
    url: 'http://xkcd.com/',
    nextUrl: 'info.0.json',
    content: []
  };

  componentDidMount() {
    this.getImages();
  }

  getImages = async () => {
    const {cors, url, last, nextUrl} = this.state;
    this.setState({content: []});
    let res = await axios.get(`${cors}${url}${nextUrl}`);
    await this.setState({last: res.data.num});
    let counter = this.state.last - 7;
    while (counter <= this.state.last) {
      let res = await axios.get(`${cors}${url}${counter}/${nextUrl}`);
      let item = {
        title: res.data.title,
        img: res.data.img,
        day: res.data.day,
        month: res.data.month,
        year: res.data.year
      }
      this.setState({content: [...this.state.content, item]});
      counter++;
    }
  };

  render() {
    const {content} = this.state;
    const {getImages} = this;

    if (this.state.content.length !== 8) {
      return <Loading amount={content.length}/>
    } else {
      return (
          <View style={styles.main}>
            <Header refresh={getImages} isRefresh={true} navigation={this.props.navigation}/>
            <ScrollView style={styles.list}>
              {content.map(item => {
                return <ListItem navigation={this.props.navigation} title={item.title} img={item.img} day={item.day} month={item.month} year={item.year}/>
              })}
            </ScrollView>
          </View>
      )}
  }
}

const styles = StyleSheet.create({
  list: {
    height: Dimensions.get('window').height - 100
  }
})

export default ComicList;
