import React from 'react';
import {View, Text} from 'react-native';
import axios from 'axios';
import ListItem from './ListItem';

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
    let res = await axios.get(`${cors}${url}${nextUrl}`);
    await this.setState({last: res.data.num});
    let counter = this.state.last - 7;
    while (counter <= this.state.last) {
      let res = await axios.get(`${cors}${url}${counter}/${nextUrl}`);
      let item = {
        title: res.data.title,
        img: res.data.img
      }
      this.setState({content: [...this.state.content, item]});
      counter++;
    }
  };

  render() {
    const {last, content} = this.state;
    return (
      <View>
        <Text>XKCD</Text>
        <Text>Im comic list {content.length}</Text>
        {content.map(item => {
          return <ListItem title={item.title} img={item.img}/>
        })}
      
      </View>
    )
  }
}

export default ComicList;