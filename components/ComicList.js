import React from 'react';
import {View} from 'react-native';
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
        img: res.data.img
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
          <View>
            <Header refresh={getImages} hide={true} navigation={this.props.navigation}/>
            {content.map(item => {
              return <ListItem navigation={this.props.navigation} title={item.title} img={item.img}/>
            })}
          </View>
      )}
  }
}

export default ComicList;
