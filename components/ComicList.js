import React from 'react';
import {View} from 'react-native';
import axios from 'axios';
import ListItem from './ListItem';
import Header from './Header';

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
    const {cors, url, nextUrl} = this.state;
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
    const {content} = this.state;
    return (
        <View>
          <Header navigation={this.props.navigation}/>
          {content.map(item => {
            return <ListItem navigation={this.props.navigation} title={item.title} img={item.img}/>
          })}

        </View>
    )
  }
}

export default ComicList;
