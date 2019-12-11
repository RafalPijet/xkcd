import React from 'react';
import {Text, Image, TouchableOpacity, StyleSheet, View} from 'react-native';

class ListItem extends React.Component {
    itemHandle() {
        const {img} = this.props;
        this.props.navigation.replace('Item', {img: img});
    }
    render() {
        const {title, img, day, month, year} = this.props;
        return (
            <TouchableOpacity style={styles.container} onPress={this.itemHandle.bind(this)}>
                <View style={styles.info}>
                    <Text style={styles.title}>{title}</Text>
                    <Text>{`${day}/${month}/${year}`}</Text>
                </View>
                <Image style={styles.picture} source={img}/>
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
    },
    info: {
        display: 'flex',
        width: '50%',
        height: 150,
        justifyContent: 'space-around',
        alignItems: 'center'
    },
    picture: {
        width: 150,
        height: 150,
        resizeMode: 'contain'
    },
    title: {
        textAlign: 'center'
    }
})

export default ListItem;
