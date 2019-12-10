import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet} from 'react-native';

class ListItem extends React.Component {
    itemHandle() {
        const {img} = this.props;
        this.props.navigation.replace('Item', {img: img});
    }
    render() {
        const {title, img} = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={this.itemHandle.bind(this)}>
                <Text>{title}</Text>
                <Image style={{width: 150, height: 150, resizeMode: 'contain'}} source={img}/>
            </TouchableOpacity>
        )}
}

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-between',
        margin: 10,
        padding: 5,
        borderStyle: 'solid',
        borderTopColor: "#000",
        borderTopWidth: 1,
        borderBottomColor: '#000',
        borderBottomWidth: 1,
        borderRightColor: '#000',
        borderRightWidth: 1,
        borderLeftColor: '#000',
        borderLeftWidth: 1
    }
})

export default ListItem;
